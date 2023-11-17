import React from 'react'

function TechnologyBox({ img, title, borderColor, backgroundColor }) {
    if (!img) {
        if (title === "EJS") {
            return <div
                className='d-flex gap-2 p-1 px-2'
                style={{ borderRadius: 10, border: `2px solid ${borderColor}`, backgroundColor: `${backgroundColor}` }}
            >
                <div style={{ color: borderColor }}><strong>{"<%= "}{title}{" %>"}</strong></div>
            </div>;
        }
    }

    return (
        <div
            className='d-flex gap-2 p-1 px-2'
            style={{ borderRadius: 10, border: `2px solid ${borderColor}`, backgroundColor: `${backgroundColor}` }}
        >
            <img src={img} alt={title} />
            <div style={{ color: borderColor }}><strong>{title}</strong></div>
        </div>
    )
}

export default TechnologyBox