import React from "react";
import {
    Row,
    Col
} from "antd";

const steps = [{
        title: "Step 1",
        description: "Assess your current energy setup, challenges, and sustainability goals. Review energy consumption patterns, costs, and ESG commitments.",
        header: "Discovery Session (30 Minutes)"
    },
    {
        title: "Step 2",
        description: "Conduct a site feasibility study for wind, solar, and hydrogen systems. Evaluate energy efficiency opportunities and carbon credit potential.",
        header: "Technical Assessment (60 Minutes)"
    },
    {
        title: "Step 3",
        description: "Develop a clear roadmap for installation, integration, and ongoing monitoring. Provide a cost-benefit analysis with ROI forecasting and compliance insights.",
        header: "Implementation Strategy & Action Plan"
    },

];

const StaticStepper = () => {
        return ( <
            div className = "stepper-container" >
            <
            Row justify = "center"
            align = "middle"
            className = "stepper-row" > {
                steps.map((step, index) => ( <
                        React.Fragment key = {
                            index
                        } >
                        <
                        Col xs = {
                            24
                        }
                        sm = {
                            12
                        }
                        md = {
                            8
                        }
                        lg = {
                            4
                        }
                        className = "step-item" > { /* Step Circle */ } <
                        div className = "step-circle-container" > {
                            index > 0 && < div className = "dashline" > < /div>}  <
                            div className = "step-circle" > {
                                step.title
                            } < /div> <
                            /div>

                            { /* Step Text */ } <
                            div className = "header-title" >
                            <
                            h5 > {
                                step.header
                            } < /h5> <
                            p className = "step-description" > {
                                step.description
                            } < /p> <
                            /div>

                            <
                            /Col> <
                            /React.Fragment>
                        ))
                } <
                /Row> <
                /div>
            );
        };

        export default StaticStepper;