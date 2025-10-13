import React from "react";
import {
    Col,
    Row
} from "antd";

const bannerPoints = [{
        key: "01",
        text: "Empower businesses & individuals with cutting-edge renewable energy solutions."
    },
    {
        key: "02",
        text: "Provide transparency through real-time monitoring, AI-powered analytics, and intelligent energy management."
    },
    {
        key: "03",
        text: "Create financial opportunities by monetizing excess clean energy & carbon credits."
    },
    {
        key: "04",
        text: "Accelerate the transition to a net-zero world, aligning with global climate goals & ESG frameworks."
    }
];

const Misson = () => {
    return ( <
        div className = "clean-energy" >
        <
        div className = "k2s-green-container defaultPadding" > { /* Mission Image & Text */ } <
        Row gutter = {
            16
        }
        className = "pdt50"
        align = "middle" >
        <
        Col className = "gutter-row coltype clean-energy-left"
        xs = {
            24
        }
        md = {
            12
        } >
        <
        div className = "imageWrapper" >
        <
        img src = "images/mission.jpg"
        alt = "Our Mission" / >
        <
        /div> <
        /Col> <
        Col className = "gutter-row coltype clean-energy-right"
        xs = {
            24
        }
        md = {
            12
        } >
        <
        div className = "header-title white" >
        <
        h2 > Our Mission < /h2> <
        p >
        We believe that sustainability should not be complicated or expensive.With the right technology, clean energy can be affordable, profitable, and accessible
        for everyone. <
        /p> <
        /div> <
        /Col> <
        /Row>

        { /* Mission Points */ } <
        Row gutter = {
            32
        }
        className = "pdt50" > {
            bannerPoints.map((point) => ( <
                Col className = "gutter-row coltype"
                key = {
                    point.key
                }
                xs = {
                    24
                }
                sm = {
                    12
                }
                md = {
                    6
                }
                style = {
                    {
                        display: "flex"
                    }
                }
                data - aos = "flip-up" >
                <
                div className = "columnStyle s1" >
                <
                div className = "counter mt50" > {
                    point.key
                } < /div> <
                p className = "full" > {
                    point.text
                } < /p> <
                /div> <
                /Col>
            ))
        } <
        /Row> <
        /div> <
        /div>
    );
};

export default Misson;