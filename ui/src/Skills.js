import { makeStyles } from "@material-ui/core";
import React, { Component, useState } from "react";

const useStyles = makeStyles({
    cardItem: {
        padding: "20px"
    }
})

function Skills() {
    const classes = useStyles()
    return (
        <div className="skills" >
            <div className="skill-item">
                <div className="skill-item-header">
                    <img className="avatar" src="/images/backend-icon.png" />
                    <h3>Backend</h3>
                </div>
                <div className="skill-item-list">
                    <ul>
                        <li>Java</li>
                        <li>Kotlin/JVM</li>
                        <li>Ktor</li>
                        <li>Spring Boot</li>
                        <li>NodeJS</li>
                        <li>Express.js</li>
                    </ul>
                </div>
            </div>
            <div className="skill-item">
                <div className="skill-item-header">
                    <img className="avatar" src="/images/bdd-icon.png" />
                    <h3>Testing</h3>
                </div>
                <div className="skill-item-list">
                    <ul>
                        <li>JUnit</li>
                        <li>Cucumber JVM</li>
                        <li>BDD</li>
                    </ul>
                </div>
            </div>
            <div className="skill-item">
                <div className="skill-item-header">
                    <img className="avatar" src="/images/frontend-icon.png" />
                    <h3>Frontend</h3>
                </div>
                <div className="skill-item-list">
                    <ul>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>React</li>
                    </ul>
                </div>
            </div>
            <div className="skill-item">
                <div className="skill-item-header">
                    <img className="avatar" src="/images/database-icon.png" />
                    <h3>Database</h3>
                </div>
                <div className="skill-item-list">
                    <ul>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
            <div className="skill-item">
                <div className="skill-item-header">
                    <img className="avatar" src="/images/devops-icon.png" />
                    <h3>DevOps</h3>
                </div>
                <div className="skill-item-list">
                    <ul>
                        <li>Gradle</li>
                        <li>NPM</li>
                        <li>Jenkins</li>
                        <li>Ansible</li>
                        <li>Terraform</li>
                        <li>AWS EC2</li>
                        <li>Vagrant</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Skills