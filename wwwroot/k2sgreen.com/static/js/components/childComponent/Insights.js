import React from "react";
import {
    Link
} from "react-router-dom"
import articleData from "../../assets/data/articleData";

const Insights = () => {
    return ( <
        div className = "insights" >
        <
        div className = "k2s-green-container" >
        <
        div className = "header-title" >
        <
        h3 className = "title-center" > Insights < /h3> <
        Link to = "/news"
        onClick = {
            () => window.scrollTo(0, 0)
        }
        type = "primary"
        size = "large"
        className = "morebutton" >
        View all < i className = "arrow-right" > < /i> <
        /Link> <
        /div> <
        div className = "flexbox mt70"
        data - aos = "fade-up" >
        <
        div className = "insight-item-left" >
        <
        div className = "insight-item-left-wrapper" >
        <
        span className = "date" > 15 th Feb, 2025 < /span> <
        h4 className = "full" > < Link to = {
            `/news/${articleData[0].slug}`
        } > How Wind Turbines Convert Wind into Electricity < /Link></h
        4 >
        <
        p >
        Lorem ipsum dolor sit amet consectetur.Vitae gravida tempus mi donec sed vel etiam quam nunc.Cursus mi neque suspendisse eu lacus tincidunt interdum elit.Laoreet viverra sed donec velit. <
        /p> <
        Link to = {
            `/news/${articleData[0].slug}`
        }
        className = "flexbox readmore" >
        Read More <
        /Link>

        <
        /div> <
        div className = "insight-image" >
        <
        img src = "./images/insight-frame.png"
        alt = "Insight" / >
        <
        /div> <
        /div> <
        div className = "insight-item-right"
        data - aos = "fade-up" >
        <
        div className = "insight-item-left-wrapper" > {
            articleData.slice(0, 3).map((article, index) => ( <
                div key = {
                    article.id
                }
                className = {
                    `insight-news-wrapper ${index < 2 ? "spacer" : ""}`
                } >
                <
                div className = "insight-news-item" >
                <
                span className = "date" > {
                    article.date
                } < /span> <
                h4 > < Link to = {
                    `/news/${article.slug}`
                } > {
                    article.title
                } < /Link></h
                4 >
                <
                div className = "flexbox" >
                <
                Link to = {
                    `/news/${article.slug}`
                }
                className = "readmore" >
                Read More <
                /Link> <
                /div> <
                /div> <
                div className = "insight-image" >
                <
                img src = {
                    article.image
                }
                alt = {
                    article.title
                }
                /> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default Insights;