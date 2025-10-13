import React,{useState} from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

import BannerHeader from "../components/childComponent/BannerHeader";
import Insights from "../components/childComponent/Insights";

import ModalComponent from "../components/childComponent/ModalComponent";


const Solar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const scrollToStayConnected = (e) => {
      e.preventDefault();
      const section = document.getElementById("stay-connected");
    
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        setIsModalOpen(true);
      }
    };

  const solar_innovations = [
    { key: "Solar Cleaning Robots", text: "Accessible Energy Fully automated maintenance for maximum output" },
    { key: "Smart Solar Trackers", text: " Increase efficiency by up to 40%" },
    { key: "Advanced Battery Storage", text: "Harness power day and nightCreate financial opportunities by monetizing excess clean energy & carbon credits." },
    { key: "AI-Powered Energy Management", text: " Optimize usage in real time" }
  ];

  const accessories_upgrades = [
    { key: "Boost Efficiency", text: "More power output translates to higher ROI." },
    { key: "Reduce Maintenance Cost", text: "Automated cleaning and smart tracking minimize manual labor." },
    { key: "Maximize Financial Returns", text: "AI-driven energy management cuts bills and can earn carbon credits." },
    { key: "Support ESG Goals", text: "Advanced solar technology helps meet sustainability benchmarks." }
  ];

  return (
    <>
      <div className=" landing-screen solar defaultPadding">
        <div className="k2s-green-container inner alltab">
          <BannerHeader
            title="Solar"
            highlight="Energy"
            image="images/solar_energy_banner.jpg"
          />
          <Row gutter={16} className="pdt50">
            <Col className="gutter-row coltype"
              xs={{ span: 24, offset: 0 }}  // No offset on extra small screens
              md={{ span: 14, offset: 5 }}
            >
              <div className="header-title black center">
                <h2 >The Future of Smart Solar Energy </h2>
                <p>Solar technology has evolved far beyond traditional panels. Today, a suite of advanced accessories and automation tools can dramatically increase energy capture, storage, and efficiency. At K2S Green, we offer cutting-edge innovations—from automated cleaning robots to AI-driven energy management—ensuring every kilowatt counts.</p>
              </div>
            </Col>
          </Row>

        </div>
        <div className="k2s-green-container inner brd">
          <Row gutter={16} className="pdt50">
            <Col className="gutter-row coltype"
              xs={{ span: 24, offset: 0 }}  // No offset on extra small screens
              md={{ span: 12, offset: 6 }}
            >
              <div className="header-title black center">
                <h2>Key Innovations</h2>
              </div>
            </Col>
          </Row>
          <Row gutter={[16, 16]} className="pdt50">
            {solar_innovations.map((point) => (
              <Col className="gutter-row" key={point.key} xs={24} sm={12} md={6}>
                <div className="columnStyle s2" data-aos="fade-up"
                  data-aos-anchor-placement="top-center">
                  <div className="counter">{point.key}</div>
                  <p>{point.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className="blog-left g-bb-white defaultPadding">
        <div className="k2s-green-container">
          <Row gutter={16} className="pdt50">
            <Col xs={24} sm={12}>
              <div className="flexbox colalign right">

                <div className="wrapper-full">
                  <div className="header-title black">
                    <h2 >Solar Cleaning Robots</h2>
                    <p>Maximizing Efficiency Through Automation</p>
                  </div>
                  <ul class="details-list gray">
                    <li>Dust, debris, and bird droppings can reduce solar output by 10–25%.</li>
                    <li>AI-powered robots that clean panels autonomously, use minimal water, and adapt to weather changes.</li>
                    <li>A 500 kW solar farm saved 60% in labor costs and boosted annual output by 15% with robotic cleaning.</li>

                  </ul>
                </div>
                <Link type="primary" size="large" onClick={scrollToStayConnected}  className="morebutton" >
                get a quote <i className="arrow-right"></i>
                </Link>

              </div>


            </Col>
            <Col xs={24} sm={12} className="imageWrapper">

              <img src="images/solar-cleaning-robots.jpg" alt="Solar Cleaning Robots" />
            </Col>
          </Row>
        </div>
      </div>

      <div className="blog-left g-bb-gray defaultPadding">
        <div className="k2s-green-container">
          <Row gutter={16} className="pdt50">
            <Col xs={24} sm={12} className="imageWrapper">

              <img src="images/smart-solar-tracker.jpg" alt="Solar Cleaning Robots" />
            </Col>
            <Col xs={24} sm={12}>
              <div className="flexbox colalign left">

                <div className="wrapper-full">
                  <div className="header-title black">
                    <h2 >Smart Solar Tracker</h2>
                    <p>Increasing Energy Generation by Up to 40%</p>
                  </div>
                  <ul class="details-list gray">
                    <li>Single- or dual-axis systems automatically align panels with the sun’s movement.</li>
                    <li>Trackers can improve total energy production by 25–40%.</li>
                    <li>One large-scale solar farm saw a 30% power increase and cut its payback period by two years.</li>

                  </ul>
                </div>
                <Link type="primary" size="large" onClick={scrollToStayConnected}  className="morebutton" >
                get a quote <i className="arrow-right"></i>
                </Link>
              </div>


            </Col>

          </Row>
        </div>
      </div>

      <div className="blog-left g-bb-white defaultPadding">
        <div className="k2s-green-container">
          <Row gutter={16} className="pdt50">
            <Col xs={24} sm={12}>
              <div className="flexbox colalign right">

                <div className="wrapper-full">
                  <div className="header-title black">
                    <h2 >Solar Battery Storage</h2>
                    <p>Harnessing Energy Beyond Daylight Hours</p>
                  </div>
                  <ul class="details-list gray">
                    <li>Solar panels generate power only during the day, yet energy demand is constant.</li>
                    <li>Lithium-Ion Batteries (5–30 kWh) for homes and small businesses</li>
                    <li>Flow Batteries (50–500 kWh) for large-scale commercial and industrial needs</li>

                  </ul>
                </div>
                <Link type="primary" size="large" onClick={scrollToStayConnected}  className="morebutton" >
                get a quote <i className="arrow-right"></i>
                </Link>

              </div>


            </Col>
            <Col xs={24} sm={12} className="imageWrapper">
              <img src="images/solar-battery-storage.jpg" alt="Solar Cleaning Robots" />
            </Col>
          </Row>
        </div>
      </div>

      <div className="blog-left g-bb-gray defaultPadding">
        <div className="k2s-green-container">
          <Row gutter={16} className="pdt50">
            <Col xs={24} sm={12} className="imageWrapper">

              <img src="images/ai-powered-energy-management.jpg" alt="Solar Cleaning Robots" />
            </Col>
            <Col xs={24} sm={12}>
              <div className="flexbox colalign left">
                <div className="wrapper-full">
                  <div className="header-title black">
                    <h2 >AI-Powered Energy Management</h2>
                    <p>Increasing Energy Generation by Up to 40%</p>
                  </div>
                  <ul class="details-list gray">
                    <li>Live energy analytics, predictive load balancing, and IoT integration.</li>
                    <li>A smart home reduced its electricity costs by 35% by leveraging AI-based forecasting and usage scheduling.</li>
                   </ul>
                </div>
                <Link type="primary" size="large" onClick={scrollToStayConnected}  className="morebutton" >
                get a quote <i className="arrow-right"></i>
                </Link>
              </div>


            </Col>

          </Row>
          <div className="k2s-green-container brd mt100">
          <Row gutter={16} className="pdt50 ">
            <Col
              xs={{ span: 24, offset: 0 }}  // No offset on extra small screens
              md={{ span: 12, offset: 6 }}
            >
              <div className="header-title center mt100">
                <h2 className="title-center">Why Invest in Solar Accessories & Upgrades</h2>
              </div>
            </Col>
          </Row>
          <Row gutter={16} className="pdt50 mt60">

            {accessories_upgrades.map((point) => (
              <Col className="gutter-row coltype" xs={24} sm={12} md={6}>
                <div className="columnStyle2 s2" data-aos="fade-up"
                  data-aos-anchor-placement="top-center">
                  <div className="counter">{point.key}</div>
                  <p>{point.text}</p>
                </div>
              </Col>
            ))}


          </Row>
          </div>
        </div>
      </div>

      <Insights />
      {/* <StayConnected /> */}
      <ModalComponent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>


  );
};

export default Solar;
