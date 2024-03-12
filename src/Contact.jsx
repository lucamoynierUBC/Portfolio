import { Html } from "@react-three/drei";
import NavBar from "./NavBar";
import { Flex } from "antd";

export default function Contact() {
    return (
        <Html zIndexRange={[100,0]} position={[-0.05,.039,0.415]} distanceFactor={0.8}>
            <div className="crt">
                <div className="content">
                    <NavBar></NavBar>
                    <Flex gap={60} align="flex-start" justify="center"> 
                        <div className="contact-card">
                            <div className="contact-title">Contact</div>
                            <div className="contact-method"> Email: <a className="contact-link" href="mailto:lucamoynier2@gmail.com" target="_blank">lucamoynier2@gmail.com</a></div>
                            <div className="contact-method"> LinkedIn: <a className="contact-link" href="https://www.linkedin.com/in/lmoynier/" target="_blank">linkedin.com/in/lmoynier/</a></div>
                        </div>
                        <div className="contact-card">
                            <div className="contact-title">Portfolio</div>
                            <div className="contact-method"> Github: <a className="contact-link"  href="https://github.com/lucamoynierUBC" target="_blank">github.com/lucamoynierUBC</a></div>
                        </div>
                    </Flex>

                    


                </div>
            </div>
        </Html>
    )

}