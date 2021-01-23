import { Divider, Grid, Link, List, ListItem, ListItemIcon } from "@material-ui/core"
import { Email, Phone } from "@material-ui/icons"
import React, { Component, useState } from "react";

function Contacts() {
    return (
        <div className='contacts'>
            <ul>
                <li>
                    <a href="https://github.com/belenot">Belenot Github Profile</a>
                </li>
                <li>
                    <a href="https://vk.com/id147448693">Холхунов Сергей</a>
                </li>
                <li>
                    <a>8-(966)-041-18-27</a>
                </li>
                <li>
                    <a>kholhunov0@gmail.com</a>
                </li>
            </ul>
        </div>
    )
}

export default Contacts