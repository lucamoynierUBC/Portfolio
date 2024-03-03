import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Button, Card, ConfigProvider, Divider, Flex, Space, Spin } from "antd";
import { useState, useEffect, useRef, Suspense } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { PiExamFill, PiLinkedinLogo, PiLinkedinLogoDuotone } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import { Link } from "wouter";
import Globe from "./Globe";
import MiniGame from "./MiniGame";

export default function Screen() {

    document.addEventListener('touchstart', {})

    const [selection, setSelection] = useState('experience')


    const handleSelection = () => {
        switch (selection) {
            case 'experience':
                console.log("experience")
            
                break
            
            case 'about':
                console.log("about")

                break
            
            case 'projects':
                console.log("projects")
                break
            
            case 'resume':
                console.log("resume")
                
                break

            case 'contact':
                console.log("contact")

                break
        }
    }

    function useTypewriterEffect(text, typingSpeed = 50, key) {
        const [printedText, setPrintedText] = useState('');
        const [index, setIndex] = useState(0);
        const keyRef = useRef(key); // useRef to track the key
    
        useEffect(() => {
            // Reset when key changes
            if (keyRef.current !== key) {
                setPrintedText('');
                setIndex(0);
                keyRef.current = key;
            }
        }, [key]);
    
        useEffect(() => {
            let timer;
            if (index < text.length) {
                timer = setTimeout(() => {
                    setPrintedText((prev) => prev + text[index]);
                    setIndex(index + 1);
                }, typingSpeed);
            }
    
            return () => clearTimeout(timer); // Clean up the timeout
        }, [index, text, typingSpeed]);
    
        return printedText;
    }

    const experienceKey = selection === 'experience' ? 'experience' : null;
    const linebr = useTypewriterEffect("--------------------------------------------------------------------------"  , 10, experienceKey);
    const link = useTypewriterEffect("Learn more", 10, experienceKey)
    const experience1 = useTypewriterEffect("Software Engineer Intern"  , 10, experienceKey);
    const company1 = useTypewriterEffect(" NYC Department of City Planning"  , 10, experienceKey);
    const date1 = useTypewriterEffect("6/23 - 12/23"  , 10, experienceKey);
    const description1 = useTypewriterEffect("Built and designed civic engagement web app using WebGL "  , 10, experienceKey);
    const description3 = useTypewriterEffect("Used React for UI, Three.js to handle 3D geometry, and GLSL to develop custom shaders", 10, experienceKey);
    const link1 = useTypewriterEffect("link"  , 10, experienceKey);
    const experience2 = useTypewriterEffect("Teaching Assistant"  , 10, experienceKey);
    const description2 = useTypewriterEffect("Ran labs using Unity to simulate various phenomenas related to COGS 300 course content"  , 8, experienceKey);
    const experience3 = useTypewriterEffect("Among, busboy, carpenters apprentice and other pursuits..."  , 10, experienceKey);
    const date2 = useTypewriterEffect("9/22 - 12/23"  , 10, experienceKey);
    const company2 = useTypewriterEffect(" The University of British Columbia"  , 10, experienceKey);
    
    const aboutKey = selection === 'about' ? 'about' : null;
    const aboutText = useTypewriterEffect("I'm born and raised in Brooklyn NY, and came to Vancouver Canada to pursue my bachelors degree in Cognitive Systems. I am in my final year of university. I like to build things and experiences that I can share with others. I'm interested in 3D graphics, design, civic tech and computational modelling. I thrive in ambiguity and enjoy things that are uncoventional and experimental. In my spare time I like to play basketball, practice DJing, and 3D model. "  , 10, aboutKey);

    useEffect(() => {
        handleSelection();
    }, [selection]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowUp" || event.key === "ArrowDown") {
                setSelection(prev => {
                    switch (prev) {
                        case 'experience':
                            return event.key === "ArrowUp" ? 'contact' : 'about';
                        case 'about':
                            return event.key === "ArrowUp" ? 'experience' : 'projects';
                        case 'projects':
                            return event.key === "ArrowUp" ? 'about' : 'resume';
                        case 'resume':
                            return event.key === "ArrowUp" ? 'projects' : 'contact';
                        case 'contact':
                            return event.key === "ArrowUp" ? 'resume' : 'experience';
                        default:
                            return prev;
                    }
                });
            }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    
    
    return (
        <Html zIndexRange={[100,0]} position={[-0.05,.039,0.415]} distanceFactor={0.8}>
            <div className="crt">
                <div className="content">
                <h1 className="header">Luca Moynier</h1>
                <p onClick={() => setSelection('experience')} className={`text ${selection === 'experience' ? 'highlighted' : ''}`}>
                    Experience
                </p>
                {/* <MiniGame></MiniGame> */}



                {selection === 'experience' && (
                    <div className='smallText'> 
                        <div>
                            <Flex gap={"middle"}>
                                
                                <div className="position">
                                    {experience1}
                                </div>
                                <div className="company">
                                    @
                                    <a href="https://www.nyc.gov/site/planning/index.page" target="_blank">
                                        {company1}
                                    </a>
                                </div>

                            </Flex>
                            
                            <div className="date">
                            {date1}
                            </div>
                            <ul>
                                <li>
                                    {description1} <a style={{color: '#34e2e2'}} href="https://cif-ud-project.vercel.app/" target="_blank"> {link1} </a>
                                
                                   
                                </li>
                                <li>
                                    {description3}
                                </li>
                                <li >
                                    <Link  href="/projects">
                                        <a style={{color: '#34e2e2'}}>{link}</a>
                                    </Link>
                                </li>
                            </ul>
                            <Flex gap={"middle"}>
                                <div className="position">
                                {experience2}
                                </div>

                                <div className="company">
                                    @
                                    <a href="https://cogsys.ubc.ca/" target="_blank">{company2}
                                    </a>
                                </div>
                            </Flex>
                            <div className="date">
                            {date2}
                            </div>
                            <ul>
                                <li>
                                    {description2}
                                </li>
                            </ul>
                            <br/>
                
                            {experience3}
                        </div>
                    </div>
                )}
                <Link href="/about">
                    <p onClick={() => setSelection('about')} className={`text ${selection === 'about' ? 'highlighted' : ''}`}>
                        About
                    </p>
                </Link>
                {/* {selection === 'about' && (
                   
                    <div>
                        <div className="smallText">
                            {aboutText}

                        
                            <Flex style={{marginTop: "50px"}} justify="space-between">
                            <h3>Countries Visted:</h3>
                            <Canvas style={{border : "solid 2px green", width: "50%", height: "300px"}}>
                                <OrbitControls enableZoom={false} enablePan={false}></OrbitControls>
                                <ambientLight position={[0,25,0]} intensity={5}></ambientLight>
                                
                                <mesh>
                                    <Globe></Globe>
                                </mesh>
                            

                            </Canvas>
                            </Flex>
                        
                            

                        </div>
                    </div>
                   
                )} */}
                <p onPointerDown={() => setSelection('projects')} className={`text ${selection === 'projects' ? 'highlighted' : ''}`}>
                    Projects
                </p>
                {selection === 'projects' && (
                    <div className="projects">
                        <div className="smallText">
                            <Flex gap={"small"}>
                                <div className="card">
                                    <div className="card-title">
                                        NBA Data visualization
                                    </div>
                                    <div className="card-date">
                                        Spring 2023
                                    </div>
                                    <div className="card-content">
                                        In an exploration of data visualization I created a dashboard to visualize trends in the NBA. 
                                        I created multi-view representations exploring different marks and channels to encode NBA data. 
                                        Several of the visualizations I created are interactive, a subset of which have a bi-directional interaction. 
                                        Additionally I carried out extenstive preporcessing and data merging using the Pandas library. 
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-title">
                                        Labby
                                    </div>
                                    <div className="card-date">
                                        Winter 2022 - Spring 2023
                                    </div>
                                    <div className="card-content">
                                    Built a robust and scalable laboratory management system with a small student team from scratch as a Software Engineer for BC Cancer Agency at UBC Launch Pad, using Node.js, React, MySQL, and AWS services. We used agile project management methodolgies. 
                                    </div>
                                </div>
                                
                            </Flex>
                            
                            <Flex gap={"small"}>
                                <div className="card">
                                    <div className="card-title">
                                        BestBuy review analyzer
                                    </div>
                                    <div className="card-date">
                                        Winter 2022
                                    </div>
                                    <div className="card-content">
                                        In a small group with 2 other classmates we developed a Flask based web application to query and explore the Best Buy product catalog. I primarily was responsible for creating the database, writing queries, and implementing controllers and repositories.
                                    </div>
                                </div>
                            <div className="card">
                                    <div className="card-title">
                                        Algorithmic Art
                                    </div>
                                    <div className="card-date">
                                        Fall 2022
                                    </div>
                                    <div className="card-content">
                                    Represented images as 4-ary trees whose nodes contain information about square subsets of the image where every node is the root of a subtree that represents a subset of the original image.
                                    Pruned, or cut off, parts of the quadtree to generate pixelated algorithmic art. This was achieved by clearing the
                                    memory associated with each of its four children and leaving the node as a leaf.
                                    </div>
                                </div>
                            </Flex>
                            <Flex gap={"small"}>
                                <div className="card">
                                    <div className="card-title">
                                        Autonomous Ardruino Bot
                                    </div>
                                    <div className="card-date">
                                        Winter 2021
                                    </div>
                                    <div className="card-content">
                                        Developed an autonomous Arduino-based car equipped with ultrasonic sensors to enable obstacle detection and avoidance, 
                                        as well as light sensors to enable the car to follow predefined paths autonomously. Programmed the car using C++ to implement real-time decision-making algorithms, allowing it to navigate and solve a maze and follow predefined paths autonomously.
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-title">
                                        Sound Board
                                    </div>
                                    <div className="card-date">
                                        Winter 2021
                                    </div>
                                    <div className="card-content">
                                    Developed a Soundboard where users can loop sounds, build and save playlists from an extensive list of sounds. 
                                    Utilized JSON for data persistence for tasks and implemented read/write operations to and from files. 
                                    Self learned Java Swing and AWT to build a GUI and wrote unit tests with 100% code coverage for the back end.
                                    </div>
                                </div>

                            </Flex>
                        </div>
                    </div>
                )}
                <p onPointerDown={() => setSelection('resume')} className={`text ${selection === 'resume' ? 'highlighted' : ''}`}>
                    Resume
                </p>
                {selection === 'resume' && (
                    <div className="smallText">
                        <a style={{color: '#34e2e2'}} href="https://drive.google.com/file/d/1WhNOfRNo63tRKmzXcdGdHvwnnrJj_CMu/view?usp=sharing" target="_blank">Download .PDF</a> (May be outdated)

                    </div>
                )}
                <p onPointerDown={() => setSelection('contact')} className={`text ${selection === 'contact' ? 'highlighted' : ''}`}>
                    Contact
                </p>
                {selection === 'contact' && (
                    <div className="smallText">
                        <Flex justify="space-evenly">
                            <a href="https://www.linkedin.com/in/lmoynier/" target="_blank"><PiLinkedinLogo size={"30px"}></PiLinkedinLogo></a>
                            <a href="https://github.com/lucamoynierUBC" target="_blank"><FaGithub size={"30px"}></FaGithub></a>
                            <a href="mailto:lucamoynier2@gmail.com" target="_blank"><SiGmail size={"30px"}></SiGmail></a>
                        </Flex>
                       
                    </div>
                )}
                </div>
            </div>
        </Html>
    )
}