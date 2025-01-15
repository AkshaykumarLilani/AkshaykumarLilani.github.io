"use client";

import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import { profile } from '@/assets';
import ResumeButton from '@/components/common/ResumeButton';
import Image from 'next/image';

function ExperienceSection() {
    return (
        <section
            className=" flex justify-start items-center p-3 md:py-5"
            id="about"
        >
            <div className="flex flex-col-reverse md:flex-row gap-5">
                <div className="flex flex-col gap-4">
                    <SectionTitle title={`Professional Experience`} />
                    <ResumeButton id={`resume-button-2`} />
                </div>
                <div className="w-[312px]">
                    <Image src={profile} alt="" width="100%" />
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;
