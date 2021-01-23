import { Avatar, Box, Divider } from "@material-ui/core"
import React from "react"
import Contacts from "./Contacts"

function MainInfo({ classes }) {
    return (
        <Box>
            <Avatar alt="Kholkhunov Sergey" src="/images/avatar.jpeg" className={classes.large} />
            <Contacts />
        </Box>
    )
}

export default MainInfo