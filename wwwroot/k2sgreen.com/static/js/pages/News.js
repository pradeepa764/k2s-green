import React from "react";


import BannerHeader from "../components/childComponent/BannerHeader";
import StayConnected from "../components/childComponent/StayConnected";
// import Article from "../components/childComponent/Article";
// import NewsComponent from "../components/childComponent/News"; // Ensure this exists
import CustomTabs from "../components/childComponent/customTab";

const News = () => {
    // const tabItems = [
    //     {
    //         key: "1",
    //         label: <span className="custom-tab-label">Insights</span>,
    //         children: <Article />,
    //     },
    //     {
    //         key: "2",
    //         label: <span className="custom-tab-label">News</span>,
    //         children: <NewsComponent />,
    //     },
    // ];

    return ( <
        >
        <
        div className = "landing-screen news defaultPadding" >
        <
        div className = "k2s-green-container inner alltab" >
        <
        BannerHeader title = "Insights"
        highlight = "News" / >

        { /* Centered Tabs Container */ } <
        div className = "tabs-container news-article" >
        <
        CustomTabs selected = {
            0
        }
        type = "news" > < /CustomTabs> { /* <Tabs defaultActiveKey="1" centered items={tabItems} /> */ } <
        /div> <
        /div> <
        /div> <
        StayConnected / >
        <
        />
    );
};

export default News;