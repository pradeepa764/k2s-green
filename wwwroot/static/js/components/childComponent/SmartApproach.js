import React from "react";
import {
    Row,
    Col
} from "antd";
import SwiperSlider from "./SwiperSlider";
import {
    Link
} from "react-router-dom"

const carouselItemsSlide = [{
        h3: "UN Sustainable Development Goals (SDGs)",
        p: "Especially SDG 7 (Clean Energy) and SDG 13 (Climate Action)."
    },
    {
        h3: "Science-Based Targets Initiative (SBTi)",
        p: "Assisting companies in setting and achieving decarbonization milestones."
    },
    {
        h3: "Task Force on Climate-Related Financial Disclosures (TCFD)",
        p: "Ensuring ESG transparency and regulatory compliance."
    },
    {
        h3: "Carbon Credit Standards (VERRA, Gold Standard, CDM)",
        p: "Providing verified, high-quality offset projects."
    },

];

const SmartApproach = ({
    pagetype,
    pageImgClass
}) => {
    return ( <
        > {
            pagetype === "home" ? ( <
                div className = "smart-approach default" >
                <
                div className = "k2s-green-container defaultPadding" >
                <
                h5 data - aos = "fade-up"
                data - aos - anchor - placement = "top-center" > A Smart Approach to Renewable Energy < /h5> <
                div className = "header-title white" >
                <
                h2 data - aos = "fade-up"
                data - aos - anchor - placement = "top-center" >
                Wind energy is tomorrow’ s foundation.Our advanced turbines boost efficiency, reliability, and savings.Power your future with clean energy. <
                /h2> <
                Link to = "/wind"
                type = "primary"
                size = "large"
                className = "morebutton" >
                Check wind turbines Options < i className = "arrow-right" > < /i> <
                /Link> <
                div className = "smallPic" >
                <
                div className = "pic pos1"
                data - aos = "fade-up"
                data - aos - duration = "100"
                data - aos - offset = "-200"
                data - aos - anchor - placement = "top-center" > < /div> <
                div className = "pic pos2"
                data - aos = "fade-up"
                data - aos - duration = "100"
                data - aos - offset = "-200"
                data - aos - anchor - placement = "top-center" > < /div> <
                div className = "pic pos3"
                data - aos = "fade-up"
                data - aos - duration = "100"
                data - aos - offset = "-200"
                data - aos - anchor - placement = "top-center" > < /div> <
                div className = "pic pos4"
                data - aos = "fade-up"
                data - aos - duration = "100"
                data - aos - offset = "-200"
                data - aos - anchor - placement = "top-center" > < /div> <
                /div> <
                /div> <
                /div> <
                /div>
            ) : ( <
                div className = "smart-approach about" >
                <
                div className = "k2s-green-container defaultPadding_xl" >
                <
                Row >
                <
                Col xs = {
                    24
                }
                md = {
                    8
                }
                className = "g-bb-white containerPadding"
                data - aos = "fade-up"
                data - aos - anchor - placement = "top-center" >
                <
                SwiperSlider slides = {
                    carouselItemsSlide
                }
                /> <
                /Col> <
                /Row> <
                /div> <
                /div>
            )
        } <
        />
    );
};

export default SmartApproach;