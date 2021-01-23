import React, { Component, useState } from "react";
import "./App.css";
import Content from "./Content";
import TopBar from "./TopBar";

function App() {

    const [page, setPage] = useState('Description')

    return (
        <div>
            <TopBar changePage={setPage} />
            <Content page={page} />
        </div>

    );
}


export default App;