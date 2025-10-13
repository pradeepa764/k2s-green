import React from "react";
import {
    Col,
    Row
} from "antd";
import {
    Link
} from "react-router-dom";

import BannerHeader from "../components/childComponent/BannerHeader";
import Insights from "../components/childComponent/Insights";
import StayConnected from "../components/childComponent/StayConnected";





const SolutionsComponent = () => {



    const typeOfSolutions = [{
            key: "Wind Energy",
            label: "Wind Energy Solution",
            text: [
                "Harness nature’s force with advanced turbines.",
                "Continuous Power: 24/7 generation in consistent wind conditions.",
                "Tailored Systems: Options from 1 kW for homes to 20 kW for industrial applications.",
                "Smart Analytics: Real-time tracking maximizes performance and savings."
            ],
            img: "images/wind-icon-gr.png",
            url: "/wind"
        },
        {
            key: "Solar Innovation",
            label: "Solar Energy Solution",
            text: [
                "Move beyond traditional panels with next-gen solar technology.Leverages robotics, smart sensors, and AI to enhance energy capture. Streamlined maintenance for superior efficiency without job-work focus."
            ],
            img: "images/solar-icon-gr.png",
            url: "/solar"
        },
        {
            key: "Hydrogen Energy",
            label: "Hydrogen Energy Solution",
            text: [
                "Fuel the future with clean, versatile hydrogen.",
                "Efficient Storage: Convert surplus wind and solar power into hydrogen.",
                "Versatile Applications: Ideal for transport, heavy industry, and more.",
                "Zero Emissions: Hydrogen fuel cells produce only water and heat."
            ],
            img: "images/hydrogen-gr.png",
            url: "/hydrogen"
        },
        // {
        //     key: "Smart Energy Dashboard",
        //     label: "Performance Monitoring",    
        //     text: [
        //         "Gain full control with our Live Energy Dashboard.",
        //         "Real-Time Monitoring: Track energy production, battery performance, and carbon reductions.",
        //         "AI-Driven Optimization: Receive actionable insights to lower costs and emissions."
        //     ],
        //     img: "images/performance-gr.png",
        //     url: "/performance"
        // },
        // {
        //     key: "Consulting & Custom Solutions",
        //     label: "Consulting & Custom Solutions",
        //     text: [
        //         "Make your energy transition seamless with expert guidance.",
        //         "ESG & Carbon Analysis: Tailored audits and feasibility studies.",
        //         "Custom Hybrid Systems: Integrate wind, solar, and hydrogen for optimal performance."
        //     ],
        //     img: "images/consulting-gr.png",
        //     url: "/consulting"
        // }
    ];
    const whyk2s_soluitons = [{
            key: "End-to-End Partnership",
            text: "From consultation to installation and optimization."
        },
        {
            key: "Data-Driven Insights",
            text: "From consultation to installation and optimization."
        },
        {
            key: "Tailored Solutions",
            text: "Designed to meet your unique energy needs."
        },
        {
            key: "Global ESG Compliance",
            text: "Empowering your journey to net-zero."
        }
    ];


    return ( <
        >
        <
        div className = " landing-screen hydro defaultPadding" >
        <
        div className = "k2s-green-container inner" >
        <
        BannerHeader title = "Our"
        highlight = "Solutions"
        image = "images/solutions.jpg"
        className = "" /
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
                span: 12,
                offset: 6
            }
        } >
        <
        div className = "header-title center" >
        <
        h6 className = "lightblack" > At K2S Green, renewable energy isn’ t a future goal— it’ s today’ s imperative.We deliver integrated, intelligent solutions tailored
        for businesses and homeowners, combining wind, solar, and hydrogen technologies to drive efficiency and cost savings. < /h6> <
        /div> <
        /Col> <
        /Row>

        <
        Row gutter = {
            [16, 16]
        }
        className = "pdt50" >

        {
            typeOfSolutions.map((solution) => (

                <
                Col key = {
                    solution.key
                }
                xs = {
                    24
                }
                sm = {
                    12
                }
                md = {
                    8
                }
                lg = {
                    8
                } >
                <
                div className = "solution-colbox" >
                <
                div className = "imgwrapper" >
                <
                img alt = {
                    solution.key
                }
                src = {
                    solution.img
                }
                /> <
                /div>

                <
                div className = "header-title white" >
                <
                h5 > {
                    solution.key
                } < /h5> <
                /div>

                {
                    solution.text.length === 1 ? ( <
                        div className = "header-title white minHeight"
                        style = {
                            {
                                color: "rgba(255, 255, 255, 0.64)",
                                fontWeight: "300"
                            }
                        } > < p > {
                            solution.text[0]
                        } < /p></div >
                    ) : ( <
                        ul className = "details-list offwhite minHeight" > {
                            solution.text.map((item, index) => ( <
                                li key = {
                                    index
                                } > {
                                    item
                                } < /li>
                            ))
                        } <
                        /ul>
                    )
                } <
                Link to = {
                    solution.url
                }
                className = "morebutton" > {
                    solution.label
                } < i class = "arrow-right" > < /i></Link >
                <
                /div>

                <
                /Col>
            ))
        } <
        /Row>

        <
        Row gutter = {
            16
        }
        className = "pdt50 " >
        <
        Col xs = {
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
        div className = "header-title center mt100" >
        <
        h2 className = "title-center black" > Why K2S Green < /h2> <
        p className = "lightblack" > Today’ s evolving energy landscape demands a bold response.Balancing economic growth with environmental stewardship isn’ t just an aspiration— it’ s a strategic necessity
        for a sustainable future. < /p> <
        /div> <
        /Col> <
        /Row>

        <
        Row gutter = {
            16
        }
        className = "pdt50 mt60" > {
            whyk2s_soluitons.map((point) => ( <
                Col className = "gutter-row coltype"
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
                div className = "columnStyle2 s2"
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
        /div>

        <
        Insights / >

        <
        StayConnected / >
        <
        />


    );
};

export default SolutionsComponent;