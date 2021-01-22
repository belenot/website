import { makeStyles } from "@material-ui/core";
import React, { Component, useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const useClasses = makeStyles({
    root: {
        overflow: 'scroll'
    }
})

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const classes = useClasses()
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className={classes.root}>
            <Document
                file="assets/resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={1} />
            </Document>
            {/* <p>Page {pageNumber} of {numPages}</p> */}
        </div>
    )
}

export default Resume