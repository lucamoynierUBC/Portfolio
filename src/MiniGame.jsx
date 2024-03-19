// import { Box, OrbitControls, PerspectiveCamera, Plane, Text3D, Torus, TorusKnot, useProgress } from "@react-three/drei";
// import { Canvas, useThree } from "@react-three/fiber";
// import React, { useEffect, useMemo, useRef, useState } from "react";
// import * as THREE from 'three'
// import particlesVertexShader from './shaders/particles/vertex.glsl';
// import particlesFragmentShader from './shaders/particles/fragment.glsl';
// import picture1 from '/static/picture-5.jpg';

// export default function MiniGame() {
//     const Particles = React.memo(() => { 
//         const { scene, size, camera, renderer} = useThree();
//         // const manager = new THREE.LoadingManager();
//         // const textureLoader = new THREE.TextureLoader(manager)
//         const displacement = {}

//         const sizes = {
//             width: window.innerWidth,
//             height: window.innerHeight,
//             pixelRatio: Math.min(window.devicePixelRatio, 2)
//         }
        

//         //2D canvas

//         displacement.canvas = document.createElement('canvas')
//         displacement.canvas.width = 128
//         displacement.canvas.height = 128
//         displacement.canvas.style.position = 'fixed'
//         displacement.canvas.style.width = '256px'
//         displacement.canvas.style.height = '256px'
//         displacement.canvas.style.top = 0
//         displacement.canvas.style.left = 0
//         displacement.canvas.style.zIndex = 10
//         // document.body.append(displacement.canvas)

//         displacement.context = displacement.canvas.getContext('2d')
//         // displacement.context.fillStyle = 'red'
//         displacement.context.fillRect(0,0, displacement.canvas.width, displacement.canvas.height)

//         // Glow Image
//         displacement.glowImage = new Image()
//         displacement.glowImage.src = '/static/glow.png'
        
//         // window.setTimeout(() =>{
//         //     displacement.context.drawImage(displacement.glowImage, 20, 20, 32, 32)
//         // }, 6000)
//         // displacement.context.drawImage(displacement.glowImage, 20, 20, 32, 32)

        

//         displacement.interactivePlane = new THREE.Mesh(
//             new THREE.PlaneGeometry(10, 10),
//             new THREE.MeshBasicMaterial({color: 'red'})
//         )
//         displacement.interactivePlane.visible = false
//         scene.add(displacement.interactivePlane)


//         // Raycaster
//         displacement.raycaster = new THREE.Raycaster()
//         displacement.screenCursor = new THREE.Vector2(9999, 9999)
//         displacement.canvasCursor = new THREE.Vector2(9999, 9999)

//         // displacement.texture = new THREE.CanvasTexture(displacement.canvas)
//         useEffect(() => {
//             displacement.canvas = document.createElement('canvas')
//             displacement.canvas.width = 128
//             displacement.canvas.height = 128
//             displacement.canvas.style.position = 'fixed'
//             displacement.canvas.style.width = '256px'
//             displacement.canvas.style.height = '256px'
//             displacement.canvas.style.top = 0
//             displacement.canvas.style.left = 0
//             displacement.canvas.style.zIndex = 10
//             // document.body.append(displacement.canvas)
    
//             displacement.context = displacement.canvas.getContext('2d')
//             // displacement.context.fillStyle = 'red'
//             displacement.context.fillRect(0,0, displacement.canvas.width, displacement.canvas.height)
    
//             // Glow Image
//             displacement.glowImage = new Image()
//             displacement.glowImage.src = '/static/glow.png'
            
//             // window.setTimeout(() =>{
//             //     displacement.context.drawImage(displacement.glowImage, 20, 20, 32, 32)
//             // }, 6000)
//             // displacement.context.drawImage(displacement.glowImage, 20, 20, 32, 32)
    
            
    
//             displacement.interactivePlane = new THREE.Mesh(
//                 new THREE.PlaneGeometry(10, 10),
//                 new THREE.MeshBasicMaterial({color: 'red'})
//             )
//             displacement.interactivePlane.visible = false
//             scene.add(displacement.interactivePlane)
    
    
//             // Raycaster
//             displacement.raycaster = new THREE.Raycaster()
//             displacement.screenCursor = new THREE.Vector2(9999, 9999)
//             displacement.canvasCursor = new THREE.Vector2(9999, 9999)
    
//             displacement.texture = new THREE.CanvasTexture(displacement.canvas)
//         }, [])


//         // Note: use a useEffect in place of Tick
//         useEffect(() => {
//             const handleMouseMove = (event) => {
//                 displacement.screenCursor.x = (event.clientX / window.innerWidth) * 2 - 1;
//                 displacement.screenCursor.y = - (event.clientY / window.innerHeight) * 2 + 1;
        
//                 displacement.raycaster.setFromCamera(displacement.screenCursor, camera);
//                 const intersections = displacement.raycaster.intersectObject(displacement.interactivePlane);
        
//                 if (intersections.length)
//                 {
//                     const uv = intersections[0].uv
//                     displacement.canvasCursor.x = uv.x * displacement.canvas.width
//                     displacement.canvasCursor.y = (1- uv.y) * displacement.canvas.height

//                 }
//                 displacement.context.globalCompositeOperation = "source-over"
//                 displacement.context.globalAlpha = 0.05
//                 displacement.context.fillRect(0, 0, displacement.canvas.width, displacement.canvas.height)
//                 // displacement
//                 const glowSize = displacement.canvas.width * 0.25
//                 displacement.context.globalCompositeOperation = "lighten"
//                 displacement.context.globalAlpha = 1
//                 displacement.context.drawImage(
//                     displacement.glowImage, 
//                     displacement.canvasCursor.x - glowSize * 0.5,
//                     displacement.canvasCursor.y - glowSize * 0.5,
//                     glowSize,
//                     glowSize
//                 )

//                 displacement.texture.needsUpdate = true
            
             
                


//             };
        
//             window.addEventListener('pointermove', handleMouseMove);
        
//             return () => {
//                 window.removeEventListener('pointermove', handleMouseMove);
//             };
//         }, [camera]); 
        

    

//         useEffect(() => {
            


            
//             const particlesGeometry = new THREE.PlaneGeometry(10, 10, 128, 128);
//             particlesGeometry.setIndex(null)
//             particlesGeometry.deleteAttribute('normal')
//             const intensitiesArray = new Float32Array(particlesGeometry.attributes.position.count)
//             const anglesArray = new Float32Array(particlesGeometry.attributes.position.count)

//             for (let i = 0; i < particlesGeometry.attributes.position.count; i++)
//             {
//                 intensitiesArray[i] = Math.random()
//                 anglesArray[i] = Math.random() * Math.PI * 2
//             }

//             particlesGeometry.setAttribute('aIntensity', new THREE.BufferAttribute(intensitiesArray, 1))
//             particlesGeometry.setAttribute('aAngle', new THREE.BufferAttribute(anglesArray, 1))

//             const particlesMaterial = new THREE.ShaderMaterial({
//                 vertexShader: particlesVertexShader,
//                 fragmentShader: particlesFragmentShader,
//                 uniforms: {
//                     uResolution: new THREE.Uniform(new THREE.Vector2(sizes.width * window.devicePixelRatio, sizes.height * window.devicePixelRatio)),
//                     // uPictureTexture: new THREE.Uniform(textureLoader.load('/static/picture-2.png')),
//                     uDisplacementTexture: new THREE.Uniform(displacement.texture)
//                 },
//             });

           


//             const particles = new THREE.Points(particlesGeometry, particlesMaterial);
//             scene.add(particles);

//             return () => {
//                 scene.remove(particles);

                
//             };
//         }, []); 

//         return null; 
//     });

    
    
    
//     return (
//         <Canvas style={{ width: "100%", marginTop: "10vh", height: "30vh", overflow: "hidden"}}>
//             <OrbitControls></OrbitControls>
//             <Particles></Particles>
//         </Canvas>
//     )
// }
import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { ShaderMaterial } from 'three';
import vertexShader from './shaders/particles/vertex.glsl';
import fragmentShader from './shaders/particles/fragment.glsl';

const Particles = React.memo(() => {
  const textureLoader = useTexture('/static/picture-2.png');
//   const displacementTexture = useTexture('/static/glow.png'); // This should be updated to your displacement logic
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(10, 10, 128, 128);
    geometry.setIndex(null);
    geometry.deleteAttribute('normal');
    // Other complex operations
    return geometry;
  }, []); // Empty dependency array means this only runs once

  const {camera, scene} = useThree()
  

  // Custom attributes
  const intensitiesArray = new Float32Array(particlesGeometry.attributes.position.count);
  const anglesArray = new Float32Array(particlesGeometry.attributes.position.count);
  for (let i = 0; i < particlesGeometry.attributes.position.count; i++) {
    intensitiesArray[i] = Math.random();
    anglesArray[i] = Math.random() * Math.PI * 2;
  }
  particlesGeometry.setAttribute('aIntensity', new THREE.BufferAttribute(intensitiesArray, 1));
  particlesGeometry.setAttribute('aAngle', new THREE.BufferAttribute(anglesArray, 1));

  const shaderMaterial = useRef();
  const { size } = useThree();
  const displacement = {}
  displacement.canvas = document.createElement('canvas')
  displacement.canvas.width = 128
  displacement.canvas.height = 128
  displacement.canvas.style.position = 'fixed'
  displacement.canvas.style.width = '256px'
  displacement.canvas.style.height = '256px'
  displacement.canvas.style.top = 0
  displacement.canvas.style.left = 0
  displacement.canvas.style.zIndex = 10
//   document.body.append(displacement.canvas)

  displacement.context = displacement.canvas.getContext('2d')
//   displacement.context.fillStyle = 'red'
  displacement.context.fillRect(0,0, displacement.canvas.width, displacement.canvas.height)

  // Glow Image
  displacement.glowImage = new Image()
  displacement.glowImage.src = '/static/glow.png'

  // window.setTimeout(() =>{
  //     displacement.context.drawImage(displacement.glowImage, 20, 20, 32, 32)
  // }, 6000)
  // displacement.context.drawImage(displacement.glowImage, 20, 20, 32, 32)



  displacement.interactivePlane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshBasicMaterial({color: 'red'})
  )
  displacement.interactivePlane.visible = false
  scene.add(displacement.interactivePlane)


  // Raycaster
  displacement.raycaster = new THREE.Raycaster()
  displacement.screenCursor = new THREE.Vector2(9999, 9999)
  displacement.canvasCursor = new THREE.Vector2(9999, 9999)

  displacement.texture = new THREE.CanvasTexture(displacement.canvas)

        useEffect(() => {
        const handleMouseMove = (event) => {
            displacement.screenCursor.x = (event.clientX / window.innerWidth) * 2 - 1;
            displacement.screenCursor.y = - (event.clientY / window.innerHeight) * 2 + 1;

            displacement.raycaster.setFromCamera(displacement.screenCursor, camera);
            const intersections = displacement.raycaster.intersectObject(displacement.interactivePlane);

            if (intersections.length)
            {
                const uv = intersections[0].uv
                displacement.canvasCursor.x = uv.x * displacement.canvas.width
                displacement.canvasCursor.y = (1- uv.y) * displacement.canvas.height

            }
            displacement.context.globalCompositeOperation = "source-over"
            displacement.context.globalAlpha = 0.05
            displacement.context.fillRect(0, 0, displacement.canvas.width, displacement.canvas.height)
            // displacement
            const glowSize = displacement.canvas.width * 0.25
            displacement.context.globalCompositeOperation = "lighten"
            displacement.context.globalAlpha = 1
            displacement.context.drawImage(
                displacement.glowImage, 
                displacement.canvasCursor.x - glowSize * 0.5,
                displacement.canvasCursor.y - glowSize * 0.5,
                glowSize,
                glowSize
            )

            displacement.texture.needsUpdate = true
        
            
            


        };

        window.addEventListener('pointermove', handleMouseMove);

        return () => {
            window.removeEventListener('pointermove', handleMouseMove);
        };
    }, [camera]); 

  useEffect(() => {

    shaderMaterial.current.uniforms.uResolution.value.set(size.width * window.devicePixelRatio, size.height * window.devicePixelRatio);
  }, [size]);
  console.log("render")
  return (
    <points geometry={particlesGeometry}>
      <shaderMaterial
        ref={shaderMaterial}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uResolution: { value: new THREE.Vector2(size.width * window.devicePixelRatio, size.height * window.devicePixelRatio) },
          uPictureTexture: { value: textureLoader },
          uDisplacementTexture: { value: displacement.texture }
        }}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
})

const Scene = () => {
  return (
    <>
      <Particles />
      {/* <OrbitControls enableDamping /> */}
    </>
  );
};

const MiniGame = () => {
  return (
    <Canvas

      style={{ height: "40vh", width: "100%" }}
   
    >
      <Scene />
    </Canvas>
  );
};

export default MiniGame;
