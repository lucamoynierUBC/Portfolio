import { Environment, Lightformer, Line, MeshTransmissionMaterial, OrbitControls, PerspectiveCamera, Select, SpotLight, Stage } from "@react-three/drei";
import CRTv from "./CRTv";
import { Bloom, EffectComposer, Selection } from "@react-three/postprocessing";

export default function Experience() {
    return <>
    
      
     <CRTv></CRTv>
            
            

       
     <color args={["black"]} attach="background"/>
     <Environment preset="city">
          <Lightformer scale={2} color={"#0c8cbf"} form={'circle'} rotation-x={Math.PI / 2} target={[0,0,0]} intensity={0.8} position={[0,0,1]}>

          </Lightformer>
       </Environment>
       <SpotLight angle={0.5} attenuation={10} anglePower={1} color={"#0c8cbf"} position={[2,0,7]}></SpotLight>
       <SpotLight angle={0.5} anglePower={1} attenuation={10} color={"#0c8cbf"} position={[2, 0, 7]}></SpotLight>
       <SpotLight angle={0.5} attenuation={10} anglePower={1} color={"#0c8cbf"} position={[0,3,7]}></SpotLight>
       <SpotLight angle={0.5} anglePower={1} attenuation={10} color={"#0c8cbf"} position={[0, -1, 7]}></SpotLight>
       <SpotLight angle={0.5} anglePower={1} attenuation={10} color={"#0c8cbf"} position={[.5, -1, 7]}></SpotLight>
       <SpotLight angle={0.5} anglePower={1} attenuation={10} color={"#0c8cbf"} position={[-.5, -1, 7]}></SpotLight>
       <SpotLight angle={0.5} anglePower={1} attenuation={10} color={"#0c8cbf"} position={[-1.87, .95, 7]}></SpotLight>
       <SpotLight angle={0.5} anglePower={1} attenuation={10} color={"#0c8cbf"} position={[1.95, .95, 7]}></SpotLight>
       {/* <OrbitControls></OrbitControls> */}
       
  

       
    </>
}