import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import { profile } from '../../assets'
import ResumeButton from '../Common/ResumeButton'

function AboutSection() {
    return (
        <section className='max-width-desktop  mx-auto d-flex justify-content-start align-items-center p-3 py-md-5' id='about'>
            <div className='d-flex flex-column-reverse flex-md-row gap-5'>
                <div className='d-flex flex-column gap-4'>
                    <SectionTitle title={`About`} />
                    <div >
                        <p>
                            I am a Full Stack Developer building web applications using Mongodb, ReactJs, Django Rest Framework, ExpressJs and Nodejs at Teson LLP. Additionally, I am also proficient in elasticsearch, EJS, AngularJS, AWS EC2 and AWS S3. My expertise in these technologies allows me to deliver effective and efficient solutions to complex problems.
                        </p>
                        <p>
                            I am a creative problem-solver who is committed to staying up-to-date with emerging technologies and industry trends. With a strong focus on delivering high-quality work, I strive to exceed client expectations and drive business success.
                        </p>
                    </div>
                    <ResumeButton id={`resume-button-2`} />
                </div>
                <div style={{minWidth: 312}}>
                    <img src={profile} alt="" width="100%"/>
                </div>
            </div>
        </section>
    )
}

export default AboutSection