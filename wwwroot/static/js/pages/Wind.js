import React from "react";
import {
    Col,
    Row
} from "antd";

import BannerHeader from "../components/childComponent/BannerHeader";
import SmartApproach from "../components/childComponent/SmartApproach";
import Insights from "../components/childComponent/Insights";


// import windEnergy from "../assets/images/wind-energy.png";
// import solarEnergy from "../assets/images/solar-icon.png";
// import waterEnergy from "../assets/images/water.png";
// import performance from "../assets/images/performance.png";

import WhyGreen from "../components/childComponent/WhyGreen";
import CustomTabs from "../components/childComponent/customTab";

// const carouselItems = [
//   { image: windEnergy, title: "Wind Energy" },
//   { image: solarEnergy, title: "Solar Energy" },
//   { image: waterEnergy, title: "Water Energy" },
//   { image: performance, title: "Performance Monitoring" },
//   { image: windEnergy, title: "Wind Energy" },
//   { image: solarEnergy, title: "Solar Energy" },
//   { image: waterEnergy, title: "Water Energy" }
// ];

const Home = () => {



    const bannerPoints = [{
            key: "24/7 Generation",
            text: "Unlike solar, wind can be harnessed day or night."
        },
        {
            key: "Reduced Costs",
            text: "Lower reliance on fluctuating grid prices."
        },
        {
            key: "Minimal Environmental Impact",
            text: "Zero emissions and low maintenance."
        },
        {
            key: "Scalable & Versatile",
            text: "Suits residential, commercial, and industrial applications."
        }
    ];

    return ( <
        >
        <
        div className = " landing-screen wind defaultPaddingBanner" >
        <
        div className = "k2s-green-container inner alltab" >
        <
        BannerHeader title = "Wind"
        highlight = "Energy"
        image = "images/wind_energy_banner.jpg" /
        >
        <
        Row gutter = {
            16
        }
        className = "pdt50" >
        <
        Col className = "gutter-row coltype"
        xs = {
            {
                span: 24,
                offset: 0
            }
        } // No offset on extra small screens
        md = {
            {
                span: 14,
                offset: 5
            }
        } >
        <
        div className = "header-title black center" >
        <
        h2 > A Reliable & Scalable Renewable Power Source <
        /h2> <
        p className = "lightblack" > Wind energy is one of the most cost - effective and sustainable paths to energy independence and carbon neutrality.As net - zero goals gain urgency worldwide, wind power plays a pivotal role in reshaping how businesses and homeowners source their electricity. < /p> <
        /div> <
        /Col> <
        /Row>

        <
        /div> <
        div className = "k2s-green-container inner brd" >
        <
        Row gutter = {
            16
        }
        className = "pdt80" >
        <
        Col className = "gutter-row coltype"
        xs = {
            {
                span: 24,
                offset: 0
            }
        } // No offset on extra small screens
        md = {
            {
                span: 12,
                offset: 6
            }
        } >
        <
        div className = "header-title black center half" >
        <
        h2 > Why Wind Energy ? < /h2> <
        p className = "lightblack" > At K2S Green, we offer advanced vertical and horizontal turbines designed
        for peak efficiency and seamless integration with solar or hydrogen systems. < /p> <
        /div> <
        /Col> <
        /Row> <
        Row gutter = {
            [32, 16]
        }
        className = "pdt50" > {
            bannerPoints.map((point) => ( <
                Col className = "gutter-row"
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
                } >
                <
                div className = "columnStyle s2"
                data - aos = "fade-up"
                data - aos - anchor - placement = "top-center" >
                <
                div className = "counter" > {
                    point.key
                } < /div> <
                p > {
                    point.text
                } < /p> <
                /div> <
                /Col>
            ))
        } <
        /Row> <
        /div> <
        div className = "defaultPadding" >
        <
        div className = "k2s-green-container inner energy-solutions" >
        <
        Row gutter = {
            16
        }
        className = "pdt50" >
        <
        Col className = "gutter-row coltype"
        xs = {
            {
                span: 24,
                offset: 0
            }
        } // No offset on extra small screens
        md = {
            {
                span: 12,
                offset: 6
            }
        } >
        <
        div className = "header-title black center" >
        <
        h2 > How Wind Energy Works < /h2> <
        p className = "lightblack" > Wind turbines convert kinetic energy from moving air into electricity. < /p> <
        /div> <
        /Col> <
        /Row> <
        Row gutter = {
            [16, 16]
        }
        className = "pdt50 collarge" >
        <
        Col className = "gutter-row coltype"
        xs = {
            24
        }
        sm = {
            13
        } >
        <
        Row >
        <
        Col className = "left1" > < img src = "images/how-it-work-left1.jpg"
        alt = "how-it-work-left1" / > < /Col> <
        Col className = "left2" > < img src = "images/how-it-work-left2.jpg"
        alt = "how-it-work-left2"
        style = {
            {
                marginTop: "40px"
            }
        }
        /></Col >
        <
        /Row> <
        /Col> <
        Col className = "gutter-row coltype"
        xs = {
            24
        }
        sm = {
            11
        } >
        <
        img src = "images/how-it-work-right.jpg"
        alt = "how-it-work-right.jpg" / >
        <
        /Col> <
        /Row> <
        /div> <
        /div> <
        /div>

        <
        div className = "energy_solutions defaultPadding g-bb-blue"
        style = {
            {
                backgroundColor: "rgb(23 31 86)"
            }
        } >
        <
        div className = "k2s-green-container alltab white" >
        <
        CustomTabs selected = {
            0
        }
        type = "wind" > < /CustomTabs>

        <
        /div> <
        /div>

        <
        WhyGreen / >

        {
            /* <div class="core-offering">
                    <div className="k2s-green-container defaultPadding">
                      <Row gutter={16}>
                        <Col className="gutter-row coltype" xs={24} md={12} >
                          <div className="header-title black">
                            <h2>Our Core Offerings</h2>
                          </div>
                        </Col>
                        <Col className="gutter-row coltype" xs={24} md={12} >
                          <div className="header-title black">
                            <p>We believe that sustainability should not be complicated or expensive. With the right technology, clean energy can be affordable, profitable, and accessible for everyone. </p>
                          </div>
                        </Col>
                      </Row>

                    </div>
                    <SlickSlider slides={carouselItems} />
                  </div>

                  <WhatSetsApart />
                  <ImpactArea /> */
        } <
        SmartApproach pagetype = "about" / >
        <
        Insights / >

        <
        />


    );
};

export default Home;