import { Html, Loader, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Divider, Flex, Layout, Skeleton, Spin } from "antd";
import { Link } from "wouter";
import Globe from "./Globe";
import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import NavBar from "./NavBar";


export default function About() {

    const isMobile = window.innerWidth <= 600

    const GlobeWithDelay = lazy(() => {
        return new Promise(resolve => {
            setTimeout(() => resolve(import('./Globe')), 0); // Adjust delay as needed
        });
    });
    const { progress } = useProgress()

    console.log(progress)


    const contentStyle = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        color: "navy",
        backgroundColor: "#290133",
      };


    const gifScale = isMobile ? "20vh" : "35vh"
      


   

    return (
        <Html zIndexRange={[100,0]} position={[-0.05,.039,0.415]} distanceFactor={0.8}>
            <div className="crt">
                <div className="content-about">
                <NavBar></NavBar>

                <Layout style={{marginTop: "1vh"}}>
                    <Sider style={{backgroundColor: "#290133"}} width={40}>
                        <div className="stacked-text">
                            <span>M</span>
                            <span>Y</span>
                            <br></br>
                            <span>I</span>
                            <span>N</span>
                            <span>T</span>
                            <span>E</span>
                            <span>R</span>
                            <span>E</span>
                            <span>S</span>
                            <span>T</span>
                            <span>S</span>
                        </div>
                    </Sider>
                    <Content style={contentStyle}>
                        <Flex gap={30}  align="center" justify="space-around">
                            <Flex gap={0} vertical justify="flex-end" align="center">
                                <img height={gifScale} src="https://i.imgur.com/lCYZicE.gif" />
                                <p className="interests">Fish</p>
                            </Flex>
                            <Flex gap={0} vertical justify="flex-end" align="center">
                                <img height={gifScale} src="https://i.imgur.com/JUAv8ML.gif"></img>
                                <p className="interests">Surf</p>
                            </Flex>
                            <Flex gap={0} vertical justify="flex-end" align="center">
                                <img height={gifScale} src="https://i.imgur.com/EwmETeY.gif"></img>
                                <p className="interests">Coding</p>
                            </Flex>
                            <Flex gap={0} vertical justify="flex-end" align="center">
                                <img height={gifScale} src="https://i.imgur.com/VqAsSJp.gif"></img>
                                <p className="interests">Skiing</p>
                            </Flex>
                            <Flex gap={0} vertical justify="flex-end" align="center">
                                <img height={gifScale} src="https://i.imgur.com/RSiM4N2.gif"></img>
                                <p className="interests">Philosophy</p>
                            </Flex>
                        </Flex>
                        <Flex gap={30}  align="center" justify="space-around">
                            <Flex gap={0} vertical justify="flex-end" align="center">
                                <img height={gifScale} src="https://i.imgur.com/CSABIAw.gif"></img>
                                <p className="interests">Cars</p>
                            </Flex>
                            <Flex gap={0} vertical justify="flex-end" align="center">
                                <img height={gifScale} src="https://i.imgur.com/8bo5eCh.gif"></img>
                                <p className="interests">Basketball</p>
                            </Flex>
                            <Flex gap={0} vertical justify="flex-end" align="center">
                                <img height={gifScale}  src="https://i.imgur.com/2ay7xYw.gif"></img>
                                <p className="interests">Soccer</p>
                            </Flex>
                            <Flex gap={0} vertical justify="flex-end" align="center">
                                <img height={gifScale} src="https://i.imgur.com/MK69vK6.gif"></img>
                                <p className="interests">Penguins</p>
                            </Flex>
                            <Flex gap={0} vertical justify="flex-end" align="center">
                                <img height={gifScale} src="https://i.imgur.com/pxFO6Oc.gif"></img>
                                <p className="interests">Weather</p>
                            </Flex>
                            {/* <Flex gap={0} vertical justify="flex-end" align="center">
                                <img src="https://i.imgur.com/I4CQWon.gif"></img>
                                <p height={gifScale} className="interests">Cognitive Science</p>
                            </Flex> */}
                            

                            
                            
        
                           
                            

                        </Flex>
                        

                        
                    </Content>
                    
                </Layout>
             
                <Flex gap={0} align="center" justify="space-between">
                  <div className="globeCard">
                    <p className="globeCardTitle">Earth</p>
                    <p className="globeCardSubTitle">Physical Properties</p>
                    <p className="globeFacts">mass10_24kg: 5.97</p>
                    <p className="globeFacts">equatorialRadiusKM: 6378.10</p>
                    <p className="globeFacts">polarRadiusKM: 6356.80</p>
                    <p className="globeCardSubTitle">Countries Visited</p>
                    <p className="globeFacts">North America: 3/23</p>
                    <p className="globeFacts">Central America: 2/7</p>
                    <p className="globeFacts">South America: 0/12</p>
                    <p className="globeFacts">Africa: 0/54</p>
                    <p className="globeFacts">Europe: 3/50</p>
                    <p className="globeFacts">Asia: 1/48</p>
                    <p className="globeFacts">Australia: 1/1</p>
                    <p className="globeCardSubTitle">Rotational Dynamics</p>
                    <p className="globeFacts">lengthOfDayHrs: 24.00</p>
                    <p className="globeFacts">obliquityToOrbitDeg: 23.44</p>
                    <p className="globeFacts">inclinationOfEquatorDeg: 23.44</p>
                



                  </div>
                    <Suspense fallback={<div style={{width: "100%", display: "flex", justifyContent: "center", }}><Spin size="large"></Spin></div>}>
                
                        <Canvas style={{width: "100%", height: "35vh", left: "0%"}}>
                            {/* <Html className="globeTitle" occlude center position={[0,2.75,0]}>Countries I have visited</Html> */}
                            <OrbitControls enableZoom={false} enablePan={false}></OrbitControls>
                            <ambientLight position={[0,25,0]} intensity={5}></ambientLight>
                            {/* <GlobeWithDelay></GlobeWithDelay> */}
                            <Globe></Globe>
                            
                           
                        </Canvas>
                        </Suspense>

                </Flex>
                </div>
            </div>
        </Html>
    )
}