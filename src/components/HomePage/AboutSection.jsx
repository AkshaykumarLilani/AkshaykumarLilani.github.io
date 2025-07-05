"use client";

import React from 'react';
import SectionTitle from "@/components/common/SectionTitle";

function AboutSection() {
    const whatIDo = [
        {
            title: "Full Stack Development",
            description: "I build beautiful, functional, and scalable web applications using modern technologies like React, Next.js, and Django."
        },
        {
            title: "API Design & Development",
            description: "I design and build robust and scalable RESTful APIs using Python, Django, and Node.js."
        },
        {
            title: "Database Design & Management",
            description: "I design and manage efficient and scalable databases using PostgreSQL and MongoDB."
        },
        {
            title: "DevOps & Automation",
            description: "I use Docker and other tools to automate the deployment and management of web applications."
        }
    ];

    return (
        <section
            className="flex flex-col justify-start items-start w-full p-3 md:py-5"
            id="about"
        >
            <div className="flex flex-col gap-4 w-full">
                <SectionTitle title={`What I Do`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {whatIDo.map((item, index) => (
                        <div key={index} className="p-4 border rounded-lg bg-card">
                            <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
