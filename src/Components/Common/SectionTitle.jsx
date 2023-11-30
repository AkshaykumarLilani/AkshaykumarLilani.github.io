import React from 'react'
import { underline } from '../../assets'

function SectionTitle({ title }) {
    return (
        <div className='pt-3' style={{width: "fit-content", marginTop: -18}}>
            <h3 className='mb-0 text-left'>{title}</h3>
            <img src={underline} alt="" />
        </div>
    )
}

export default SectionTitle