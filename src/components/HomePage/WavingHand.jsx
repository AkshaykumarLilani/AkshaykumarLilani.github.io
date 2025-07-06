"use client";

import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react';
import hand_wave_animation_data from '../../assets/lottie/hand_wave.json';

const WavingHand = ({ height = 80, width = 160 }) => {
    const [wave, setWave] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setWave(false);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Lottie
            animationData={hand_wave_animation_data}
            loop={true}
            style={{
                height: height,
                width: width,
                transform: 'rotate(-40deg)',
            }}
        />
    )
}

export default WavingHand