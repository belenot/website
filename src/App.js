import { AppBar, Toolbar, IconButton, Avatar, Button, Container, makeStyles, Typography, Tabs, Tab, Box, Link, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Grid } from "@material-ui/core";
import { Email, Phone } from "@material-ui/icons";
import React, { Component, useState } from "react";
import "./App.css";
import Contacts from "./Contacts";
import Resume from "./Resume";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        flexGrow: 1
    },
    body: {
        margin: "20px"
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(40),
        height: theme.spacing(40),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {

    const classes = useStyles();
    const [state, setState] = useState({ value: 0 })

    function handleChange(event, value) {
        setState({ value: value })
    }
    const value = state.value
    return (
        <Container maxWidth="lg">
            <AppBar position="static">
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Kholkhunov Sergey" />
                        <Tab label="Skills" />
                        <Tab label="Job Expirience" />
                        <Tab label="Resume" />
                        <Tab label="Contacts" />
                    </Tabs>
                </AppBar>
            </AppBar>
            <Grid container className={classes.body} justify='space-around'>
                <Grid item xs={3} >
                    < Box >
                        <Avatar alt="Kholkhunov Sergey" src="/images/avatar.jpeg" className={classes.large} />
                    </Box>
                </Grid>
                <Grid item xs={6} justify='center'>
                    {
                        state.value == 0 &&
                        <Grid>
                            <Typography>
                                <p>
                                    Full stack develop.
                                    Prefer Kotlin for backend and React for frontend.
                                    Among databases the most used by me is PostgreSQL and MongoDB.
                                </p>
                                <p>
                                    I am from Russia. Currently live in Moscow, while get education. 
                                    Also for this moment I am working in Sberbank as an Devops engineer.
                                </p>
                                <p>
                                    Prefer spend free time by building something while learning something new. 
                                    For example, I have the repository on my github account with infrastructure.
                                    I learned ansible, aws, terraform, kubernetes. And now my infrastructure fulfill my needs.
                                    
                                    Currently I am building my own website. 
                                </p>
                            </Typography>
                        </Grid>
                    }
                    {state.value == 3 && 
                        <Resume />
                    }
                    {
                        state.value == 4 &&
                        <Contacts />
                    }
                </Grid>
            </Grid>
        </Container >
    );
}


export default App;