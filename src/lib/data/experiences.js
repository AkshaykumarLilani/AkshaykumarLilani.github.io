"use client";
import { allTechsSameColor } from '@/utilities/allTechs'; // Or your preferred tech object source

export const experiences = [
    {
        company: "Teson LLP",
        role: "Sr. Software Engineer",
        dates: "September 2022 – Present (2 years 9 months)", // Or your specific start date - Present
        startDate: "2022-09-01",
        endDate: "Present",
        responsibilities: [
            "Reduced page load time of a real estate marketplace by 98% (60s to 2s), enhancing performance and user satisfaction.",
            "Spearheading UI modernization and performance optimization for a large-scale educational platform",
            "Migrating React.js class components to functional components and upgrading React Router (v4 to v6)",
            "Mentored junior developers on best practices in Python and JavaScript development.",
            "Contributed to the development of an internal application to streamline daily Salesforce data access for 500+ users. Built a pipeline to retrieve and display Salesforce data in a user-friendly interface with tabular formats and interactive reports."
        ],
        technologiesUsed: [
            allTechsSameColor.django_rest,
            allTechsSameColor.postgres,
            allTechsSameColor.docker,
            allTechsSameColor.nextjs,
            allTechsSameColor.react,
            allTechsSameColor.python,
            allTechsSameColor.git,
            allTechsSameColor.aws,
            allTechsSameColor.tailwind,
        ]
    },
    {
        company: "Accenture",
        role: "Application Developer Associate",
        // dates: "October 2018 – August 2019 (10 months)",
        startDate: "2018-10-22",
        endDate: "2019-08-17",
        responsibilities: [
            `Managed the Oracle Utilities Meter Data Management tool for a leading American Utilities client, overseeing the
processing of millions of readings from thousands of Digital Meters into the database.`,
            `Generated comprehensive Excel reports summarizing weekly performance metrics.`,
            `Utilized SQL and SQL-Server Reporting Services (SSRS) for data wrangling and analysis, extracting valuable
insights on performance and customer trends.`
        ],
        technologiesUsed: [
            allTechsSameColor.postgres,
        ]
    }
];