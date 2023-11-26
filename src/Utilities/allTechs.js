import {
    tech_aws,
    tech_bootstrap,
    tech_css,
    tech_django_rest,
    tech_docker,
    tech_express,
    tech_git,
    tech_html,
    tech_javascript,
    tech_mongodb,
    tech_netlify,
    tech_nodejs,
    tech_postgres,
    tech_python,
    tech_react,
    tech_redux,
    tech_s3,
    tech_ubuntu
} from '../assets';

export const allTechs = {
    aws: {
        title: "AWS EC2",
        img: tech_aws,
        borderColor: 'rgba(245, 133, 54, 0.67)  ',
        backgroundColor: 'rgba(255, 204, 186, 0.46)'
    },
    bootstrap: {
        title: 'Bootstrap',
        img: tech_bootstrap,
        borderColor: 'rgba(111, 44, 246, 0.67)',
        backgroundColor: 'rgba(220, 203, 255, 0.46)'
    },
    css: {
        title: 'CSS',
        img: tech_css,
        // borderColor: '#F0DB4F',
        borderColor: '#000',
        backgroundColor: 'rgba(186, 224, 255, 0.46)'
    },
    django_rest: {
        title: 'Django Rest',
        img: tech_django_rest,
        borderColor: '#7F2D2D',
        backgroundColor: 'rgba(255, 218, 218, 0.46)'
    },
    docker: {
        title: 'Docker',
        img: tech_docker,
        borderColor: 'rgba(29, 99, 237, 0.67)',
        backgroundColor: 'rgba(154, 188, 255, 0.46)'
    },
    express: {
        title: 'Express',
        img: tech_express,
        borderColor: '#000',
        backgroundColor: 'rgba(192, 192, 192, 0.46)'
    },
    git: {
        title: 'Git',
        img: tech_git,
        borderColor: 'rgba(239, 71, 59, 0.67)',
        backgroundColor: 'rgba(245, 203, 200, 0.46)'
    },
    html: {
        title: 'HTML',
        img: tech_html,
        // borderColor: '#F0DB4F',
        borderColor: '#000',
        backgroundColor: 'rgba(255, 195, 179, 0.46)'
    },
    javascript: {
        title: 'JavaScript',
        img: tech_javascript,
        // borderColor: '#F0DB4F',
        borderColor: '#000',
        backgroundColor: 'rgba(240, 219, 79, 0.46)'
    },
    mongodb: {
        title: 'MongoDB',
        img: tech_mongodb,
        borderColor: 'rgba(2, 52, 48, 0.67)',
        backgroundColor: 'rgba(173, 255, 248, 0.46)'
    },
    netlify: {
        title: 'Netlify',
        img: tech_netlify,
        borderColor: 'rgba(50, 230, 226, 0.67)',
        backgroundColor: 'rgba(195, 252, 251, 0.46)'
    },
    nodejs: {
        title: 'NodeJs',
        img: tech_nodejs,
        borderColor: '#43853D',
        backgroundColor: 'rgba(157, 229, 150, 0.46)'
    },
    postgres: {
        title: 'Postgres',
        img: tech_postgres,
        borderColor: 'rgba(105, 158, 201, 0.67)',
        backgroundColor: 'rgba(186, 223, 253, 0.46)'
    },
    python: {
        title: 'Python',
        img: tech_python,
        borderColor: '#347AB4',
        backgroundColor: 'rgba(199, 229, 255, 0.46)'
    },
    react: {
        title: 'React',
        img: tech_react,
        borderColor: '#0077D4',
        backgroundColor: 'rgba(144, 205, 244, 0.46)'
    },
    redux: {
        title: 'Redux',
        img: tech_redux,
        borderColor: 'rgba(118, 74, 188, 0.67)',
        backgroundColor: 'rgba(215, 189, 255, 0.46)'
    },
    s3: {
        title: 'AWS S3',
        img: tech_s3,
        borderColor: 'rgba(94, 31, 24, 0.67)',
        backgroundColor: 'rgba(255, 184, 176, 0.46)'
    },
    ubuntu: {
        title: 'Ubuntu',
        img: tech_ubuntu,
        borderColor: 'rgba(233, 84, 32, 0.67)',
        backgroundColor: 'rgba(255, 204, 186, 0.46)'
    },
    ejs: {
        title: 'EJS',
        img: false,
        borderColor: '#A91E50',
        backgroundColor: 'rgba(239, 174, 198, 0.46)'
    }
}

const sameColorBorderColor = 'gray';
const sameColorBgColor = 'rgba(192, 192, 192, 0.46)';
// const sameColorBgColor = 'linear-gradient(90deg, rgba(247,247,250,1) 10%, rgba(238,238,238,1) 62%, rgba(231,232,232,0.7357317927170868) 100%)';

const getMyBg = (title) => {
    return allTechs[title].backgroundColor
}

export const allTechsSameColor = {
    aws: {
        title: "AWS EC2",
        img: tech_aws,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("aws"),
    },
    bootstrap: {
        title: 'Bootstrap',
        img: tech_bootstrap,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("bootstrap"),
    },
    css: {
        title: 'CSS',
        img: tech_css,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("css"),
    },
    django_rest: {
        title: 'DRF',
        img: tech_django_rest,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("django_rest"),
    },
    docker: {
        title: 'Docker',
        img: tech_docker,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("docker"),
    },
    express: {
        title: 'Express',
        img: tech_express,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("express"),
    },
    git: {
        title: 'Git',
        img: tech_git,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("git"),
    },
    html: {
        title: 'HTML',
        img: tech_html,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("html"),
    },
    javascript: {
        title: 'JavaScript',
        img: tech_javascript,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("javascript"),
    },
    mongodb: {
        title: 'MongoDB',
        img: tech_mongodb,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("mongodb"),
    },
    netlify: {
        title: 'Netlify',
        img: tech_netlify,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("netlify"),
    },
    nodejs: {
        title: 'NodeJs',
        img: tech_nodejs,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("nodejs"),
    },
    postgres: {
        title: 'Postgres',
        img: tech_postgres,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("postgres"),
    },
    python: {
        title: 'Python',
        img: tech_python,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("python"),
    },
    react: {
        title: 'React',
        img: tech_react,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("react"),
    },
    redux: {
        title: 'Redux',
        img: tech_redux,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("redux"),
    },
    s3: {
        title: 'Amazon S3',
        img: tech_s3,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("s3"),
    },
    ubuntu: {
        title: 'Ubuntu',
        img: tech_ubuntu,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("ubuntu"),
    },
    ejs: {
        title: 'EJS',
        img: false,
        borderColor: sameColorBorderColor,
        backgroundColor: sameColorBgColor,
        onAnimationBackgroundColor: getMyBg("ejs"),
    }
}