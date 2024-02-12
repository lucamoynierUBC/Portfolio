import { Box, Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Flex } from "antd";
import { BoxGeometry } from "three";

export default function Projects() {
    
    return (
        <Html zIndexRange={[100,0]} position={[-0.05,.039,0.415]} distanceFactor={0.8}>
            <div className="crt">
                <div className="content">
                <img style={{opacity: "70%", margin: '5px'}}  width={"100px"} alt="NYC Planning" src="https://raw.githubusercontent.com/NYCPlanning/dcp-logo/master/dcp_logo_white_772.png" />
                 <h1 className="title">Housing Explorer</h1>
                 
                    
    
                    <p className="projectText">Changes in zoning laws and land-use plans emerge as a response to a nexus of urban challenges. City agencies who develop these frameworks are beginning to rely more on public participation to help facilitate planning processes. However, to enable a wider public understanding of the plans, we have developed a 3D web-based application leveraging the JavaScript Three.js library.</p>
                    <Flex justify="center">
                        <p className="team"> Project Team: Jesse Hogan (UI/UX) Luca Moynier (Developer + Design) 
                        </p>
                    </Flex>
                    <Flex justify="center">
                        <p className="team"> Chau Tran, Gary Chung, Crystal Jane Eksi (Supervisors)
                        </p>
                    </Flex>
                    <Canvas >
                        <OrbitControls enableZoom={false}></OrbitControls>
                        <ambientLight></ambientLight>
                        <mesh>
                            <boxGeometry></boxGeometry>
                            <meshStandardMaterial></meshStandardMaterial>
                        </mesh>
      
                    </Canvas>
                    

            


                </div>
               
                
            </div>
        </Html>
    )
}