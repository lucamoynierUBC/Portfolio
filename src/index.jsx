import { Canvas } from '@react-three/fiber'
import './style.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import { ConfigProvider } from 'antd'
import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'

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
            <Suspense fallback={null}>
                

                
                <Experience/>
                <Analytics />
        </Suspense>
        </Canvas>
        <Loader/>
        </ConfigProvider>
    </>
)