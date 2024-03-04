import { Html, Loader, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Divider, Flex, Skeleton, Spin } from "antd";
import { Link } from "wouter";
import Globe from "./Globe";
import { Suspense, lazy, useEffect, useState } from "react";


export default function About() {

    
    const GlobeWithDelay = lazy(() => {
        return new Promise(resolve => {
            setTimeout(() => resolve(import('./Globe')), 2500); // Adjust delay as needed
        });
    });
    

    return (
        <Html zIndexRange={[100,0]} position={[-0.05,.039,0.415]} distanceFactor={0.8}>
            <div className="crt">
                <div className="content">
                <div style={{margin: '0px'}}>
                    <Link href="/">
                        <a style={{color: '#34e2e2'}}>Return</a>
                    </Link>
                </div>

                <p className="about-text">I'm born and raised in Brooklyn NY, and came to Vancouver Canada to pursue my bachelors degree in
                 Cognitive Systems at the University of British Columbia. 
                </p> 
    
                <p className="about-text">
                 I enjoy the uncoventional and the ambiguity that comes with it. 
                I love experiencing new things and the unknown. I've always been interested in simulations 
                 and creating fictional worlds of our physical on. It started as a hobby in 3D models and evloved into computational simulations and cellular automata when I entered university. 
                 This naturally led to me learning and creating visualization of all mediums to tell stories and learn more abstract phemomena. 
            
                </p> 
           
                <p className="about-text">
                 I enjoy reading non-fiction books, love to ski (powder hound), and play basketball.
                 I've included all the countries I've visited in the visualization below. 

                </p>
                <Flex vertical align="center" justify="center">
                    <h2 className="title">Countries Visited:</h2>
                  
                    <Suspense fallback={<div style={{width: "100%", display: "flex", justifyContent: "center", }}><Spin size="large"></Spin></div>}>
                
                        <Canvas style={{width: "100%", height: "400px", left: "3%"}}>
                            <OrbitControls enableZoom={false} enablePan={false}></OrbitControls>
                            <ambientLight position={[0,25,0]} intensity={5}></ambientLight>
                            <GlobeWithDelay></GlobeWithDelay>
                           
                        </Canvas>
                        </Suspense>
                </Flex>
                </div>
            </div>
        </Html>
    )
}