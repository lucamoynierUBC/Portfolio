uniform vec2 uResolution;
uniform sampler2D uPictureTexture;
uniform sampler2D uDisplacementTexture;

attribute float aIntensity;
attribute float aAngle;

varying vec3 vColor;

void main()
{
    // Displacement
    vec3 newPosition = position;
    float displacementIntentsity = texture(uDisplacementTexture, uv).r;
    displacementIntentsity = smoothstep(0.25, 0.8, displacementIntentsity);

    vec3 displacement = vec3(
        cos(aAngle) * 0.2,
        sin(aAngle) * 0.2,
        1.0
    );

    displacement = normalize(displacement);
    displacement *= displacementIntentsity;
    displacement *= 1.0;
    displacement *= aIntensity;
    newPosition += displacement;

    // Final position
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    float pictureIntentsity = texture(uPictureTexture, uv).r;

    // Point size
    gl_PointSize = 0.05 * pictureIntentsity * uResolution.y;
    gl_PointSize *= (1.0 / - viewPosition.z);

    vColor = vec3(pow(pictureIntentsity, 2.0));

}