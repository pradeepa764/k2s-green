import React from "react";
import {
    Row,
    Col
} from "antd";
import {
    Link
} from "react-router-dom";

const newsData = [{
        id: 1,
        slug: "future-of-renewable-energy",
        image: "/images/new-article1.jpg",
        date: "13th Feb, 2025",
        title: "Future of Renewable Energy",
        content: "Experts discuss the future of renewable energy and how emerging technologies will shape sustainability.",
    },
    {
        id: 2,
        slug: "solar-panel-efficiency",
        image: "/images/new-article3.jpg",
        date: "14th Feb, 2025",
        title: "Solar Panel Efficiency",
        content: "New research reveals how AI can improve solar panel efficiency by optimizing energy conversion.",
    },
    {
        id: 3,
        slug: "green-hydrogen-net-zero",
        image: "/images/new-article3.jpg",
        date: "15th Feb, 2025",
        title: "Green Hydrogen’s Role in Net Zero",
        content: "How green hydrogen can support decarbonization efforts and reduce industrial emissions.",
    },
];

const NewsComponent = () => {


    return ( <
        >
        <
        Row gutter = {
            16
        } > {
            newsData.map((news) => ( <
                Col key = {
                    news.id
                }
                className = "gutter-row coltype"
                xs = {
                    24
                }
                md = {
                    12
                } >
                <
                div className = "insight-card" >
                <
                div className = "image-container" >
                <
                img src = {
                    news.image
                }
                alt = {
                    news.title
                }
                /> <
                /div> <
                div className = "header-title" >
                <
                div className = "date-overlay" > {
                    news.date
                } < /div>


                <
                h5 className = "title" > < Link to = {
                    `/news/${news.slug}`
                } > {
                    news.title
                } < /Link> </h
                5 >
                <
                div className = "content" > {
                    news.content.substring(0, 100)
                }... < /div> 

                { /* Clickable Read More Button */ } <
                Link to = {
                    `/news/${news.slug}`
                }
                className = "morebutton btn" >
                Read More < i className = "arrow-right pink" > < /i> <
                /Link>

                <
                /div> <
                /div> <
                /Col>
            ))
        } <
        /Row>

        <
        div className = "morebutton loadmore" >
        Load More <
        /div> <
        />
    );
};

export default NewsComponent;