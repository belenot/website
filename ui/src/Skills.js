import { Avatar, Card, CardHeader, Grid, makeStyles } from "@material-ui/core";
import React, { Component, useState } from "react";

const useStyles = makeStyles({
    cardItem: {
        padding: "20px"
    }
})

function Skills() {
    const classes = useStyles()
    return (
        <Grid container justify='space-around'>
            <Grid item xs={6} className={classes.cardItem}>
                <Card>
                    <CardHeader title="Backend" avatar={<Avatar src="/images/kotlin-logo.png" />} />
                    <ul>
                        <li>Java</li>
                        <li>Kotlin/JVM</li>
                        <li>Ktor</li>
                        <li>Spring Boot</li>
                        <li>NodeJS</li>
                        <li>Express.js</li>
                    </ul>
                </Card>
            </Grid>
            <Grid item xs={6} className={classes.cardItem}>
                <Card>
                    <CardHeader title="Testing" avatar={<Avatar src="/images/cucumber-logo.svg" />} />
                    <ul>
                        <li>JUnit</li>
                        <li>Cucumber JVM</li>
                        <li>BDD</li>
                    </ul>
                </Card>
            </Grid>
            <Grid item xs={6} className={classes.cardItem}>
                <Card>
                    <CardHeader title="Frontend" avatar={<Avatar src="/images/js-logo.png" />} />
                    <ul>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>React</li>
                    </ul>
                </Card>
            </Grid>
            <Grid item xs={6} className={classes.cardItem}>
                <Card>
                    <CardHeader title="Database" avatar={<Avatar src="/images/postgresql-logo.png" />} />
                    <ul>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                    </ul>
                </Card>
            </Grid>
            <Grid item xs={6} className={classes.cardItem}>
                <Card>
                    <CardHeader title="DevOps" avatar={<Avatar src="/images/ansible-logo.png" />} />
                    <ul>
                        <li>Gradle</li>
                        <li>NPM</li>
                        <li>Jenkins</li>
                        <li>Ansible</li>
                        <li>Terraform</li>
                        <li>AWS EC2</li>
                        <li>Vagrant</li>
                    </ul>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Skills