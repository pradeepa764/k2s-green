import React, {
    useState
} from "react";
import {
    Link
} from "react-router-dom";
import CleanEnergy from "../components/childComponent/CleanEnergy";
import WhyGreen from "../components/childComponent/WhyGreen";
import FutureGreenEnergy from "../components/childComponent/FutureGreenEnergy";
import SmartApproach from "../components/childComponent/SmartApproach";
import Solutions from "../components/childComponent/Solutions";
import Insights from "../components/childComponent/Insights";

import ModalComponent from "../components/childComponent/ModalComponent";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 800,
    once: true
});

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);



    return ( <
        >
        <
        div className = "landing-screen defaultPadding" >
        <
        div className = "k2s-green-container" >
        <
        div className = "header-title" >
        <
        div className = "title-left"
        data - aos = "fade-left" > A New Era of < /div> <
        div className = "title-right"
        data - aos = "fade-right" > Clean Energy < /div> <
        /div> <
        div className = "moreabout" >
        <
        p > We help businesses and homeowners
        switch to wind, solar, and hydrogen energy with visibility, transparency, and control. < /p>

        <
        Link to = "/contact"
        className = "morebutton" >
        Learn More < i className = "arrow-right" > < /i> <
        /Link>

        <
        /div> <
        div className = "image-wrapper"
        data - aos = "fade-up" >
        <
        video autoPlay loop muted >
        <
        source src = "video/windmill-video.mp4"
        type = "video/mp4" / >
        Your browser does not support the video tag. <
        /video> { /* <img src="images/landing-img.png" alt="Landing" /> */ } <
        /div> <
        /div> <
        /div>

        <
        CleanEnergy / >
        <
        WhyGreen / >
        <
        FutureGreenEnergy / >
        <
        SmartApproach pagetype = "home" / >
        <
        Solutions / >
        <
        Insights / > { /* <StayConnected /> */ }

        { /* ✅ Fixed prop names */ } <
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

export default Home;