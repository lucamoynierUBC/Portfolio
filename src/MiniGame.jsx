import { Box, OrbitControls, Plane, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


export default function MiniGame() {
    return (
        <Canvas style={{border: "2px solid green", width: "50%", height: "100px", left: "3%"}}>
            
           <Box scale={[6,0.1,3]}>
                <meshNormalMaterial></meshNormalMaterial>
           </Box>

            <Text3D letterSpacing={-0.06} position={[-3,-2,0]} size={1} font="/Inter_Bold.json">
            Hello
            <meshNormalMaterial />
            </Text3D>
            <OrbitControls></OrbitControls>
            <ambientLight></ambientLight>
        </Canvas>
        
    )
}