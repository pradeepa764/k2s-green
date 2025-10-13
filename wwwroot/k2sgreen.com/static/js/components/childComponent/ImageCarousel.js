import React, {
    useRef
} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [{
        img: "images/ccet.jpg",
        width: 400,
        imageAlt: "Commercial & Corporate Energy Transition "
    },
    {
        img: "images/hi.jpg",
        width: 500,
        imageAlt: "Heavy Industries"
    },
    {
        img: "images/lt.jpg",
        width: 300,
        imageAlt: "Logistics & Transportation"
    },
    {
        img: "images/rem.jpg",
        width: 500,
        imageAlt: "Industries We Serve "
    },

];
const ImageSlider = () => {
    const sliderRef = useRef(null); // Reference for slider control

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: Math.min(3, images.length),
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(2, images.length),
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return ( <
        div className = "adaptive-container" > { /* ✅ Assigning ref safely */ } <
        Slider ref = {
            (slider) => (sliderRef.current = slider)
        } { ...settings
        } > {
            images.map((image, index) => ( <
                div key = {
                    index
                }
                className = "slideContainer"
                style = {
                    {
                        width: image.width
                    }
                } >
                <
                div className = "slideWrapper"
                style = {
                    {
                        backgroundImage: `url(${image.img})`,
                    }
                } >
                <
                div className = "alt-tag" > {
                    image.imageAlt
                } < /div> <
                /div> <
                /div>
            ))
        } <
        /Slider>

        { /* ✅ Custom Navigation Buttons */ } <
        div className = "custom-nav-buttons" >
        <
        button className = "custom-prev"
        onClick = {
            () => sliderRef.current && sliderRef.current.slickPrev()
        } // ✅ Prevent null error
        >

        <
        /button> <
        button className = "custom-next"
        onClick = {
            () => sliderRef.current && sliderRef.current.slickNext()
        } // ✅ Prevent null error
        >

        <
        /button> <
        /div> <
        /div>
    );
};

export default ImageSlider;