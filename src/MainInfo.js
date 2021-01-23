import { Avatar, Box, Divider } from "@material-ui/core"
import React from "react"
import Contacts from "./Contacts"

function MainInfo({ classes }) {
    return (
        <div>
            <img alt="Kholkhunov Sergey" src="/images/avatar.jpeg" />
            <Contacts />
        </div>
    )
}

export default MainInfo