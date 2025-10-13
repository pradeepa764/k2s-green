import React, {
    useState
} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// Custom Prev Arrow
const PrevArrow = ({
    onClick
}) => ( <
    div className = "custom-arrow custom-prev"
    onClick = {
        onClick
    } >
    <
    img src = "images/prev-arrow.png"
    alt = "Previous" / >
    <
    /div>
);

// Custom Next Arrow
const NextArrow = ({
    onClick
}) => ( <
    div className = "custom-arrow custom-next"
    onClick = {
        onClick
    } >
    <
    img src = "images/next-arrow.png"
    alt = "Next" / >
    <
    /div>
);


const SwiperSlider = ({
    slides
}) => {
    const [currentSlide, setCurrentSlide] = useState(1);

    if (!slides || slides.length === 0) {
        return <p > No slides available < /p>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        prevArrow: < PrevArrow / > ,
        nextArrow: < NextArrow / > ,
        customPaging: (i) => < div className = "custom-dot" > < /div>, / / Custom dot styling
        appendDots: (dots) => ( <
            div className = "slick-dots-container" >
            <
            ul > {
                dots
            } < /ul> <
            /div>
        ),
        afterChange: (index) => setCurrentSlide(index + 1), // Update slide counter
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return ( <
        div className = "slick-slider-container" >
        <
        Slider { ...settings
        } > {
            slides.map((slide, index) => (

                <
                div key = {
                    index
                }
                className = "header-title auto" >
                <
                h3 > {
                    slide.h3
                } < /h3> <
                p > {
                    slide.p
                } < /p> <
                /div> 

            ))
        } <
        /Slider> <
        div className = "slide-counter" > {
            currentSlide
        }
        / {slides.length} <
        /div> <
        /div>
    );
};

export default SwiperSlider;