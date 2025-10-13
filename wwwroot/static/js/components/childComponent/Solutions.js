import React from "react";
import {
    Link
} from "react-router-dom";

const Solutions = () => {
    return ( <
        div className = "solutions" >
        <
        div className = "k2s-green-container defaultPadding" >
        <
        div className = "header-title" >
        <
        h3 className = "title-center" > Our Solutions < /h3> <
        /div> <
        div className = "type-of-solutions" >


        <
        Link to = "/wind"
        className = "type-of-solutions-item"
        data - aos = "zoom-in" >
        <
        div class = "flip-card-inner" >
        <
        div class = "flip-card-front" >
        <
        div className = "counter" > 01 < /div> <
        div className = "wind" > < /div> <
        h5 > Wind Energy < /h5>

        <
        /div> <
        div class = "flip-card-back" >
        <
        div className = "counter" > 01 < /div> <
        div className = "wind" > < /div> <
        h5 > Wind Energy < /h5> <
        p > Advanced vertical and horizontal turbines engineered
        for diverse environments. < /p> <
        a type = "primary"
        size = "large"
        href = "/wind"
        className = "morebutton "
        style = {
            {
                zIndex: "999",
                position: "relative"
            }
        } > Learn More < i className = "arrow-right" > < /i> </a >
        <
        /div> <
        /div> <
        /Link> 






        <
        Link to = "/solar"
        className = "type-of-solutions-item"
        data - aos = "zoom-in" >
        <
        div class = "flip-card-inner" >
        <
        div class = "flip-card-front" >
        <
        div className = "counter" > 02 < /div> <
        div className = "solar" > < /div> <
        h5 > Solar Energy < /h5>

        <
        /div> <
        div class = "flip-card-back" >
        <
        div className = "counter" > 02 < /div> <
        div className = "solar" > < /div> <
        h5 > Solar Energy < /h5> <
        p > Scalable solar installations
        for residential and commercial applications, paired with state - of -the - art battery storage. < /p> <
        a type = "primary"
        size = "large"
        href = "/solar"
        className = "morebutton " > Learn More < i className = "arrow-right" > < /i> </a >
        <
        /div> <
        /div> <
        /Link> <
        Link to = "/hydrogen"
        className = "type-of-solutions-item"
        data - aos = "zoom-in" >
        <
        div class = "flip-card-inner" >
        <
        div class = "flip-card-front" >
        <
        div className = "counter" > 03 < /div> <
        div className = "hydrogen" > < /div> <
        h5 > Hydrogen Energy < /h5>

        <
        /div> <
        div class = "flip-card-back" >
        <
        div className = "counter" > 03 < /div> <
        div className = "hydrogen" > < /div> <
        h5 > Hydrogen Energy < /h5> <
        p > Scalable residential and commercial solar installations with battery storage. < /p> <
        Link type = "primary"
        size = "large"
        to = "/hydrogen"
        className = "morebutton " > Learn More < i className = "arrow-right" > < /i> </Link >
        <
        /div> <
        /div>

        <
        /Link> <
        /div>  <
        /div> <
        /div>
    );
};

export default Solutions;