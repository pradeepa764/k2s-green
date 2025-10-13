import React from "react";
import {
    Row,
    Col
} from "antd";

const WhatSetsApart = () => {
    const apartPoints = [
        "<strong>Technology-Driven Sustainability</strong> – Beyond hardware installation, we integrate AI-powered energy tracking and predictive optimization.",
        "<strong>End-to-End Solutions</strong> – From consultation and installation to live monitoring and carbon credit monetization, we provide a comprehensive energy transformation strategy.",
        "<strong>Tailored for B2B & Consumers</strong> – Whether you’re an industrial energy buyer, a small business, or a homeowner, our solutions fit your unique needs.",
        "<strong>Transparent, Data-Backed Decisions</strong> – Our Live Energy Dashboard offers real-time visibility into efficiency gains, ROI, and carbon footprint reductions.",
    ];

    return ( <
        div className = "whatset-appart defaultPadding" >
        <
        div className = "k2s-green-container" >
        <
        Row gutter = {
            [16, 16]
        }
        align = "middle"
        className = "flexbox wd70" > { /* Left Side - Image */ } <
        Col xs = {
            24
        }
        md = {
            12
        }
        className = "flexbox-left blue" >
        <
        div className = "img_stay_connected" >
        <
        img src = "/images/apart.jpg"
        alt = "What Sets Us Apart" / >
        <
        /div> <
        /Col>

        { /* Right Side - Content */ } <
        Col xs = {
            24
        }
        md = {
            12
        }
        className = "flexbox-right white" >
        <
        div className = "whatset" >
        <
        div className = "header-title" >
        <
        h3 > What Sets Us Apart ? < /h3> <
        /div> <
        ul className = "whatset-appart-list" > {
            apartPoints.map((point, index) => ( <
                li key = {
                    index
                }
                dangerouslySetInnerHTML = {
                    {
                        __html: point
                    }
                }
                />
            ))
        } <
        /ul> <
        /div> <
        /Col> <
        /Row> <
        /div> <
        /div>
    );
};

export default WhatSetsApart;