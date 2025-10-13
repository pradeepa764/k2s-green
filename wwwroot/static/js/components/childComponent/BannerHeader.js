import React from "react";

const BannerHeader = ({
    title,
    highlight,
    image,
    className,
    reverse,
    full,
    altTag,
    type
}) => {
    return type === "blog" ? ( <
        div >
        <
        div className = "header-title center marginHalf"
        data - aos = "fade-up" >
        <
        h1 className = {
            `${className} ${full ? "full" : ""}`
        } > {
            reverse ? ( <
                >
                <
                span style = {
                    {
                        color: "#cb0969"
                    }
                } > {
                    title
                } < /span> <
                />
            ) : ( <
                > {
                    title
                } <
                />
            )
        } <
        /h1> <
        /div>

        {
            image && ( <
                div className = "image-wrapper"
                data - aos = "fade-down" >
                <
                img src = {
                    image
                }
                alt = {
                    altTag
                }
                /> <
                /div>
            )
        } <
        /div>
    ) : ( <
        div >
        <
        div className = "header-title center"
        data - aos = "fade-up" >
        <
        h1 className = {
            `${className} ${full ? "full" : ""}`
        } > {
            reverse ? ( <
                >
                <
                span style = {
                    {
                        color: "#cb0969"
                    }
                } > {
                    title
                } < /span> {highlight} <
                />
            ) : ( <
                > {
                    title
                } < span style = {
                    {
                        color: "#cb0969"
                    }
                } > {
                    highlight
                } < /span> <
                />
            )
        } <
        /h1> <
        /div>

        {
            image && ( <
                div className = "image-wrapper"
                data - aos = "fade-down" >
                <
                img src = {
                    image
                }
                alt = {
                    altTag
                }
                /> <
                /div>
            )
        } <
        /div>
    );
};

export default BannerHeader;