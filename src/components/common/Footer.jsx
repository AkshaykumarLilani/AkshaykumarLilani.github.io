"use client";

import React from 'react';
import { vercel_logo } from '@/assets';
import Image from 'next/image';

function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center p-5 w-full mt-5 mb-[90px] md:mb-0">
            {/* <p className="mb-0 text-center">Developed by Akshaykumar Lilani</p> */}
            <p className="mb-0 text-center flex items-center gap-1 text-muted-foreground">Deployed on <span className='flex items-center'><Image src={vercel_logo} className='w-[19px] h-[19px] rounded-xl' width={18} height={18}/>Vercel</span></p>
        </footer>
    );
}

export default Footer;
