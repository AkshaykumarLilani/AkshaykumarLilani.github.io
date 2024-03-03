import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import { profile } from '../../assets'
import ResumeButton from '../Common/ResumeButton'

function ExperienceSection() {
    return (
        <section className='max-width-desktop  mx-auto d-flex justify-content-start align-items-center p-3 py-md-5' id='about'>
            <div className='d-flex flex-column-reverse flex-md-row gap-5'>
                <div className='d-flex flex-column gap-4'>
                    <SectionTitle title={`Professional Experience`} />
                    
                    <ResumeButton id={`resume-button-2`} />
                </div>
                <div style={{width: 312}}>
                    <img src={profile} alt="" width="100%"/>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection