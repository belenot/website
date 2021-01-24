import React from 'react'

function TopBar({ handleTopBarButton, isExtended }) {
    return (
        <div className="top-bar">
            <div className="button menu-button" onClick={() => handleTopBarButton('ExtendedMenu')}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`button ${isExtended ? "" : "hidden-button"}`} onClick={() => handleTopBarButton('Description')}><p>Description</p></div>
            <div className={`button ${isExtended ? "" : "hidden-button"}`} onClick={() => handleTopBarButton('Skills')}><p>Skills</p></div>
            <div className={`button ${isExtended ? "" : "hidden-button"}`} onClick={() => handleTopBarButton('JobExperience')}><p>Job Experience</p></div>
            <div className={`button ${isExtended ? "" : "hidden-button"}`} onClick={() => handleTopBarButton('Resume')}><p>Resume</p></div>
        </div>
    )
}

export default TopBar