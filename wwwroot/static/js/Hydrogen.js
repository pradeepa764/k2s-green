import React,{useState} from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

import BannerHeader from "../components/childComponent/BannerHeader";
import Insights from "../components/childComponent/Insights";

import ModalComponent from "../components/childComponent/ModalComponent";
import ImageCarousel from "../components/childComponent/ImageCarousel";
import CustomTabs from "../components/childComponent/customTab";


const Hydrogen = () => {

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

  const revolutionizing = [
    { key: "Resilient & Scalable", text: "Ideal for grid-independent operations and heavy industry" },
    { key: "Net-Zero Ready", text: "Produces zero-emissions power when used in fuel cells" },
    { key: "Multi-Purpose", text: "Suitable for power generation, industrial processes, and hydrogen mobility" },
    
  ];
  const key_hydrogen_solutions = [
    { key: "Hydrogen Electrolyzers", text: "Onsite production using renewable energy" },
    { key: "Hydrogen Fuel Cells", text: "Converts hydrogen into clean, on-demand electricity" },
    { key: "Hydrogen Storage", text: "Safe, scalable solutions for commercial and industrial needs" },
    { key: "Hydrogen Infrastructure", text: "Refueling stations and mobility-ready systems" },
    
  ];
  const bannerPoints1 = [
    { key: "Exclusive Technology Access", text: "From small businesses to mega industrial sites" },
    { key: "Comprehensive Solutions", text: "From small businesses to mega industrial sites" },
    { key: "End-to-End Support", text: "Feasibility, integration, and maintenance" },
    { key: "ESG & Carbon Neutrality", text: "Position your business for net-zero goals and green financing" }
  ];

    return (
        <>
            <div className=" landing-screen hydro defaultPadding">
                <div className="k2s-green-container inner">
                    <BannerHeader
                        title="Hydrogen"
                        highlight="Energy"
                        image="images/hydrogen_energy_banner.jpg"
                    />
                    <Row gutter={16} className="pdt50">
                        <Col className="gutter-row coltype" 
                        xs={{ span: 24, offset: 0 }}  // No offset on extra small screens
                        md={{ span: 14, offset: 5 }}
                        >
                                <div className="header-title black center">
                                    <h2>Revolutionizing Clean Energy with K2S Green</h2>
                                    <p className="lightblack">Hydrogen – The Future of Energy, Available Today. As the energy sector rapidly transforms, hydrogen has emerged as a crucial driver of clean power, long-term storage, and industrial decarbonization. While solar and wind have made significant strides, hydrogen’s ability to store and dispatch energy efficiently makes it the “missing piece” of the renewable puzzle.</p>
                                </div>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} className="pdt50">
          {revolutionizing.map((point) => (
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
            
            <div className="blog-left g-bb-white defaultPadding">
              <div className="k2s-green-container">
              <Row gutter={16} className="pdt50">
                <Col xs={24} sm={12}>
                  <div className="flexbox colalign right">
                  
                  <div className="wrapper-full">
                  <div className="header-title black">
                    <h2>The K2S Green Hydrogen Advantage</h2>
                    <p>Hydrogen’s true potential lies in the technology that powers its production, storage, and usage. At K2S Green, we offer turnkey hydrogen systems—combining best-in-class electrolyzers, fuel cells, and storage infrastructure—to help you decarbonize operations, optimize power management, and meet ESG targets.</p>
                  </div>
                
                  </div>
                <Link type="primary" size="large" onClick={scrollToStayConnected}  className="morebutton" >
                               get a quote <i className="arrow-right"></i>
                               </Link>

                  </div>
                  
           
                </Col>
                <Col xs={24} sm={12}>
                  <img src="images/blog-img.jpg" alt="Solar Cleaning Robots" />
                </Col>
              </Row>
              </div>
            </div>
                   
            <div className="blog-left g-bb-gray defaultPadding">
              <div className="k2s-green-container">
                <Row>
                  <Col xs={24} md={{ span: 12, offset: 6 }}>
                  <div className="header-title black">
                    <h2 >Key Hydrogen Solutions</h2>
                   
                  </div>
               
                  </Col>
                </Row>
                 
                  <Row gutter={[16,16]}  className="pdt50">
                  {key_hydrogen_solutions.map((point) => (
                    <Col className="gutter-row" key={point.key} xs={24} sm={12} md={6}>
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
                  <div className="k2s-green-container ">
                      <div className="header-title black center">
                        <h2 >Industries We Serve</h2>
                      </div>
                  </div>
                 <ImageCarousel /> 
            </div>
           <div className="energy_solutions defaultPadding g-bb-blue">
                  <div className="k2s-green-container alltab white ">
                      <CustomTabs selected={0} type="hydrogen" />
                  </div>

                  
            </div> 
           <div className="energy_solutions defaultPadding g-bb-gray">
                  <div className="k2s-green-container">
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
            {/* <StayConnected /> */}
      <ModalComponent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

        </>


    );
};

export default Hydrogen;
