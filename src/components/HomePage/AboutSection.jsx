"use client";

import React, { useMemo } from 'react';
import Image from 'next/image';
import { profile } from '@/assets';
import SectionTitle from "@/components/common/SectionTitle";
import { calculateSumOfExperiences } from '@/lib/dateUtils';
import { experiences } from '@/lib/data/experiences';
// import ResumeButton from '@/components/common/ResumeButton';

function AboutSection() {
    const summedExperience = useMemo(() => calculateSumOfExperiences([experiences[0]]), []);
    return (
        <section
            className=" flex justify-start items-center p-3 md:py-5"
            id="about"
        >
            <div className="flex flex-col-reverse md:flex-row gap-5">
                <div className="flex flex-col gap-4">
                    <SectionTitle title={`About`} />
                    <div>
                        <p className='mb-3'>
                            {`With ${summedExperience.totalYears} year${summedExperience.totalYears > 1 ? 's' : ''} and ${summedExperience.totalMonths} month${summedExperience.totalMonths > 1 ? 's' : ''} of experience as a Full Stack Developer at Teson LLP, I specialize in designing, developing, and deploying robust web applications. My core expertise lies in leveraging Python with Django/REST Framework for powerful back-end systems, and Next.js/React.js for dynamic, modern front-end experiences.`}
                        </p>
                        <p className='mb-3'>
                            {`I have a proven track record of utilizing PostgreSQL for efficient database management and Docker for containerization, ensuring scalable and maintainable architectures. My commitment to clean code and best practices allows me to tackle complex challenges and deliver efficient, high-performing applications.`}
                        </p>
                        <p>
                            {`My broader skillset includes MongoDB, Express.js, Node.js, Elasticsearch, AWS EC2/S3, EJS, AngularJS, allowing me to adapt to diverse project requirements and deliver comprehensive solutions.`}
                        </p>
                        {/* <p>
                            {`As a proactive and creative problem-solver, I'm dedicated to continuously learning and applying the latest industry best practices to develop high-quality, impactful solutions. I focus on understanding business objectives to build applications that are not only technically robust but also drive user satisfaction and achieve project goals.`}
                        </p> */}
                    </div>
                    {/* <ResumeButton id={`resume-button-2`} /> */}
                </div>
                <div className="max-w-[312px] w-4/5">
                    <Image src={profile} alt="" width="100%" />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
