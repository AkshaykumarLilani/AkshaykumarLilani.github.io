"use client";

import React from 'react';
import { vercel_logo } from '@/assets'; // Assuming this is correctly imported
import Image from 'next/image';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col justify-center items-center p-5 w-full mt-5 mb-[90px] md:mb-0 text-sm">
            <p className="mb-0 text-center flex items-center gap-1 text-muted-foreground">
                Deployed on
                <a
                    href="https://vercel.com?utm_source=akshaylilani-portfolio&utm_medium=footer&utm_campaign=portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:text-primary transition-colors"
                >
                    <Image
                        src={vercel_logo}
                        alt="Vercel logo"
                        className='w-[17px] h-[17px] rounded-sm me-1' // Or use style prop if preferred
                        width={17}  // Consistent sizing
                        height={17}
                    />
                    Vercel
                </a>
            </p>
            <p className="text-xs text-muted-foreground mt-2">
                © {currentYear} Akshaykumar Lilani. All Rights Reserved.
            </p>

            <p className="text-xs text-muted-foreground mt-1">
                <a href="https://github.com/AkshaykumarLilani/AkshaykumarLilani.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    View Source Code
                </a>
            </p>
        </footer>
    );
}

export default Footer;