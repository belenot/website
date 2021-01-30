import React, { Component, useState } from "react";

function JobExperience() {
    return (
        <div className="job-experience">
            <div className="job-experience-item">
                <div className="job-experience-item-header">
                    <h2>Intertrust</h2>
                </div>
                <div className="job-experience-item-content">
                    <p>
                        Four month internship for Java developer.
                        It was enterprise monolith product. As an intern I didn't do too much for organization,
                        although I got much from this internship.
                    </p>
                    <p>
                        I was introduced to Spring Framework and Hibernate.
                        It gave me a lot of experience for start.
                    </p>
                </div>
            </div>
            <div className="job-experience-item">
                <div className="job-experience-item-header">
                    <h2>Sberbank</h2>
                </div>
                <div className="job-experience-item-content">
                    <p>My current fulltime job.</p>
                    <p>Working on monolith migration project as a DevOps Engineer.</p>
                    <p>
                        Created CI Pipiline with Jenkins. Managing NPM and Gradle builds.
                        Controlling deployment on kubernetes and CDL.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default JobExperience