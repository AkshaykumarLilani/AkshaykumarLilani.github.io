"use client";

import React from 'react';
import Image from 'next/image';
import { profile } from '@/assets';
import SectionTitle from "@/components/common/SectionTitle";
import ResumeButton from '@/components/common/ResumeButton';

function AboutSection() {
    return (
        <section
            className=" flex justify-start items-center p-3 md:py-5"
            id="about"
        >
            <div className="flex flex-col-reverse md:flex-row gap-5">
                <div className="flex flex-col gap-4">
                    <SectionTitle title={`About`} />
                    <div>
                        <p>
                            I am a Full Stack Developer building web
                            applications using Mongodb, ReactJs, Django Rest
                            Framework, ExpressJs and Nodejs at Teson LLP.
                            Additionally, I am also proficient in elasticsearch,
                            EJS, AngularJS, AWS EC2 and AWS S3. My expertise in
                            these technologies allows me to deliver effective
                            and efficient solutions to complex problems.
                        </p>
                        <p>
                            I am a creative problem-solver who is committed to
                            staying up-to-date with emerging technologies and
                            industry trends. With a strong focus on delivering
                            high-quality work, I strive to exceed client
                            expectations and drive business success.
                        </p>
                    </div>
                    <ResumeButton id={`resume-button-2`} />
                </div>
                <div className="max-w-[312px] w-4/5">
                    <Image src={profile} alt="" width="100%" />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
