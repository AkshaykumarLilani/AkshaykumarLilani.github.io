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
        <section id='github-stats' className='max-width-desktop  mx-auto d-flex justify-content-start align-items-start flex-column gap-5  p-3 py-md-5'>
            <SectionTitle title={`Github Stats`}/>
            <GitHubCalendar
                username="akshaykumarlilani"
                theme={minimalTheme}
                labels={{
                    totalCount: '{{count}} contributions in the last half year',
                }}
                style={{
                    width: "100%"
                }}
                weekStart={1}
                year={'last'}
                colorScheme='light'
            />
            <div className='d-flex flex-column justify-content-start justify-content-md-center  align-items-start align-items-md-center  flex-md-row gap-3' id={css['all-git-stats']}>
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