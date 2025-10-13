import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const CustomPrevArrow = ({
    onClick
}) => ( <
    button className = "custom-arrow prev-arrow"
    onClick = {
        onClick
    } > < /button>
);

const CustomNextArrow = ({
    onClick
}) => ( <
    button className = "custom-arrow next-arrow"
    onClick = {
        onClick
    } > < /button>
);

const SlickSlider = ({
    slides
}) => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // ✅ Auto-scroll
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: < CustomPrevArrow / > ,
        nextArrow: < CustomNextArrow / > ,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 569,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true,
                },
            },
        ],
    };

    return (

        <
        Slider { ...settings
        }
        className = "carousel-lists" > {
            slides.map((slide, index) => ( <
                article class = "carousel-item"
                key = {
                    index
                } >
                <
                div className = "img-wrapper" >
                <
                img src = {
                    slide.image
                }
                alt = {
                    slide.image
                }
                /> <
                /div> <
                p className = "f32" > {
                    slide.title
                } < /p> <
                /article>
            ))
        }


        <
        /Slider>

    );
};

export default SlickSlider;