import { makeStyles } from "@material-ui/core";
import React, { Component, useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const useClasses = makeStyles({
    root: {
        overflow: 'scroll'
    }
})

function Resume() {
    const [isPreview, setPreview] =  useState(false);

    const classes = useClasses()
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="resume">
            <div className="resume-buttons">
                <div className="resume-download button" onClick={()=>window.location='/assets/resume.pdf'}>
                    <p>Download PDF</p>
                </div>
                <div className="resume-download button" onClick={()=> setPreview(!isPreview)}>
                    <p>{isPreview ? "Hide Preview" : "Preview"}</p>
                </div>
            </div>
            {isPreview && 
            <div className="resume-preview">
                <Document
                    file="assets/resume.pdf"
                    // onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={1} />
                </Document>
                {/* <p>Page {pageNumber} of {numPages}</p> */}
            </div>
            }
        </div>
    )
}

export default Resume