import React from "react";
import { Col, Row } from "antd";

import BannerHeader from "../components/childComponent/BannerHeader";
import Insights from "../components/childComponent/Insights";
import StayConnected from "../components/childComponent/StayConnected";

import CustomTabs from "../components/childComponent/customTab";

import DataDrivenEnergy from "../components/childComponent/DataDrivenEnergy";



const EnergyOptimization = () => {



  const data_driven_energy_management = [
    { key: "B2B Energy Management", text: "Tailored for distributors, resellers, and large businesses." },
    { key: "Consumer Smart Monitoring", text: "Designed for homeowners and small businesses." },
    { key: "AI & BI-Driven Analytics", text: "Predictive modeling, automated recommendations, and visual dashboards that optimize performance and reduce costs." },

  ];
  const distributors_reseller = [
    { key: "Real-Time Distribution Monitoring", text: "Oversee solar, wind, and hydrogen output across multiple sites." },
    { key: "Grid Demand Forecasting", text: "AI-based insights predict fluctuations, ensuring grid stability and balanced load management." },
    { key: "Multi-Site Control", text: "Monitor and manage energy assets across diverse locations through a single, intuitive interface." },
    { key: "Carbon Credit Tracking", text: "Simplify reporting and monetize surplus clean energy with integrated carbon offset management." },

  ];
  const key_hydrogen_solutions = [
    { key: "Instant Energy Tracking", text: "View solar, wind, or hydrogen production and consumption in real time." },
    { key: "Automated Cost-Savings Tips", text: "AI recommends optimal appliance usage times to reduce bills." },
    { key: "Carbon Footprint Monitoring", text: "Track your personal CO₂ reductions and sustainability impact." },
    { key: "Battery & Storage Optimization", text: "Monitor battery levels and ensure backup power for peak hours or outages." },

  ];
  const  energy_management = [
    { key: "Lower Operating Costs", text: "Automatically schedule high-consumption tasks during off-peak hours." },
    { key: "Smart Grid Integration", text: "Sell excess energy back to the grid in real time, maximizing revenue potential." },
    { key: "Peak Load Management", text: "Balance energy loads to prevent system strain and outages." },
  ];
  const  iot = [
    { key: "Real-Time Updates", text: "Live metrics on production, consumption, and storage." },
    { key: "Push Notifications & Alerts", text: "AI-driven tips on when to switch to battery power or sell surplus energy." },
    { key: "Smart Device Integration", text: "Connect with EV chargers, smart thermostats, and IoT appliances for a fully automated home or facility." },
  ];
  const  esg = [
    { key: "Carbon Offset Reporting", text: "Quantify CO₂ reductions and generate sustainability reports." },
    { key: "Carbon Credit Optimization", text: "Monetize surplus clean energy through recognized carbon credit markets." },
    { key: "ESG Compliance", text: "Automated documentation for stakeholders and regulatory bodies." },
  ];
  const bannerPoints1 = [
    { key: "Custom Dashboards", text: "Purpose-built interfaces for both B2B and consumer needs." },
    { key: "AI & BI-Driven Automation", text: "Advanced analytics for cost savings and carbon reduction." },
    { key: "Multi-Energy System Integration", text: "Unified visibility across solar, wind, and hydrogen setups." },
    { key: "Carbon Credit & ESG Tracking", text: "Tools to monetize clean energy and meet compliance standards." }
  ];

  return (
    <>
      <div className=" landing-screen hydro defaultPadding">
        <div className="k2s-green-container inner">
          <BannerHeader
            title="Real-Time Insights for B2B and "
            highlight="Consumer Energy Optimization"
            image="images/energy-optimization.png"
            className="energy-optimization"
            
          />
          <Row gutter={16} className="pdt50">
            <Col className="gutter-row coltype"
              xs={{ span: 24, offset: 0 }}  // No offset on extra small screens
              md={{ span: 15, offset: 5 }}
            >
              <div className="header-title black center">
                <h2>Data-Driven Energy Management for a Smarter, Sustainable Future</h2>
                <p>In today’s renewable energy landscape, data is power. Whether you’re an energy distributor managing large-scale renewables or a homeowner optimizing costs, real-time analytics can transform how you produce, store, and consume energy.</p>
              </div>
            </Col>
          </Row>
          <Row gutter={[32,16]} className="pdt50">
            {data_driven_energy_management.map((point) => (
              <Col className="gutter-row " key={point.key} xs={24} sm={12} md={8}>
                <div className="columnStyle s2">
                  <div className="counter">{point.key}</div>
                  <p>{point.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="energy_solutions defaultPadding g-bb-white">
        <div className="k2s-green-container alltab ">
        <CustomTabs selected={0} type="optimizer"> </CustomTabs>
        
          
        </div>
      </div>
      <div className="blog-left g-bb-gray defaultPadding">
        <div className="k2s-green-container">
          
          <Row gutter={16} className="pdt50">
            <Col className="gutter-row" xs={24} sm={12} md={12}>
              <div className="contentWrapper right alignCenter">
                <div className="header-title black">
                  <h2>Smart Energy Monitoring for B2B: Distributors & Resellers</h2>
                  <p>Managing large-scale renewable networks demands real-time oversight of power generation, distribution, and performance metrics.</p>
                </div>
              </div>

            </Col>
            <Col xs={24} sm={12} md={12}>
              <DataDrivenEnergy data={distributors_reseller} />
            </Col>
          </Row>

        </div>
      </div>
      <div className="blog-left g-bb-white defaultPadding">
        <div className="k2s-green-container">
          <Row gutter={16} className="pdt50">
            <Col xs={24} sm={12} md={12}>
              <DataDrivenEnergy data={key_hydrogen_solutions} />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={12}>
              <div className="contentWrapper left alignCenter">
                <div className="header-title black">
                  <h2>Smart Home & Business Monitoring for Consumers</h2>
                  <p>Homeowners and small business owners often lack insight into real-time energy usage and potential savings.</p>
                </div>
              </div>

            </Col>

          </Row>

        </div>
      </div>
      <div className="blog-left g-bb-gray defaultPadding">
        <div className="k2s-green-container">
          <Row gutter={16} className="pdt50">
            <Col className="gutter-row" xs={24} sm={12} md={12}>
              <div className="contentWrapper right alignCenter">
                <div className="header-title black">
                  <h2>AI & BI-Powered Predictive Energy Management</h2>
                  <p>Homeowners and small business owners often lack insight into real-time energy usage and potential savings.</p>
                </div>
              </div>

            </Col>
            <Col xs={24} sm={12} md={12}>
              <DataDrivenEnergy data={energy_management} />
            </Col>
          </Row>

        </div>
      </div>
      <div className="blog-left g-bb-white defaultPadding">
        <div className="k2s-green-container">
          <Row gutter={16} className="pdt50">
            <Col xs={24} sm={12} md={12}>
              <DataDrivenEnergy data={iot} />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={12}>
              <div className="contentWrapper left alignCenter">
                <div className="header-title black">
                  <h2>IoT-Enabled Energy Monitoring: Full Control via Mobile & Web</h2>
                  <p>Stay connected to your energy system wherever you are. The K2S Green Mobile App and web portal deliver a complete, interactive experience:</p>
                </div>
              </div>

            </Col>
          </Row>
        </div>
      </div>
      <div className="blog-left g-bb-gray defaultPadding">
        <div className="k2s-green-container ">
          <Row gutter={16} className="pdt50">
            <Col className="gutter-row" xs={24} sm={12} md={12}>
              <div className="contentWrapper right alignCenter">
                <div className="header-title black">
                  <h2>ESG & Carbon Footprint Tracking</h2>
                  <p>For businesses aiming to meet net-zero targets or attract green financing, the K2S Green Dashboard provides:</p>
                </div>
              </div>

            </Col>
            <Col xs={24} sm={12} md={12}>
              <DataDrivenEnergy data={esg} />
            </Col>
          </Row>
        </div>
        <div className="k2s-green-container brd mt100">
          <Row gutter={16} className="pdt50 ">
            <Col
              xs={{ span: 24, offset: 0 }}  // No offset on extra small screens
              md={{ span: 16, offset: 4 }}
            >
              <div className="header-title center">
                <h2 className="title-center">Why Partner with K2S Green for Hydrogen</h2>
              </div>
            </Col>
          </Row>
          <Row gutter={16} className="pdt50 mt60">
            {bannerPoints1.map((point) => (
              <Col className="gutter-row coltype" xs={24} sm={12} md={6}>
                <div className="columnStyle2 s3" data-aos="fade-up"
                  data-aos-anchor-placement="top-center">
                  <div className="counter">{point.key}</div>
                  <p>{point.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>


      <Insights />
      <StayConnected />
    </>


  );
};

export default EnergyOptimization;
