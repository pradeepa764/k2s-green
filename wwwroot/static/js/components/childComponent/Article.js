import React from "react";
import {
    Row,
    Col
} from "antd";
import {
    useNavigate,
    Link
} from "react-router-dom";

const articleData = [{
        id: 1,
        image: "/images/new-article1.jpg",
        date: "15th Feb, 2025",
        slug: "future-of-renewable-energy",
        title: "Future of Renewable Energy",
        content: "Experts discuss the future of renewable energy and how emerging technologies will shape sustainability.",
    },
    {
        id: 2,
        image: "/images/new-article2.jpg",
        date: "16th Feb, 2025",
        slug: "solar-panel-efficiency",
        title: "Solar Panel Efficiency",
        content: "New research reveals how AI can improve solar panel efficiency by optimizing energy conversion.",
    },
    {
        id: 3,
        image: "/images/new-article3.jpg",
        date: "17th Feb, 2025",
        slug: "green-hydrogen-net-zero",
        title: "Green Hydrogen’s Role in Net Zero",
        content: "How green hydrogen can support decarbonization efforts and reduce industrial emissions.",
    },
    {
        id: 4,
        image: "/images/new-article1.jpg",
        date: "18th Feb, 2025",
        slug: "future-of-renewable-energy",
        title: "Future of Renewable Energy",
        content: "Experts discuss the future of renewable energy and how emerging technologies will shape sustainability.",
    },
    {
        id: 5,
        image: "/images/new-article2.jpg",
        date: "19th Feb, 2025",
        slug: "solar-panel-efficiency",
        title: "Solar Panel Efficiency",
        content: "New research reveals how AI can improve solar panel efficiency by optimizing energy conversion.",
    },
    {
        id: 6,
        image: "/images/new-article3.jpg",
        date: "20th Feb, 2025",
        slug: "green-hydrogen-net-zero",
        title: "Green Hydrogen’s Role in Net Zero",
        content: "How green hydrogen can support decarbonization efforts and reduce industrial emissions.",
    },
];

const Article = () => {
    const navigate = useNavigate(); // ✅ Correctly defining navigate

    return ( <
        >
        <
        Row gutter = {
            [16, 16]
        } > {
            articleData.map((insight) => ( <
                Col key = {
                    insight.id
                }
                className = "gutter-row coltype"
                xs = {
                    24
                }
                md = {
                    12
                }
                lg = {
                    12
                } >
                <
                div className = "insight-card" > { /* Image Section */ } <
                div className = "image-container" >
                <
                img src = {
                    insight.image
                }
                alt = {
                    insight.title
                }
                /> <
                /div>

                { /* Content Section */ } <
                div className = "header-title" >
                <
                div className = "date-overlay" > {
                    insight.date
                } < /div>

                { /* Clickable Title */ } <
                h5 className = "title" >
                <
                Link to = {
                    `/insights/${insight.slug}`
                }
                style = {
                    {
                        textDecoration: "none",
                        color: "#007bff"
                    }
                } > {
                    insight.title
                } <
                /Link> <
                /h5>

                <
                div className = "content" > {
                    insight.content.substring(0, 100)
                }...
                <
                /div>

                { /* Read More Button (✅ Fixed reference to `insight.slug`) */ } <
                button onClick = {
                    () => navigate(`/insights/${insight.slug}`)
                }
                className = "morebutton btn" >
                Read More < i className = "arrow-right pink" > < /i> <
                /button> <
                /div> <
                /div> <
                /Col>
            ))
        } <
        /Row>

        { /* Load More Button */ } <
        div className = "morebutton loadmore" >
        Load More <
        /div> <
        />
    );
};

export default Article;