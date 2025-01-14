import React from 'react';
import { loading_animation } from '@/assets';
import Image from 'next/image';

const LoadingHome = () => {
    return (
        <main className="flex justify-center items-center min-h-screen bg-white">
            <div className="flex flex-col items-center">
                <Image src={loading_animation} alt="Loading" />
            </div>
        </main>
    );
};

export default LoadingHome;