import React from 'react'
import { github_logo, linkedin_logo } from '../../assets'

function HeroSection() {
    return (
        <section className='max-width-desktop mx-auto d-flex justify-content-start align-items-center min-height-section'>
            <div className='d-flex gap-2'>
                <div style={{ fontSize: 48 }}>👋🏼</div>
                <div className='d-flex flex-column gap-4'>
                    <div>
                        <div style={{ fontSize: 48 }}>Hello, I am <strong className='color-accent'>Akshaykumar Lilani</strong></div>
                        <div style={{ fontSize: 32 }}>Sr. Software Engineer at Teson LLP</div>
                    </div>
                    <div>
                        A Full Stack Developer, proficient in developing modern web applications,
                        <br />
                        I work with MongoDB, Express.js, React, Redux & Django Rest Framework.
                    </div>
                    <div className='d-flex gap-3'>
                        <img width={44} src={linkedin_logo} alt="LinkedIn Logo" />
                        <img width={44} src={github_logo} alt="Github Logo" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection