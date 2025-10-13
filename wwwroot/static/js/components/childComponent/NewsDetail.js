import React from "react";
import {
    useParams
} from "react-router-dom";
import {
    Row,
    Col
} from "antd"
import {
    Link
} from "react-router-dom";
import BannerHeader from "./BannerHeader";
import articleData from "../../assets/data/articleData"; // Import article data

const NewsDetail = () => {
    const {
        slug
    } = useParams();


    // Find the matching article based on slug
    const insightItem = articleData.find((item) => item.slug === slug);

    if (!insightItem) {
        return <h2 > Insight not found < /h2>;
    }

    return ( <
        >
        <
        div className = " landing-screen  about defaultPaddingBanner" >
        <
        div className = "k2s-green-container inner alltab" >
        <
        BannerHeader title = {
            insightItem.title
        }
        image = {
            insightItem.image
        }
        altTag = {
            insightItem.title
        }
        type = "blog"
        full = {
            true
        }
        /> <
        Row gutter = {
            [32, 16]
        }
        className = "pdt50"
        data - aos = "fade-up"
        data - aos - duration = "2000" >
        <
        Col className = "gutter-row coltype"
        xs = {
            24
        }
        md = {
            8
        } >
        <
        div className = "articleInfo" >
        <
        span > Written By < /span> <
        ul className = "articleOwner" >
        <
        li >
        <
        div className = "imgbox" > < img src = "/images/author-img.png"
        alt = "author" / > < /div> <
        div className = "info" >
        <
        span > Arjun Khanna < /span> <
        span > Commercial Director < /span> <
        /div> <
        /li> <
        /ul> <
        ul className = "article-posted" >
        <
        li >
        <
        div className = "info" >
        <
        span > Posted on < /span> <
        span > 28 February, 2025 < /span> <
        /div> <
        /li> <
        /ul> <
        ul className = "article-posted" >
        <
        li >
        <
        div className = "info" >
        <
        span > Share this post < /span> <
        span > 28 February, 2025 < /span> <
        /div> <
        /li> <
        /ul> <
        /div> <
        /Col> <
        Col className = "gutter-row coltype"
        xs = {
            24
        }
        md = {
            16
        } >
        <
        div className = "header-title" >
        <
        h3 > {
            insightItem.title
        } < /h3> <
        div className = "insight-detail-content"
        dangerouslySetInnerHTML = {
            {
                __html: insightItem.content
            }
        }
        /> <
        /div>

        <
        /Col> <
        /Row>

        <
        /div> <
        /div> <
        div >
        <
        div className = "k2s-green-container defaultPadding" >
        <
        div className = "header-title" >
        <
        h3 > Read More < /h3> <
        /div> <
        Row gutter = {
            [16, 16]
        } > {
            articleData.map((article) => ( <
                Col key = {
                    article.id
                }
                xs = {
                    24
                }
                sm = {
                    12
                }
                md = {
                    8
                }
                className = "insightBlock" >
                <
                div className = "blockbox" >
                <
                img src = {
                    article.image
                }
                alt = {
                    article.title
                }
                /> <
                /div> <
                div className = "article-content" >
                <
                p className = "date" > {
                    article.date
                } < /p>

                <
                h3 className = "title" >
                <
                Link to = {
                    `/news/${article.slug}`
                }
                style = {
                    {
                        textDecoration: "none",
                        color: "#007bff"
                    }
                } > {
                    article.title
                } <
                /Link> <
                /h3>

                <
                p className = "content"
                dangerouslySetInnerHTML = {
                    {
                        __html: article.content.substring(0, 100) + "..."
                    }
                } > < /p>

                <
                Link to = {
                    `/news/${article.slug}`
                }
                className = "read-more" >
                Read More→ <
                /Link> <
                /div>

                <
                /Col>
            ))
        } <
        /Row> <
        /div> <
        /div> <
        />
    );
};

export default NewsDetail;