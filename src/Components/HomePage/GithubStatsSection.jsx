import SectionTitle from "../Common/SectionTitle";
import css from "./GithubStatsSection.module.css";
import GitHubCalendar from 'react-github-calendar';

const GithubStatsSection = () => {

    const minimalTheme = {
        light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
        // for `dark` the default theme will be used
        dark: ['hsl(0, 0%, 92%)', 'rebeccapurple']
    };

    return (
        <section id='github-stats' className='max-width-desktop min-height-section mx-auto d-flex justify-content-start align-items-start flex-column gap-5 py-4'>
            <SectionTitle title={`My Github Stats`}/>
            <GitHubCalendar
                username="akshaykumarlilani"
                theme={minimalTheme}
                labels={{
                    totalCount: '{{count}} contributions in the last half year',
                }}
                weekStart={1}
                year={'last'}
                colorScheme='light'
            />
            <div className='d-flex flex-column justify-content-center align-items-center flex-md-row gap-3' id={css['all-git-stats']}>
                <a href="https://github.com/AkshaykumarLilani">
                    <img className='w-100' src="https://github-readme-streak-stats.herokuapp.com?user=AkshaykumarLilani" alt="GitHub Streak" id="github-streak-stats" />
                </a>
                <a href="https://github.com/AkshaykumarLilani">
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=akshaykumarlilani" alt="Github Top Languages" id="github-top-langs" />
                </a>
                <a href="https://github.com/AkshaykumarLilani">
                    <img src="https://github-readme-stats.vercel.app/api?username=akshaykumarlilani&show_icons=true" alt="Github Stats" id="github-stats-card" />
                </a>
            </div>
        </section>
    );
}

export default GithubStatsSection;