"use client";

import React from 'react';
import { underline } from '@/assets';
import Image from 'next/image';

function SectionTitle({ title }) {
    return (
        <div className="pt-3" style={{ width: 'fit-content', marginTop: -18 }}>
            <h3 className="mb-0 text-left text-2xl">{title}</h3>
            <svg width="105" height="12" viewBox="0 0 105 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 10C81.3 -1.59998 102.833 1.50002 103.5 4.50002" stroke={`hsl(var(--foreground))`} strokeWidth="3" />
            </svg>
        </div>
    );
}

export default SectionTitle;
