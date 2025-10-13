import React from "react";
import { Row, Col, Collapse } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import BannerHeader from "../components/childComponent/BannerHeader";

import StaticStepper from "../components/childComponent/StaticStepper";
import ImageCarousel from "../components/childComponent/ImageCarousel";

import CustomTabs from "../components/childComponent/customTab";
const impactData = [
    { key: "1", title: "Who should book a consultation?", content: "Anyone interested in renewable energy adoption, energy cost reduction, carbon credit monetization, or ESG strategy implementation—including homeowners, businesses, and energy distributors." },
    { key: "2", title: "How much does the consultation cost?", content: "Your first consultation is free. Detailed assessments and project implementations are custom-priced based on your specific needs." },
    { key: "3", title: "Can I book a consultation for both residential and commercial projects?", content: "Absolutely. We offer personalized solutions for homes, small businesses, large industries, and corporate enterprises." },
    { key: "4", title: "How soon can I schedule a consultation?", content: "Consultations are available within 24–48 hours of booking." },

];


const BookingConsultant = () => {

     
    return (
        <>
            <div className="landing-screen defaultPadding_fge">
                <div className="k2s-green-container inner alltab">
                    <BannerHeader title="Booking & " highlight="Consultation" image="images/wind_energy_banner.jpg" />
                    <Row gutter={16} className="pdt50">
                        <Col xs={24} md={12}>
                            <div className="header-title">
                                <h2>Make Your Energy Transition Simple & Seamless</h2>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <div className="header-title">
                                <p>
                                    Transitioning to renewable energy, sustainable practices, and carbon credit monetization can be complex.
                                    At K2S Green, we simplify the process with expert, data-driven consultation services tailored for businesses,
                                    energy distributors, and individuals. Whether you’re installing wind, solar, or hydrogen solutions, need
                                    guidance on ESG compliance, or want to monetize carbon credits, our experts are here to chart your path to a
                                    cleaner, cost-effective future.
                                </p>
                                <Link to="/contact" className="morebutton consultant">
                                    Schedule a Consultation <i className="arrow-right"></i>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

           <div className="g-bb-white defaultPadding">
                <div className="k2s-green-container consultant-service">
                    <Row gutter={16}>
                        <Col
                            xs={24}
                            md={{ span: 12, offset: 6 }}
                        >
                            <div className="header-title center">
                                <h2>Who Is Our Consultation Service For?</h2>
                                <p className="pdt20">Our services are designed for anyone ready to take control of their energy future:</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="pdt50 alltab">
                       
                        <CustomTabs selected={0} type="consultation"> </CustomTabs>
                    </div>


                </div>
            </div>
           <div className="defaultPadding g-bb-gray">
                <div className="k2s-green-container">
                    <Row gutter={16}>
                        <Col
                            xs={24}
                            md={{ span: 12, offset: 6 }}
                        >
                            <div className="header-title center">
                                <h2>Our Consultation Process</h2>

                            </div>
                        </Col>
                    </Row>
                    <div className="pdt50">
                        <StaticStepper />
                    </div>
                </div>
            </div>
            <div className="energy_solutions defaultPadding g-bb-white">
                <div className="k2s-green-container ">
                    <Row>
                        <Col
                            xs={24}
                            md={{ span: 12, offset: 6 }}
                        >
                            <div className="header-title black center">
                                <h2>Book a Consultation For Specific Services</h2>
                            </div>
                        </Col>
                    </Row>
                </div>
                <ImageCarousel />

            </div>
             <div className="energy_solutions defaultPadding g-bb-gray">
                <div className="k2s-green-container ">
                    <div className="header-title black center">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <Collapse
                        accordion
                        defaultActiveKey={["1"]}
                        expandIconPosition="end"
                        expandIcon={({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />)}
                        className="k2sgreen-accordion faq"
                        items={impactData.map((item) => ({
                            key: item.key,
                            label: item.title,
                            children: <div className="faq-content">
                                <p>{item.content}</p>
                            </div>,
                        }))}
                    />
                </div>

            </div>
             {/* <div className="defaultPadding g-bb-blue">
                <div className="k2s-green-container">
                    <Row gutter={16} className="pdt50">
                        <Col className="gutter-row coltype" 
                           xs={{ span: 24, offset: 0 }}  // No offset on extra small screens
                           md={{ span: 14, offset: 5 }}
                           >
                            <div className="header-title white center">
                                <h2 className="title-center">Why Choose K2S Green for Sustainability Consulting</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16} className="pdt50">
                        <Col className="gutter-row coltype" xs={24} sm={8} md={8}>
                            <div className="columnStyle2 s1">
                                <div className="counter">93%</div>
                                <p>of CEOs believe sustainability is critical to their company’s future (UN Global Compact, 2023)</p>
                            </div>
                        </Col>
                        <Col className="gutter-row coltype" xs={24} sm={8} md={8}>
                            <div className="columnStyle2 s1">
                                <div className="counter">$1 trillion</div>
                                <p>is the expected annually clean energy investments by 2030 (IEA)</p>
                            </div>
                        </Col>
                        <Col className="gutter-row coltype" xs={24} sm={8} md={8}>
                            <div className="columnStyle2 s1">
                                <div className="counter">$130 trillion</div>
                                <p>commited to net-zero portfolios by 2050 (Glasgow Financial Alliance for Net Zero)</p>
                            </div>
                        </Col>
                      
                    </Row>
                </div>
            </div> */}
            {/* <StayConnected />  */}
        </>
    );
};

export default BookingConsultant;