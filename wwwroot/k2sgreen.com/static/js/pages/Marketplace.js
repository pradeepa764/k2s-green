import React, {
    useState
} from "react";
import {
    Col,
    Row
} from "antd";
import {
    Link
} from "react-router-dom";

import BannerHeader from "../components/childComponent/BannerHeader";
import Insights from "../components/childComponent/Insights";

import ModalComponent from "../components/childComponent/ModalComponent";

const Marketplace = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const scrollToStayConnected = (e) => {
        e.preventDefault();
        const section = document.getElementById("stay-connected");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else {
            setIsModalOpen(true);
        }
    };
    const net_zero_future = [{
            text: "Track & Reduce your carbon footprint while meeting ESG targets"
        },
        {
            text: "Monetize Carbon Savings through verified carbon credits"
        },
        {
            text: "Engage Cost-Effectively in sustainability initiatives, regardless of business size"
        },
    ]
    const marketplace_k2s = [{
            key: "Industry Expertise",
            text: "Proven success with Fortune 500 companies, governments, and NGOs"
        },
        {
            key: "End-to-End Carbon Management",
            text: "From footprint analysis to verified offset solutions"
        },
        {
            key: "Data-Driven Transparency",
            text: "AI-powered dashboards for real-time tracking and reporting"
        },
        {
            key: "Proven ESG Results",
            text: "We help businesses achieve compliance, secure funding, and build investor trust"
        },

    ]



    return ( <
        >
        <
        div className = " landing-screen hydro defaultPadding" >
        <
        div className = "k2s-green-container inner" >
        <
        BannerHeader title = "Sustainability"
        highlight = "Consulting & Carbon Credit Marketplace"
        reverse = {
            true
        }
        full = {
            true
        }
        image = "images/energy-optimization.png"
        className = "energy-optimization" /
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
        h2 > Enabling a Net - Zero Future < /h2> <
        p > The Urgency of Sustainability & Carbon Offsetting Sustainability has evolved from a corporate responsibility to a competitive necessity.Governments, businesses, and individuals must reduce their carbon footprints, optimize energy usage, and align with global ESG standards to stay relevant in the low - carbon economy. < /p> <
        /div> <
        /Col> <
        /Row>

        <
        Row gutter = {
            [32, 16]
        }
        className = "pdt50" > {
            net_zero_future.map((point, index) => ( <
                Col className = "gutter-row "
                key = {
                    index
                }
                xs = {
                    24
                }
                sm = {
                    12
                }
                md = {
                    8
                } >
                <
                div className = "columnStyle s2"
                style = {
                    {
                        paddingTop: "70px",
                        PaddingBottom: "40px"
                    }
                } >
                <
                div className = "counter" > {
                    point.text
                } < /div> <
                /div> <
                /Col>
            ))
        } <
        /Row> <
        /div> <
        /div> <
        div className = "blog-left g-bb-white defaultPadding" >
        <
        div className = "k2s-green-container" >
        <
        Row gutter = {
            16
        }
        className = "pdt50" >
        <
        Col xs = {
            24
        }
        sm = {
            12
        } >
        <
        div className = "flexbox colalign right" >

        <
        div className = "wrapper-full" >
        <
        div className = "header-title black" >
        <
        h2 > Sustainability Consulting < /h2> <
        p > Evolving regulations, investor expectations, and consumer demand require transparent, impactful sustainability initiatives.Our consulting services help you: < /p> <
        /div> <
        ul class = "details-list gray" >
        <
        li > Achieve Science - Based Targets and Paris Agreement goals < /li> <
        li > Improve ratings to attract investors and stakeholders < /li> <
        li > Identify Scope 1, 2, and 3 emissions, then optimize energy usage < /li> <
        li > Demonstrate tangible sustainability leadership < /li>

        <
        /ul> <
        /div> <
        Link type = "primary"
        size = "large"
        onClick = {
            scrollToStayConnected
        }
        className = "morebutton" >
        schedule a call < i className = "arrow-right" > < /i> <
        /Link>

        <
        /div>


        <
        /Col> <
        Col xs = {
            24
        }
        sm = {
            12
        }
        className = "imageWrapper" >

        <
        img src = "images/sustainability-consulting.jpg"
        alt = "Solar Cleaning Robots" / >
        <
        /Col> <
        /Row> <
        /div> <
        /div>

        <
        div className = "blog-left g-bb-gray defaultPadding" >
        <
        div className = "k2s-green-container" >
        <
        Row gutter = {
            16
        }
        className = "pdt50" >
        <
        Col xs = {
            24
        }
        sm = {
            12
        }
        className = "imageWrapper" >

        <
        img src = "images/carbon-footprint-analysis.jpg"
        alt = "Solar Cleaning Robots" / >
        <
        /Col> <
        Col xs = {
            24
        }
        sm = {
            12
        } >
        <
        div className = "flexbox colalign left" >

        <
        div className = "wrapper-full" >
        <
        div className = "header-title black" >
        <
        h2 > Carbon Footprint Analysis < /h2> <
        p > A carbon footprint measures total greenhouse gas emissions
        for a business or individual.Pinpointing and reducing these emissions is critical to long - term sustainability. < /p> <
        /div> <
        ul class = "details-list gray" >
        <
        li > Map out emissions sources across operations and supply chains < /li> <
        li > Optimize renewable energy adoption and boost operational efficiency < /li> <
        li > Monitor emissions in real time via the K2S Green Live Dashboard < /li>

        <
        /ul> <
        /div> <
        Link type = "primary"
        size = "large"
        onClick = {
            scrollToStayConnected
        }
        className = "morebutton" >
        schedule a call < i className = "arrow-right" > < /i> <
        /Link>

        <
        /div>


        <
        /Col>

        <
        /Row> <
        /div> <
        /div>


        <
        div className = "blog-left g-bb-white defaultPadding" >
        <
        div className = "k2s-green-container" >
        <
        Row gutter = {
            16
        }
        className = "pdt50" >

        <
        Col xs = {
            24
        }
        sm = {
            12
        } >
        <
        div className = "flexbox colalign left" >

        <
        div className = "wrapper-full" >
        <
        div className = "header-title black" >
        <
        h2 > Carbon Credit Marketplace < /h2> <
        p > Carbon credits enable organizations to offset unavoidable emissions by supporting verified sustainability projects.Companies that exceed reduction goals can sell excess credits, transforming sustainability efforts into revenue streams. < /p> <
        /div> <
        ul class = "details-list gray" >
        <
        li > Generate tradable credits by producing clean energy or reducing emissions < /li> <
        li > Purchase credits to balance your remaining carbon footprint < /li> <
        li > All credits adhere to recognized global standards < /li>

        <
        /ul> <
        /div>

        <
        Link type = "primary"
        size = "large"
        onClick = {
            scrollToStayConnected
        }
        className = "morebutton wd80" >
        buy or sell carbon credits < i className = "arrow-right" > < /i> <
        /Link>

        <
        /div>


        <
        /Col> <
        Col xs = {
            24
        }
        sm = {
            12
        }
        className = "imageWrapper" >

        <
        img src = "images/carbonc-credit-marketplace.jpg"
        alt = "Solar Cleaning Robots" / >
        <
        /Col> <
        /Row> <
        /div> <
        /div> <
        div className = "blog-left g-bb-gray defaultPadding" >
        <
        div className = "k2s-green-container" >
        <
        Row gutter = {
            16
        }
        className = "pdt50" >
        <
        Col xs = {
            24
        }
        sm = {
            12
        }
        className = "imageWrapper" >

        <
        img src = "images/esg-sustainibility-leaders.jpg"
        alt = "Solar Cleaning Robots" / >
        <
        /Col> <
        Col xs = {
            24
        }
        sm = {
            12
        } >
        <
        div className = "flexbox colalign left" >

        <
        div className = "wrapper-full" >
        <
        div className = "header-title black" >
        <
        h2 > ESG Strategy & Regulatory Compliance < /h2> <
        p > Regulators, investors, and consumers increasingly reward companies with clear ESG commitments and penalize those lacking them. < /p> <
        /div> <
        ul class = "details-list gray" >
        <
        li > Comply with EU Green Deal, SEC Climate Disclosures, UN SDGs < /li> <
        li > Anticipate and navigate emerging taxes and cap - and - trade systems < /li> <
        li > Access sustainability - focused funds and preferential financing < /li>

        <
        /ul> <
        /div>

        <
        Link type = "primary"
        size = "large"
        onClick = {
            scrollToStayConnected
        }
        className = "morebutton wd80" >
        schedule a strategy call < i className = "arrow-right" > < /i> <
        /Link>

        <
        /div>


        <
        /Col>

        <
        /Row> <
        /div> <
        /div>

        <
        div className = "blog-left g-bb-white defaultPadding" >
        <
        div className = "k2s-green-container" >
        <
        Row gutter = {
            16
        }
        className = "pdt50" >

        <
        Col xs = {
            24
        }
        sm = {
            12
        } >
        <
        div className = "flexbox colalign right" >

        <
        div className = "wrapper-full" >
        <
        div className = "header-title black" >
        <
        h2 > Energy Efficiency Consulting < /h2> <
        p > Energy waste is expensive and increasingly regulated.Improving efficiency cuts costs, lowers emissions, and bolsters sustainability credentials. < /p> <
        /div> <
        ul class = "details-list gray" >
        <
        li > Shift to solar, wind, and hydrogen < /li> <
        li > Use AI
        for load balancing and automation < /li> <
        li > Achieve LEED, BREEAM, or WELL standards < /li>

        <
        /ul> <
        /div>

        <
        Link type = "primary"
        size = "large"
        onClick = {
            scrollToStayConnected
        }
        className = "morebutton wd80" >
        optimize your energy efficiency < i className = "arrow-right" > < /i> <
        /Link> <
        /div>


        <
        /Col> <
        Col xs = {
            24
        }
        sm = {
            12
        }
        className = "imageWrapper" >

        <
        img src = "images/energy-efficiency-consulting.jpg"
        alt = "Solar Cleaning Robots" / >
        <
        /Col> <
        /Row> <
        /div>

        <
        /div> <
        div className = "blog-left g-bb-gray defaultPadding" >
        <
        div className = "k2s-green-container" >
        <
        Row gutter = {
            16
        }
        className = "pdt50" >
        <
        Col xs = {
            24
        }
        sm = {
            12
        }
        className = "imageWrapper" >

        <
        img src = "images/regulatory-compliance.jpg"
        alt = "Solar Cleaning Robots" / >
        <
        /Col> <
        Col xs = {
            24
        }
        sm = {
            12
        } >
        <
        div className = "flexbox colalign left" >

        <
        div className = "wrapper-full" >
        <
        div className = "header-title black" >
        <
        h2 > Sustainable Supply Chain & Circular Economy Consulting < /h2> <
        p > Supply chains account
        for up to 80 % of a company’ s carbon footprint.Embracing circular economy principles can drastically reduce waste and costs. < /p> <
        /div> <
        ul class = "details-list gray" >
        <
        li > Reduce carbon footprints of suppliers and vendors < /li> <
        li > Implement circular strategies
        for manufacturers and retailers < /li> <
        li > Ensure full compliance with sustainability regulations < /li>

        <
        /ul> <
        /div>

        <
        Link type = "primary"
        size = "large"
        onClick = {
            scrollToStayConnected
        }
        className = "morebutton wd80" >
        schedule a strategy call < i className = "arrow-right" > < /i> <
        /Link> <
        /div>


        <
        /Col>

        <
        /Row> <
        /div> <
        div className = "k2s-green-container brd mt100" >
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
                span: 16,
                offset: 4
            }
        } >
        <
        div className = "header-title center" >
        <
        h2 className = "title-center" > Why Choose K2S Green < /h2> <
        /div> <
        /Col> <
        /Row> <
        Row gutter = {
            16
        }
        className = "pdt50 mt60" > {
            marketplace_k2s.map((point, index) => ( <
                Col className = "gutter-row coltype"
                key = {
                    index
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
                div className = "columnStyle2 s3"
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
        Insights / > { /* <StayConnected /> */ } <
        ModalComponent isModalOpen = {
            isModalOpen
        }
        setIsModalOpen = {
            setIsModalOpen
        }
        /> <
        />


    );
};

export default Marketplace;