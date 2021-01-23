import React from 'react'

function TopBar({ changePage }) {

    return (
        <div className="top-bar">
            <div className="button" onClick={() => changePage('Description')}><p>Description</p></div>
            <div className="button" onClick={() => changePage('Skills')}><p>Skills</p></div>
            <div className="button" onClick={() => changePage('JobExperience')}><p>Job Experience</p></div>
            <div className="button" onClick={() => changePage('Resume')}><p>Resume</p></div>
        </div>
    )
}

export default TopBar