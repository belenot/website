import { Divider, Grid, Link, List, ListItem, ListItemIcon } from "@material-ui/core"
import { Email, Phone } from "@material-ui/icons"
import React, { Component, useState } from "react";

function Contacts() {
    return (
        <Grid container justify='center'>
            <Grid item>
                <List>
                    <ListItem>
                        <Link href="https://github.com/belenot">Belenot Github Profile</Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link href="https://vk.com/id147448693">Холхунов Сергей</Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <Phone />
                        </ListItemIcon>
                            8-(966)-041-18-27
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <Email />
                            kholhunov0@gmail.com
                        </ListItemIcon>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <Email />
                            kholkhunovs@gmail.com
                        </ListItemIcon>
                    </ListItem>
                    <Divider />
                </List>
            </Grid>
        </Grid>
    )
}

export default Contacts