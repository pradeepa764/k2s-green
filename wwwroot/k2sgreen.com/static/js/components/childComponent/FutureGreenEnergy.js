import React from "react";
import {
    Link
} from "react-router-dom"

const FutureGreenEnergy = () => {
    return ( <
        div className = "future-green-energy" >
        <
        div className = "k2s-green-container defaultPadding_fge" >
        <
        div className = "future-green-energy-wrapper" >
        <
        div className = "header-title white" > < h2 > The future of energy is here < /h2></div >
        <
        div className = "future-energy-text-right" >
        <
        p >
        Our vision is to lead the global shift toward sustainable energy— where innovation, transparency, and cultural sensitivity converge to power a cleaner future. <
        /p> <
        Link to = "/solutions"
        type = "primary"
        size = "large"
        className = "morebutton" >
        Explore Our Solutions < i className = "arrow-right" > < /i> <
        /Link> <
        /div> <
        /div>

        <
        div className = "image-wrapper" >
        <
        div className = "newImg" > < img src = "images/wind-mil-with-img.png"
        className = "windMil"
        alt = "Landing"
        data - aos = "fade-up"
        data - aos - duration = "1000" / > < /div> <
        img src = "images/wind-mil-bg.jpg"
        className = "windMilbase"
        alt = "Landing" / >
        <
        /div> <
        /div> <
        /div>
    );
};

export default FutureGreenEnergy;