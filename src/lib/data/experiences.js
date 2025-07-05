"use client";
import { allTechsSameColor } from '@/utilities/allTechs'; // Or your preferred tech object source

export const experiences = [
    {
        company: "Teson LLP",
        role: "Senior Software Engineer",
        startDate: "2024-03-01",
        endDate: "Present",
        responsibilities: [
            "Led the frontend architecture for a platform serving 15,000+ users and processing over 109 Million MUR in sales annually.",
            "Engineered a full-featured gift card and wallet payment system from scratch.",
            "Drove a critical performance initiative by optimizing backend payment APIs, resulting in a 70% drop in order creation time.",
            "Designed and built a comprehensive reporting suite with over 20 distinct reports.",
            "Designed and implemented a central deployment system that reduced deployment times to local theatre servers by 80%.",
        ],
        technologiesUsed: [
            allTechsSameColor.react,
            allTechsSameColor.nextjs,
            allTechsSameColor.django_rest,
            allTechsSameColor.postgres,
            allTechsSameColor.docker,
        ]
    },
    {
        company: "Teson LLP",
        role: "Software Engineer",
        startDate: "2022-09-01",
        endDate: "2024-03-01",
        responsibilities: [
            "Led a comprehensive modernization of the frontend codebase for a university e-learning platform, resulting in a ~25% reduction in the main JS bundle size.",
            "Established higher code quality standards by implementing ESLint and Husky with custom rules.",
            "Resolved critical frontend bugs during live, timed online examinations.",
            "Drove a frontend performance initiative that reduced page load time by 98% for a high-traffic real estate marketplace.",
            "Optimized a Python-based RPA script, reducing the time to fetch 4,000+ daily records from Salesforce APIs from 40+ minutes to under 8 minutes.",
        ],
        technologiesUsed: [
            allTechsSameColor.react,
            allTechsSameColor.django_rest,
            allTechsSameColor.postgres,
            allTechsSameColor.docker,
            allTechsSameColor.nodejs,
            allTechsSameColor.express,
            allTechsSameColor.mongodb,
            allTechsSameColor.elasticsearch,
        ]
    },
    {
        company: "Self-Employed",
        role: "Intraday Equities Trader & PineScript Developer",
        startDate: "2019-08-01",
        endDate: "2022-08-01",
        responsibilities: [
            "Developed custom data visualization tools and indicators for market analysis using JavaScript and PineScript.",
            "Published a popular open-source indicator on TradingView with over 600 community boosts.",
        ],
        technologiesUsed: [
            allTechsSameColor.pinescript,
            allTechsSameColor.javascript,
        ]
    },
    {
        company: "Accenture",
        role: "Application Developer Associate",
        startDate: "2018-10-22",
        endDate: "2019-08-17",
        responsibilities: [
            `Managed the Oracle Utilities Meter Data Management tool for a leading American Utilities client.`,
            `Generated comprehensive Excel reports summarizing weekly performance metrics.`,
            `Utilized SQL and SQL-Server Reporting Services (SSRS) for data wrangling and analysis.`
        ],
        technologiesUsed: [
            allTechsSameColor.postgres,
        ]
    }
];
