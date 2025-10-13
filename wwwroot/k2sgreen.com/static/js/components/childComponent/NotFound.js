import React from "react";
import {
    Link
} from "react-router-dom"
import {
    Col,
    Row
} from "antd";


const NotFound = () => {
    return ( <
        >
        <
        div className = "bgnotFound" >
        <
        div className = "k2s-green-container defaultPadding_top0" >
        <
        div className = "not-found" >
        <
        div className = "not-found-content" >
        <
        Row gutter = {
            [16, 16]
        } >
        <
        Col xs = {
            24
        }
        md = {
            24
        } >
        <
        div className = "notfound" > < /div> <
        div className = "header-title center" >
        <
        h1 className = "title-center" > < span style = {
            {
                color: "#cb0969"
            }
        } > 404 < /span> - Oops! Page Not Found</h
        1 >
        <
        p > We couldn 't find the page you requested. Please check the URL or use the navigation below.</p> <
        /div> <
        div className = "header-title center mt50" >
        <
        Link to = "/"
        className = "morebutton" > Go Back Home < i class = "arrow-right" > < /i></Link >
        <
        /div> <
        /Col>


        <
        /Row>





        <
        /div> <
        /div> <
        /div> <
        /div> <
        />
    );
};

export default NotFound;