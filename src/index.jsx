import { Canvas } from '@react-three/fiber'
import './style.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import { ConfigProvider } from 'antd'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    <ConfigProvider theme={{
                hashed:false,
                token: {
                    colorPrimary: 'red',
                    borderRadius: 1,
                    
                }
            }}>
        <Canvas>
            

            
            <Experience/>
    
        </Canvas>
        </ConfigProvider>
    </>
)