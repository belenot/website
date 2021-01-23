import React, { Component, useState } from "react";
import "./App.css";
import Content from "./Content";
import TopBar from "./TopBar";

function App() {

    const [state, setState] = useState({ page: 'Description', isExtended: false })

    function setPage(page) {
        setState({ ...state, page: page, isExtended: false })
    }
    function setExtended(extended) {
        setState({ ...state, isExtended: extended })
    }
    function handleTopBarButton(button) {
        if (button != 'ExtendedMenu') {
            setPage(button)
        } else {
            setExtended(!state.isExtended)
        }
    }

    const page = state.page
    const isExtended = state.isExtended

    return (
        <div>
            <TopBar handleTopBarButton={handleTopBarButton} isExtended={isExtended} />
            <Content page={page} />
        </div>

    );
}


export default App;