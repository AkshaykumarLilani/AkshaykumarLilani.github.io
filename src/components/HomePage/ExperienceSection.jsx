"use client";

import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import ResumeButton from '@/components/common/ResumeButton';
import ExperienceCard from './ExperienceCard';
import { experiences } from '@/lib/data/experiences';

function ExperienceSection() {
    if (!experiences || experiences.length === 0) {
        return (
            <section id="experience" className="w-full my-10 md:my-16">
                <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-10 md:mb-12">
                    <SectionTitle title={`Career Journey`} />
                    <ResumeButton id={`resume-button-experience-section`} />
                </div>
                <p className="text-muted-foreground">My career journey will be updated here soon!</p>
            </section>
        );
    }

    return (
        <section
            className="flex flex-col justify-start items-start w-full p-3 md:py-5"
            id="experience"
        >
            <div className="flex flex-row justify-between items-center w-full mb-3">
                <SectionTitle title={`Career Journey`} />
                {/* <ResumeButton id={`resume-button-1`} /> */}
            </div>

            <div className="relative w-full">
                {/* Desktop Timeline Line: Centered */}
                <div className="hidden md:block absolute inset-y-0 left-1/2 w-[2px] bg-border transform -translate-x-1/2"></div>

                {/* Mobile Timeline Line: To the left */}
                <div className="md:hidden absolute inset-y-0 left-[7px] w-[2px] bg-border transform -translate-x-1/2"></div>

                <div className="space-y-12 md:space-y-0"> {/* Container for all experience items */}
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.company + exp.role + index}
                            className="relative md:py-8" /* py-8 for desktop vertical spacing around the dot */
                        >
                            {/* --- Mobile Dot --- */}
                            <div className="md:hidden absolute left-[7px] top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10"></div>

                            {/* --- Desktop Dot --- */}
                            <div className="hidden md:block absolute top-1/2 left-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-md"></div>

                            {/* Card Container: This div will be positioned */}
                            <div
                                className={`
                                    ml-8 md:ml-0  /* Indent for mobile, reset for desktop */
                                    md:w-[calc(50%-2.5rem)] /* Card width on desktop (50% minus half dot width and gap) */
                                    ${index % 2 === 0
                                        ? 'md:mr-auto md:pr-5' /* Left side: push to right of its half, add padding */
                                        : 'md:ml-auto md:pl-5'  /* Right side: push to left of its half, add padding */
                                    }
                                `}
                            >
                                <ExperienceCard {...exp} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;