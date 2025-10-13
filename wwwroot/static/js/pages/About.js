import React from "react";
import {
    Col,
    Row
} from "antd";

import BannerHeader from "../components/childComponent/BannerHeader";
import Misson from "../components/childComponent/Misson";
import SmartApproach from "../components/childComponent/SmartApproach";
import Insights from "../components/childComponent/Insights";
import StayConnected from "../components/childComponent/StayConnected";

import SlickSlider from "../components/childComponent/slickSlider";


import windEnergy from "../assets/images/wind-energy.png";
import solarEnergy from "../assets/images/solar-icon.png";
import waterEnergy from "../assets/images/water.png";
import performance from "../assets/images/performance.png";
import WhatSetsApart from "../components/childComponent/WhatSetsApart";
import ImpactArea from "../components/childComponent/ImpactArea";
import CustomTabs from "../components/childComponent/customTab";

const carouselItems = [{
        image: windEnergy,
        title: "Wind Energy"
    },
    {
        image: solarEnergy,
        title: "Solar Energy"
    },
    {
        image: waterEnergy,
        title: "Water Energy"
    },
    {
        image: performance,
        title: "Performance Monitoring"
    },
    {
        image: windEnergy,
        title: "Wind Energy"
    },
    {
        image: solarEnergy,
        title: "Solar Energy"
    },
    {
        image: waterEnergy,
        title: "Water Energy"
    }
];
const Home = () => {





    return ( <
        >
        <
        div className = " landing-screen  about defaultPaddingBanner" >
        <
        div className = "k2s-green-container inner alltab" >
        <
        BannerHeader title = "About Us &"
        highlight = "Impact"
        image = "images/banner-inner1.jpg"

        /
        >
        <
        Row gutter = {
            16
        }
        className = "pdt50"
        data - aos = "fade-up"
        data - aos - duration = "2000" >
        <
        Col className = "gutter-row coltype"
        xs = {
            24
        }
        md = {
            16
        } >
        <
        div className = "header-title black left mb-60" >
        <
        h2 > Transforming the Energy Landscape with Technology & Transparency <
        /h2> <
        p className = "lightblack" > In a world facing urgent climate challenges, businesses, governments, and individuals must shift toward clean, intelligent, and scalable energy solutions.At K2S Green, we’ re not just providing renewable energy— we’ re redefining how it’ s generated, managed, and monetized. < /p> <
        /div> <
        /Col> <
        /Row> <
        CustomTabs selected = {
            0
        } > < /CustomTabs> <
        /div> <
        /div> <
        Misson / >
        <
        div class = "core-offering" >
        <
        div className = "k2s-green-container defaultPadding" >
        <
        Row gutter = {
            16
        } >
        <
        Col className = "gutter-row coltype"
        xs = {
            24
        }
        md = {
            12
        } >
        <
        div className = "header-title black" >
        <
        h2 > Our Core Offerings < /h2> <
        /div> <
        /Col> <
        Col className = "gutter-row coltype "
        xs = {
            24
        }
        md = {
            12
        } >
        <
        div className = "header-title black" >
        <
        p > We believe that sustainability should not be complicated or expensive.With the right technology, clean energy can be affordable, profitable, and accessible
        for everyone. < /p> <
        /div> <
        /Col> <
        /Row>

        <
        /div>


        <
        SlickSlider slides = {
            carouselItems
        }
        /> <
        /div> <
        WhatSetsApart / >
        <
        ImpactArea / >
        <
        SmartApproach pagetype = "about" / >
        <
        Insights / >
        <
        StayConnected / >
        <
        />


    );
};

export default Home;