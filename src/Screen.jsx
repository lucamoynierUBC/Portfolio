import { Html } from "@react-three/drei";
import { Flex } from "antd";
import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { PiExamFill, PiLinkedinLogo, PiLinkedinLogoDuotone } from "react-icons/pi";
import { SiGmail } from "react-icons/si";

export default function Screen() {
    const [selection, setSelection] = useState('experience')


    const handleSelection = () => {
        switch (selection) {
            case 'experience':
                console.log("experience")
            
                break
            
            case 'about':
                console.log("about")

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
    const experience1 = useTypewriterEffect("Software Engineer Intern -- NYC Department of City Planning -- 6/23-12/23"  , 10, experienceKey);
    const description1 = useTypewriterEffect("Built and designed civic engagement web app using WebGL "  , 10, experienceKey);
    const link1 = useTypewriterEffect("link"  , 10, experienceKey);
    const experience2 = useTypewriterEffect("Teaching Assistant -- University of British Columbia -- 9/22-12/23"  , 10, experienceKey);
    const description2 = useTypewriterEffect("Ran labs using Unity to simulate various phenomenas related to COGS 300 course content"  , 8, experienceKey);
    const experience3 = useTypewriterEffect("Among, busboy, carpenters apprentice and other pursuits..."  , 10, experienceKey);
    
    const aboutKey = selection === 'about' ? 'about' : null;
    const aboutText = useTypewriterEffect("I'm born and raised in Brooklyn NY, and came to Vancouver Canada to pursue my bachelors degree in Cognitive Systems. I am about to graduate. I like to build things and experiences that I can share with others. I'm interested in 3D graphics, design, and computational modelling. "  , 10, aboutKey);

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
                            return event.key === "ArrowUp" ? 'experience' : 'resume';
                        case 'resume':
                            return event.key === "ArrowUp" ? 'about' : 'contact';
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
        <Html transform position={[0.001,0,0.415]} distanceFactor={0.1}>
            <div className="crt">
                <h1 className="header">Luca Moynier</h1>
                <p onClick={() => setSelection('experience')} className={`text ${selection === 'experience' ? 'highlighted' : ''}`}>
                    Experience
                </p>

                {selection === 'experience' && (
                    <div className='smallText'> 
                        {linebr}
                        <div>
                            {experience1}
                            <ul>
                                <li>
                                    {description1} <a style={{color: '#34e2e2'}} href="https://cif-ud-project.vercel.app/" target="_blank"> {link1} </a>
                                </li>
                            </ul>
                            {experience2}
                            <ul>
                                <li>
                                    {description2}
                                </li>
                            </ul>
                            {experience3}
                        </div>
                        {linebr}
                    </div>
                )}
                <p onClick={() => setSelection('about')} className={`text ${selection === 'about' ? 'highlighted' : ''}`}>
                    About
                </p>
                {selection === 'about' && (
                    <div className="smallText">
                        {aboutText}
                    </div>
                )}
                <p onClick={() => setSelection('resume')} className={`text ${selection === 'resume' ? 'highlighted' : ''}`}>
                    Resume
                </p>
                {selection === 'resume' && (
                    <div className="smallText">
                        <a style={{color: '#34e2e2'}} href="https://drive.google.com/file/d/1_MLa04m_lj-TTvfgJblmAIvcYLU9XfBN/view?usp=sharing" target="_blank">Download .PDF</a> (May be outdated)

                    </div>
                )}
                <p onClick={() => setSelection('contact')} className={`text ${selection === 'contact' ? 'highlighted' : ''}`}>
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
        </Html>
    )
}