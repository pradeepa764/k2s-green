import React from "react";

const DataDrivenEnergy = ({
    data
}) => {
    return ( <
        div className = "flexbox-main-wrapper" >

        {
            data.length === 3 ? (
                // 3-Item Layout

                <
                >
                <
                div className = "flex_col_style" >
                <
                div className = "col-section" >
                <
                h4 > {
                    data[0] ? .key
                } < /h4> <
                p > {
                    data[0] ? .text
                } < /p> <
                /div> <
                div className = "col-section" >
                <
                h4 > {
                    data[2] ? .key
                } < /h4>  <
                p > {
                    data[2] ? .text
                } < /p> <
                /div> <
                /div> <
                div className = "flex_col_style" >
                <
                div className = "col-section" >
                <
                h4 > {
                    data[1] ? .key
                } < /h4>  <
                p > {
                    data[1] ? .text
                } < /p> <
                /div> <
                /div> <
                />
            ) : data.length === 4 ? (
                // 4-Item Layout (2x2 Grid)
                <
                >
                <
                div className = "flex_col_style" >
                <
                div className = "col-section" >
                <
                h4 > {
                    data[0] ? .key
                } < /h4>  <
                p > {
                    data[0] ? .text
                } < /p> <
                /div> <
                div className = "col-section" >
                <
                h4 > {
                    data[2] ? .key
                } < /h4>  <
                p > {
                    data[2] ? .text
                } < /p> <
                /div> <
                /div> <
                div className = "flex_col_style" >
                <
                div className = "col-section" > < h4 > {
                    data[1] ? .key
                } < /h4>  <
                p > {
                    data[1] ? .text
                } < /p> <
                /div> <
                div className = "col-section" >
                <
                h4 > {
                    data[3] ? .key
                } < /h4>  <
                p > {
                    data[3] ? .text
                } < /p> <
                /div> <
                /div> <
                />
            ) : (
                // Fallback for other cases
                <
                div className = "col-section" > Invalid data length < /div>
            )
        } <
        /div>
    );
};

export default DataDrivenEnergy;