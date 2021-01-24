import { Avatar, Box, Divider } from "@material-ui/core"
import React from "react"
import Contacts from "./Contacts"

function MainInfo() {
    return (
        <div className="main-info">
            <img alt="Kholkhunov Sergey" src="/images/avatar.jpeg" className="avatar" />
            <Contacts />
        </div>
    )
}

export default MainInfo