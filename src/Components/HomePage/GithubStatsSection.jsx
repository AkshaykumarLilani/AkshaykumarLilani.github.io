import { useCurrentWidth } from "react-socks";
import SectionTitle from "../Common/SectionTitle";
import css from "./GithubStatsSection.module.css";
import GitHubCalendar from 'react-github-calendar';
import { useEffect, useState } from "react";

const GithubStatsSection = () => {
    const [months, setMonths] = useState(6);
    const currentWidth = useCurrentWidth();
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = months;

        return contributions.filter(activity => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };

    useEffect(()=>{
        if(currentWidth < 550) {
            setMonths(6);
        }else if (currentWidth < 768) {
            setMonths(6);
        }else if (currentWidth < 845) {
            setMonths(8);
        }else if (currentWidth < 924) {
            setMonths(9);
        } else if (currentWidth < 1000) {
            setMonths(10);
        } else {
            setMonths(11);
        }
    }, [currentWidth]);

    const minimalTheme = {
        light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
        // for `dark` the default theme will be used
        dark: ['hsl(0, 0%, 92%)', 'rebeccapurple']
    };

    return (
        <section id='github-stats' className='max-width-desktop  mx-auto d-flex justify-content-start align-items-start flex-column gap-5  p-3 py-md-5'>
            <SectionTitle title={`Github Stats`} />
            <GitHubCalendar
                username="akshaykumarlilani"
                theme={{
                    light: ['hsl(0, 0%, 92%)', '#0077D4'],
                    dark: ['hsl(0, 0%, 92%)', '#0077D4']
                }}
                transformData={selectLastHalfYear}
                labels={{
                    totalCount: `{{count}} contributions in the last ${months} months.`,
                }}
                blockMargin={5}
                blockRadius={5}
                blockSize={currentWidth > 590 ? 15 : currentWidth < 450 ? 9 : currentWidth < 530 ? 10 : 13}

                weekStart={1}
                year={2023}
                colorScheme='light'
            />
            <div className='d-flex flex-column justify-content-start justify-content-md-center  align-items-start align-items-md-center  flex-md-row gap-3' id={css['all-git-stats']}>
                {/* <a href="https://github.com/AkshaykumarLilani" style={styles}>
                    <img className="w-100" src="https://github-readme-streak-stats.herokuapp.com?user=akshaykumarlilani&theme=transparent&hide_border=true&border_radius=12&mode=weekly" alt="GitHub Streak" id="github-streak-stats" />
                </a>
                <a href="https://github.com/AkshaykumarLilani" style={styles}>
                    <img className="w-100" src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=akshaykumarlilani&theme=transparent" alt="" id="github-stats-card" />
                </a> */}
                <a href="https://github.com/AkshaykumarLilani" style={styles}>
                    <img className="w-100" src="https://github-readme-stats.vercel.app/api?username=akshaykumarlilani&theme=graywhite&show_icons=true&hide_border=true&count_private=true" />
                </a>
                <a href="https://github.com/AkshaykumarLilani" style={styles}>
                    <img className="w-100" src="https://github-readme-streak-stats.herokuapp.com/?user=akshaykumarlilani&theme=graywhite&hide_border=true" alt="" />
                </a>
                {/* <a href="https://github.com/AkshaykumarLilani" style={styles}>
                    <img className="w-100" src="https://github-readme-stats.vercel.app/api/top-langs/?username=akshaykumarlilani&theme=graywhite&show_icons=true&hide_border=true&layout=compact" alt="" />
                </a> */}
                {/* <a href="https://github.com/AkshaykumarLilani">
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=akshaykumarlilani" alt="Github Top Languages" id="github-top-langs" />
                </a> */}
                {/* <a href="https://github.com/AkshaykumarLilani">
                    <img src="https://github-readme-stats.vercel.app/api?username=akshaykumarlilani&show_icons=true" alt="Github Stats" id="github-stats-card" />
                </a> */}
            </div>
        </section>
    );
}

const styles = {
    background: "white",
    boxShadow: "1px 2px 9px #cecece",
    borderRadius: "12px",
    width: "100%"

}

export default GithubStatsSection;