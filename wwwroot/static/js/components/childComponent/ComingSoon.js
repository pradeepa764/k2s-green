import React from "react";
import {
    Link,
    useLocation
} from "react-router-dom";
import {
    Col,
    Row
} from "antd";

const ComingSoon = () => {
    const location = useLocation();

    // Extract the last part of the pathname (e.g., "/solar" → "solar")
    const name = location.pathname.split("/").filter(Boolean).pop() || "default";

    return ( <
        div className = "coming-soon" >
        <
        div className = "k2s-green-container defaultPadding" >
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
            12
        } >
        <
        div className = "header-title center" >
        <
        h1 className = "title-center" >
        <
        span style = {
            {
                color: "#cb0969"
            }
        } > Coming < /span> Soon. <
        /h1> <
        p > We are working on something amazing. < /p> <
        /div> <
        div className = "header-title mt50" >

        <
        Link to = {
            `/contact?name=${name}`
        }
        className = "morebutton" >
        Notify Me < i className = "arrow-right" > < /i> <
        /Link> <
        /div> <
        /Col> <
        Col xs = {
            24
        }
        md = {
            12
        } >
        <
        div className = "soon" >
        <
        img src = "/images/img-coming-soon.jpg"
        alt = "Coming Soon" / >
        <
        /div> <
        /Col> <
        /Row> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default ComingSoon;