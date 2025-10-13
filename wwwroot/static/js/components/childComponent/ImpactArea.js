import React from "react";
import {
    Row,
    Col,
    Collapse
} from "antd";
import {
    PlusOutlined,
    MinusOutlined
} from "@ant-design/icons";

const impactData = [{
        key: "1",
        title: "Total CO₂ Emissions Reduced",
        content: "500,000+ metric tons annually."
    },
    {
        key: "2",
        title: "Clean Energy Generated",
        content: "Over 10 GW of installed renewable capacity worldwide."
    },
    {
        key: "3",
        title: "Total Client Savings",
        content: "$200M+ in cumulative energy cost reductions."
    },
    {
        key: "4",
        title: "Carbon Credits Traded",
        content: "2M+ credits sold to businesses seeking offset solutions"
    },
    {
        key: "5",
        title: "Industry Recognition",
        content: "Featured among the Top 10 Sustainability Solution Providers in 2024"
    },
];

const ImpactArea = () => {
    return ( <
        div className = "impact-area defaultPadding" >
        <
        div className = "k2s-green-container" >

        { /* Header */ } <
        div className = "header-title center" >
        <
        h2 className = "title-center black" > Our Impact < /h2> <
        p className = "lightblack" > At K2S Green, our goal is more than just supplying energy— it’ s about making energy smarter, cleaner, and financially rewarding. < /p> <
        /div>

        { /* Layout */ } <
        Row gutter = {
            [16, 16]
        } >

        { /* Accordion */ } <
        Col xs = {
            24
        }
        md = {
            12
        } >
        <
        Collapse accordion defaultActiveKey = {
            ["1"]
        }
        expandIconPosition = "end"
        expandIcon = {
            ({
                isActive
            }) => (isActive ? < MinusOutlined / > : < PlusOutlined / > )
        }
        className = "k2sgreen-accordion"
        items = {
            impactData.map((item) => ({
                key: item.key,
                label: item.title,
                children: < p > {
                    item.content
                } < /p>,
            }))
        }
        /> <
        /Col>

        { /* Image Section */ } <
        Col xs = {
            24
        }
        md = {
            12
        } >
        <
        div className = "impact-image-wrapper" >
        <
        img src = "/images/impact-img.jpg"
        alt = "Impact"
        className = "impact-image" / >
        <
        /div> <
        /Col>

        <
        /Row> <
        /div> <
        /div>
    );
};

export default ImpactArea;