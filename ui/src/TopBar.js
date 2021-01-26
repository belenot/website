import React from 'react'

function TopBar({ handleTopBarButton, isExtended, page }) {
    return (
        <div className="top-bar">
            <div className="button menu-button" onClick={() => handleTopBarButton('ExtendedMenu')}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`button ${isExtended ? "" : "hidden-button"} ${page == "Description" ? "active-button" : ""}`} onClick={() => handleTopBarButton('Description')}><p>Description</p></div>
            <div className={`button ${isExtended ? "" : "hidden-button"} ${page == "Skills" ? "active-button" : ""}`} onClick={() => handleTopBarButton('Skills')}><p>Skills</p></div>
            <div className={`button ${isExtended ? "" : "hidden-button"} ${page == "JobExperience" ? "active-button" : ""}`} onClick={() => handleTopBarButton('JobExperience')}><p>Job Experience</p></div>
            <div className={`button ${isExtended ? "" : "hidden-button"} ${page == "Resume" ? "active-button" : ""}`} onClick={() => handleTopBarButton('Resume')}><p>Resume</p></div>
        </div>
    )
}

export default TopBar