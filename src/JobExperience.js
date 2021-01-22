import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import React, { Component, useState } from "react";

function JobExperience() {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Intertrust" />
                        <CardContent>
                            <p>
                                Four month internship for Java developer.
                                It was enterprise monolith product. As an intern I didn't do too much for organization,
                                although I got much from this internship.
                            </p>
                            <p>
                                I was introduced to Spring Framework and Hibernate.
                                It gave me a lot of experience for start.
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Sberbank" />
                        <CardContent>
                            <p>My current fulltime job.</p>
                            <p>Working on monolith migration project as a DevOps Engineer.</p>
                            <p>
                                Created CI Pipiline with Jenkins. Managing NPM and Gradle builds.
                                Controlling deployment on kubernetes and CDL.
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default JobExperience