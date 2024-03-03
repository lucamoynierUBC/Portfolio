import { Box, Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Button, Flex } from "antd";
import { BoxGeometry } from "three";
import { Link } from "wouter";
import Globe from "./Globe";


export default function Projects() {
    
    return (
        <Html zIndexRange={[100,0]} position={[-0.05,.039,0.415]} distanceFactor={0.8}>
            <div className="crt">
                <div className="content">
                <div style={{margin: '0px'}}>
                    <Link href="/">
                        <a style={{color: '#34e2e2'}}>Return</a>
                    </Link>
                </div>
               

                    <h1 className="title">Housing Explorer</h1>
        
                 
                    
    
                    <p className="projectText">Changes in zoning laws and land-use plans emerge as a response to a nexus of urban challenges. NYC DCP who develop these frameworks are beginning to rely more on public participation to help facilitate planning processes. However, to enable a wider public understanding of the plans, we have developed a 3D web-based application leveraging the JavaScript Three.js library.</p>
                    
                    <p className="team"> Project Team: Jesse Hogan (UI/UX) Luca Moynier (Developer + Design) </p>
                    <p className="team"> Chau Tran, Gary Chung, Crystal Jane Eksi (Supervisors)</p>
                    <h3 className="goals">Goals</h3>
                    <ol >
                        <li className="goals">Create an interactive 3D model hosted on the web</li>
                        <li className="goals">Include toggles to communicate variations in the built environment</li>
                        <li className="goals">Communicate the DCP's <a style={{color: '#34e2e2'}} href="https://www.goodurbandesign.nyc/" target="_blank">Principles of Good Urban Design</a></li>
                        <li className="goals">Prioritize a simple and intuitive interface that is replicable and scalable</li>
                    </ol>

                    <h3 className="goals"> Development Tools</h3>
                    <p className="projectText"> Dev: React, Three.js, Node.js JavaScript, Zustand(state management)</p>
                    <p className="projectText"> Desgin: Figma, Blender, Rhinoceros 3D</p>
                    
                    <Flex align="center">
                        <h3 className="goals">Demo:</h3>
                        <a style={{color: '#34e2e2'}} href="https://cif-ud-project.vercel.app/" target="_blank">link</a>
                    </Flex>
                
                {/* <Canvas style={{border : "solid 2px green", width: "50%", height: "50%", left: "25%"}}>
                    <OrbitControls enableZoom={false} enablePan={false}></OrbitControls>
                    <ambientLight position={[0,25,0]} intensity={5}></ambientLight>
                    
                    <mesh>
                        <boxGeometry></boxGeometry>
                        <meshStandardMaterial color={"red"}></meshStandardMaterial>
                        <Globe></Globe>
                    </mesh>

                </Canvas> */}
                
                    
                    

            


                </div>
               
                
            </div>
        </Html>
    )
}