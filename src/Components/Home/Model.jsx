import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Room from '../../../Room/Scene';
import { OrbitControls } from '@react-three/drei';

function Model() {
    const OrbitRef = useRef();
    return (
        <Canvas>
            <OrbitControls ref={OrbitRef} enableZoom={false} />
            <ambientLight intensity={1.0} />
            <Suspense fallback={null}>
                <Room/>
            </Suspense>
        </Canvas>
    )
}

export default Model;