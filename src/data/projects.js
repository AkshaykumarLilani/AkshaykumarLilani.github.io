import { allTechsSameColor } from "../Utilities/allTechs";
import { project_BigBasketClone, project_InventoryManagement, project_LetsCamp, project_LibraryManager, project_OnlineBiCycleShop, project_TimeAndSalesWindow } from "../assets";
project_BigBasketClone

const allTechs = allTechsSameColor;

export const PROJECT_CATEGORIES = {
    "ALL": "ALL",
    "FRONTEND": "Frontend",
    "FULLSTACK": "Full Stack",
    "PINESCRIPT": "Pine Script"
}

const projects = [
    {
        title: "Library Manager",
        description: "A web interface with secure APIs, protected by JWT authentication and role-based access control, for efficient book management.",
        techStack: [allTechs.mongodb, allTechs.react, allTechs.redux, allTechs.express, allTechs.nodejs, allTechs.antdesign],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/library_manager",
        deployedLink: "https://singular-panda-c399c9.netlify.app/",
        image: project_LibraryManager,
        category: PROJECT_CATEGORIES.FULLSTACK
    },
    {
        title: "Inventory Management",
        description: "React-based Inventory Management Web App with Ant Design, Bootstrap, and Redux for frontend. Backend powered by ExpressJS and MongoDB.",
        techStack: [allTechs.mongodb, allTechs.react, allTechs.redux, allTechs.express, allTechs.nodejs, allTechs.bootstrap, allTechs.antdesign],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/inventory-management",
        deployedLink: "https://akshay-u7-cw.netlify.app",
        image: project_InventoryManagement,
        category: PROJECT_CATEGORIES.FULLSTACK
    },
    {
        title: "LetsCamp",
        description: "A comprehensive full-stack campgrounds booking project leveraging MongoDB for the database, Express for the backend framework, and EJS for dynamic templating on the frontend.",
        techStack: [allTechs.mongodb, allTechs.express, allTechs.ejs, allTechs.aws, allTechs.nodejs, allTechs.bootstrap],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/letscamp",
        deployedLink: "https://letscamp.akshaylilani.com",
        image: project_LetsCamp,
        category: PROJECT_CATEGORIES.FULLSTACK
    },
    {
        title: "OnlineBiCycleShop",
        description: "BiCycle Shopping website built using HTML, CSS, JavaScript on Frontend and JSON Server as Backend.",
        techStack: [allTechs.javascript, allTechs.html, allTechs.css],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/OnlineBicycleShop",
        deployedLink: "https://phenomenal-crisp-d9f0f8.netlify.app",
        image: project_OnlineBiCycleShop,
        category: PROJECT_CATEGORIES.FRONTEND
    },
    {
        title: "Big Basket Clone",
        description: "FrontEnd Clone of a popular grocery shopping website: BigBasket. Built using HTML, CSS & Javascript.",
        techStack: [allTechs.javascript, allTechs.html, allTechs.css],
        githubRepositoryLink: "https://github.com/AkshaykumarLilani/big-basket-clone",
        deployedLink: "https://visionary-smakager-639150.netlify.app/",
        image: project_BigBasketClone,
        category: PROJECT_CATEGORIES.FRONTEND
    },

    {
        title: "Time And Sales Window",
        description: "An open-source PineScript Indicator for TradingView that displays real-time tick data during market hours. Color-coded for quick analysis: red for lower prices, gray for unchanged, and green for higher prices. No historical data storage.",
        techStack: [allTechs.pinescript],
        deployedLink: "https://in.tradingview.com/script/SofuBwAz-Time-and-Sales/",
        image: project_TimeAndSalesWindow,
        category: PROJECT_CATEGORIES.PINESCRIPT
    },
]

export const PROJECT_CATEGORIES_COUNT = JSON.parse(JSON.stringify(PROJECT_CATEGORIES));
Object.keys(PROJECT_CATEGORIES).forEach(c => {
    if (c === PROJECT_CATEGORIES.ALL){
        PROJECT_CATEGORIES_COUNT[PROJECT_CATEGORIES.ALL] = projects.length;
    } else {
        PROJECT_CATEGORIES_COUNT[c] = projects.filter(r => r.category === PROJECT_CATEGORIES[c]).length;
    }
});



export default projects;