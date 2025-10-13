import React, {
    useState
} from "react";
import {
    Link
} from "react-router-dom";
import {
    Row,
    Col,
    Collapse
} from "antd";
import {
    MinusOutlined,
    PlusOutlined
} from "@ant-design/icons";
import Article from "./Article";
import NewsComponent from "./News";

// Wind Energy Data

const windDataVerticle = [{
        key: "1",
        title: "1 kW Vertical Wind Turbine",
        image: "/video/wind-v-energy1kw.webm",
        dailyOutput: "~5–6 kWh",
        keyBenefits: [
            "Compact for rooftops or tight spaces",
            "Ultra-quiet operation",
            "All-weather performance",
        ],
        idealFor: "Small homes, remote cabins, off-grid setups",
        useCase: "A rural homeowner cut grid reliance by 30% in the first year.",
    },
    {
        key: "2",
        title: "2.5 kW Vertical Wind Turbine",
        image: "/video/wind-v-energy2.5kw.webm",
        dailyOutput: "~8–10 kWh",
        keyBenefits: [
            "Cost-effective balance of size and output",
            "Suited for moderate wind conditions",
            "Great alternative or complement to sola",
        ],
        idealFor: "Small businesses, agricultural projects, community energy programs",
        useCase: "A dairy farm combined 2 kW turbines with solar, reducing electricity costs by 40%.",
    },
    {
        key: "3",
        title: "3 kW Vertical Wind Turbine",
        image: "/video/wind-v-energy2.5kw.webm",
        dailyOutput: "~12–15 kWh",
        keyBenefits: [
            "Higher production for off-grid systems",
            "Works seamlessly with battery storage and solar",
            "Reliable in low-to-moderate wind speeds",
        ],
        idealFor: "Large homes, workshops, microgrid projects",
        useCase: "A manufacturing facility saved $10,000 annually on electricity.",
    },
    {
        key: "4",
        title: "10 kW & 20 kW Vertical Wind Turbines",
        image: "/video/wind-v-energy10kw.webm",
        dailyOutput: "~50–80 kWh",
        keyBenefits: [
            "High-volume energy generation",
            "Integrates with micro-grids and hybrid systems",
            "Significant long-term cost savings and CO2 reductions",
        ],
        idealFor: "Large-scale businesses, industrial plants, renewable energy farms",
        useCase: "A manufacturing facility saved $10,000 annually on electricity.",
    },
];
const windDataHorizontal = [{
    key: "1",
    title: "5 kW Horizontal Wind Turbine",
    dailyOutput: "~25–30 kWh",
    image: "/video/wind-h-energy5kw.webm",
    keyBenefits: [
        "Higher efficiency per turbine",
        "Best for high-wind locations",
        "Can connect to the grid or battery banks",
    ],
    idealFor: "Farms, commercial buildings, remote industrial sites",
    useCase: "A manufacturing plant lowered its grid reliance by 45%.",
}, ];
const windTabs = [{
        key: "tab-1",
        label: "Vertical Axis (VAWT)",
        data: windDataVerticle
    },
    {
        key: "tab-2",
        label: "Horizontal Axis (HAWT)",
        data: windDataHorizontal
    },
];

const hydrogenElectrolyzers = [{
        key: "elec-1",
        title: "PEM Electrolyzer - Model A",
        keyBenefits: [
            "Efficient and emission-free power",
            "Long lifespan and durability",
            "Low maintenance",
        ],
        bestFor: "Small and medium business commercial operations",
    },
    {
        key: "elec-2",
        title: "PEM Electrolyzer - Model B",
        keyBenefits: [
            "High efficiency",
            "Compact size",
            "Renewable energy integration",
        ],
        bestFor: "Industrial applications",
    },
    {
        key: "elec-3",
        title: "PEM Electrolyzer - Model C",
        keyBenefits: [
            "Zero emissions",
            "Scalable production",
            "Advanced safety features",
        ],
        bestFor: "Large-scale hydrogen production",
    },
];

const hydrogenFuel = [{
        key: "fuel-1",
        title: "Hydrogen Fuel Cell - Model X",
        keyBenefits: ["High efficiency", "Low noise operation", "Long lifespan"],
        bestFor: "Backup power solutions",
    },
    {
        key: "fuel-2",
        title: "Hydrogen Fuel Cell - Model Y",
        keyBenefits: [
            "Fast startup time",
            "Durable and reliable",
            "Compact design",
        ],
        bestFor: "Automotive applications",
    },
    {
        key: "fuel-3",
        title: "Hydrogen Fuel Cell - Model Z",
        keyBenefits: ["Zero emissions", "High power density", "Scalable solutions"],
        bestFor: "Portable power solutions",
    },
];

const hydrogenStorage = [{
        key: "storage-1",
        title: "Hydrogen Storage Tank - Type A",
        keyBenefits: ["Safe and efficient", "Long lifespan", "Corrosion-resistant"],
        bestFor: "Stationary hydrogen storage",
    },
    {
        key: "storage-2",
        title: "Hydrogen Storage Tank - Type B",
        keyBenefits: [
            "Lightweight design",
            "High pressure tolerance",
            "Compact storage",
        ],
        bestFor: "Mobile hydrogen storage",
    },
    {
        key: "storage-3",
        title: "Hydrogen Storage Tank - Type C",
        keyBenefits: [
            "Cost-effective solution",
            "Scalable capacity",
            "High safety standards",
        ],
        bestFor: "Industrial hydrogen storage",
    },
];

const hydrogenTabs = [{
        key: "tab-1",
        label: "Hydrogen Electrolyzers",
        data: hydrogenElectrolyzers,
        image: "/images/hydrogen_electrolyzers.jpg",
        size: "500X500",
    },
    {
        key: "tab-2",
        label: "Hydrogen Fuel Cells",
        data: hydrogenFuel,
        image: "/images/hydrogen_fuel_cells.jpg",
        size: "500X500",
    },
    {
        key: "tab-3",
        label: "Hydrogen Storage Solutions",
        data: hydrogenStorage,
        image: "/images/hydrogen_storage_solutions.jpg",
        size: "500X500",
    },
];

const optimizerTabs = [{
        key: "op1",
        label: "Data Collection",
        content: ( <
            Row gutter = {
                16
            }
            className = "our_consultation" >
            <
            Col xs = {
                24
            }
            md = {
                12
            }
            className = "textWrapper" >
            <
            div className = "flexbox column" >
            <
            div className = "header-title" >
            <
            h3 > Data Collection < /h3> <
            div className = "listing" >
            <
            ul className = "details-list gray" >
            <
            li >
            Real - time tracking of energy production, consumption, and storage. <
            /li> <
            li >
            Supports multiple renewable sources(solar, wind, hydrogen) for complete visibility. <
            /li> <
            /ul> <
            /div> <
            /div> <
            div className = "morebutton consultant" >
            Book a Demo < i className = "arrow-right" > < /i> <
            /div> <
            /div> <
            /Col> <
            Col xs = {
                24
            }
            md = {
                12
            }
            className = "imageWrapper" >
            <
            img src = "/images/data-collection.jpg"
            alt = "Wind Mill" / >
            <
            /Col> <
            /Row>
        ),
    },
    {
        key: "op2",
        label: "AI & BI Analytics",
        content: ( <
            Row gutter = {
                16
            }
            className = "our_consultation" >
            <
            Col xs = {
                24
            }
            md = {
                12
            }
            className = "textWrapper" >
            <
            div className = "flexbox column" >
            <
            div className = "header-title" >
            <
            h3 > AI & BI Analytics < /h3> <
            div className = "listing" >
            <
            ul className = "details-list gray" >
            <
            li >
            Machine learning models forecast energy demand and supply. <
            /li> <
            li >
            Automated efficiency recommendations adjust usage to lower costs. <
            /li> <
            li >
            Advanced BI dashboards provide detailed reporting, trend analysis, and KPI tracking. <
            /li> <
            /ul> <
            /div> <
            /div> <
            div className = "morebutton consultant" >
            Book a Demo < i className = "arrow-right" > < /i> <
            /div> <
            /div> <
            /Col> <
            Col xs = {
                24
            }
            md = {
                12
            }
            className = "imageWrapper" >
            <
            img src = "/images/ai-bi-analytics.jpg"
            alt = "Wind Mill" / >
            <
            /Col> <
            /Row>
        ),
    },
    {
        key: "op3",
        label: "Performance Visualization",
        content: ( <
            Row gutter = {
                16
            }
            className = "our_consultation" >
            <
            Col xs = {
                24
            }
            md = {
                12
            }
            className = "textWrapper" >
            <
            div className = "flexbox column" >
            <
            div className = "header-title" >
            <
            h3 > Performance Visualization < /h3> <
            div className = "listing" >
            <
            ul className = "details-list gray" >
            <
            li >
            Customizable dashboards display live power usage, financial ROI, and environmental impact <
            /li> <
            li >
            Both B2B and consumer users can monitor carbon offsets, cost savings, and system reliability <
            /li> <
            /ul> <
            /div> <
            /div> <
            div className = "morebutton consultant" >
            Book a Demo < i className = "arrow-right" > < /i> <
            /div> <
            /div> <
            /Col> <
            Col xs = {
                24
            }
            md = {
                12
            }
            className = "imageWrapper" >
            <
            img src = "/images/performance_isualisation.jpg"
            alt = "Wind Mill" / >
            <
            /Col> <
            /Row>
        ),
    },
];
const bookingConsultation = [{
        key: "1",
        label: "Homeowners & Small Businesses",
        content: ( <
            Row gutter = {
                16
            }
            className = "our_consultation" >
            <
            Col xs = {
                24
            }
            md = {
                12
            }
            className = "textWrapper" >
            <
            div className = "flexbox column" >
            <
            div className = "header-title" >
            <
            h4 className = "black" > Homeowners & Small Businesses < /h4> <
            /div> <
            div className = "listing" >
            <
            ul className = "details-list gray" >
            <
            li >
            Dust, debris, and bird droppings can reduce solar output by 10– 25 % . <
            /li> <
            li >
            AI - powered robots that clean panels autonomously, use minimal water, and adapt to weather changes. <
            /li> <
            li >
            A 500 kW solar farm saved 60 % in labor costs and boosted annual output by 15 % with robotic cleaning. <
            /li> <
            /ul> <
            Link to = "/contact"
            className = "morebutton consultant" >
            Schedule a Consultation < i className = "arrow-right" > < /i> <
            /Link> <
            /div> <
            /div> <
            /Col> <
            Col xs = {
                24
            }
            md = {
                12
            }
            className = "imageWrapper" >
            <
            img src = "/images/homeowners-small-businesses.jpg"
            alt = "homeowners-small-businesses" /
            >
            <
            /Col> <
            /Row>
        ),
    },
    {
        key: "2",
        label: "Commercial & Industrial Clients",
        content: ( <
            Row gutter = {
                16
            }
            className = "our_consultation" >
            <
            Col xs = {
                24
            }
            md = {
                12
            }
            className = "textWrapper" >
            <
            div className = "flexbox column" >
            <
            div className = "header-title" >
            <
            h4 className = "black" > Commercial & Industrial Clients < /h4> <
            /div> <
            div className = "listing" >
            <
            ul className = "details-list gray" >
            <
            li >
            Dust, debris, and bird droppings can reduce solar output by 10– 25 % . <
            /li> <
            li >
            AI - powered robots that clean panels autonomously, use minimal water, and adapt to weather changes. <
            /li> <
            li >
            A 500 kW solar farm saved 60 % in labor costs and boosted annual output by 15 % with robotic cleaning. <
            /li> <
            /ul> <
            Link to = "/contact"
            className = "morebutton consultant" >
            Schedule a Consultation < i className = "arrow-right" > < /i> <
            /Link> <
            /div> <
            /div> <
            /Col> <
            Col xs = {
                24
            }
            md = {
                12
            }
            className = "imageWrapper" >
            <
            img src = "/images/commercial-industrial-clients.jpg"
            alt = "commercial-industrial-clients" /
            >
            <
            /Col> <
            /Row>
        ),
    },
    {
        key: "3",
        label: "Energy Distributors & Resellers",
        content: ( <
            Row gutter = {
                16
            }
            className = "our_consultation" >
            <
            Col xs = {
                24
            }
            md = {
                12
            }
            className = "textWrapper" >
            <
            div className = "flexbox column" >
            <
            div className = "header-title" >
            <
            h4 className = "black" > Energy Distributors & Resellers < /h4> <
            /div> <
            div className = "listing" >
            <
            ul className = "details-list gray" >
            <
            li >
            Dust, debris, and bird droppings can reduce solar output by 10– 25 % . <
            /li> <
            li >
            AI - powered robots that clean panels autonomously, use minimal water, and adapt to weather changes. <
            /li> <
            li >
            A 500 kW solar farm saved 60 % in labor costs and boosted annual output by 15 % with robotic cleaning. <
            /li> <
            /ul> <
            Link to = "/contact"
            className = "morebutton consultant" >
            Schedule a Consultation < i className = "arrow-right" > < /i> <
            /Link> <
            /div> <
            /div> <
            /Col> <
            Col xs = {
                24
            }
            md = {
                12
            }
            className = "imageWrapper" >
            <
            img src = "/images/energy-distributors-resellers.jpg"
            alt = "energy-distributors-resellers" /
            >
            <
            /Col> <
            /Row>
        ),
    },
    {
        key: "4",
        label: "ESG & Sustainability Leaders",
        content: ( <
            Row gutter = {
                16
            }
            className = "our_consultation" >
            <
            Col xs = {
                24
            }
            md = {
                12
            }
            className = "textWrapper" >
            <
            div className = "flexbox column" >
            <
            div className = "header-title" >
            <
            h4 className = "black" > ESG & Sustainability Leaders < /h4> <
            /div> <
            div className = "listing" >
            <
            ul className = "details-list gray" >
            <
            li >
            Dust, debris, and bird droppings can reduce solar output by 10– 25 % . <
            /li> <
            li >
            AI - powered robots that clean panels autonomously, use minimal water, and adapt to weather changes. <
            /li> <
            li >
            A 500 kW solar farm saved 60 % in labor costs and boosted annual output by 15 % with robotic cleaning. <
            /li> <
            /ul> <
            Link to = "/contact"
            className = "morebutton consultant" >
            Schedule a Consultation < i className = "arrow-right" > < /i> <
            /Link> <
            /div> <
            /div> <
            /Col> <
            Col xs = {
                24
            }
            md = {
                12
            }
            className = "imageWrapper" >
            <
            img src = "/images/esg-sustainibility-leaders.jpg"
            alt = "esg-sustainibility-leaders" /
            >
            <
            /Col> <
            /Row>
        ),
    },
];

const aboutTabs = [{
        key: "tab-1",
        label: "Who We Are",
        description: "A technology-first sustainability company, pioneering wind, solar, and hydrogen solutions with AI-driven energy monitoring.",
        image: "images/tab-content1.png",
        size: "800X600",
    },
    {
        key: "tab-2",
        label: "What We Do",
        description: "We help businesses and individuals transition to sustainable energy with data-driven insights, cutting-edge hardware, and carbon credit monetization.",
        image: "images/what-we-do.jpg",
        size: "800X600",
    },
    {
        key: "tab-3",
        label: "Why It Matters",
        description: "Our solutions lower energy costs, increase efficiency, and align with ESG goals, enabling sustainability to fuel economic growth.",
        image: "images/why-It-matters.jpg",
        size: "800X600",
    },
];

const news = [{
        key: "insights",
        label: "Insights",
        data: < Article / >
    },
    {
        key: "news",
        label: "News",
        data: < NewsComponent / >
    },
];

const CustomTabs = ({
    selected = 0,
    type
}) => {
    const [activeTab, setActiveTab] = useState(selected);
    const [activePanelKey, setActivePanelKey] = useState(windTabs[0].data[0].key);

    const currentTabData = windTabs[activeTab].data;
    const currentImage =
        currentTabData.find((item) => item.key === activePanelKey) ? .image ||
        "/images/default-placeholder.png";

    return ( <
        > {
            type === "hydrogen" ? ( <
                >
                <
                div className = "header-title white center" >
                <
                h2 > K2S Green’ s Energy Solutions < /h2> <
                p >
                Choosing the Right Solution: Not all energy solutions are the same.Depending on your location, energy needs, and goals, we offer different types. <
                /p> <
                /div> <
                div className = "k2s-green-container inner tab mt100" >
                <
                div className = {
                    `customTabWrapper ${type}`
                } > { /* Custom Tabs */ } <
                ul className = {
                    `tab-list tablength-${hydrogenTabs.length}`
                } > {
                    hydrogenTabs.map((tab, index) => ( <
                        li key = {
                            tab.key
                        }
                        className = {
                            index === activeTab ? "selected" : ""
                        }
                        onClick = {
                            () => setActiveTab(index)
                        } >
                        {
                            tab.label
                        } <
                        /li>
                    ))
                } <
                /ul> <
                /div> { /* Tab Content */ } <
                div className = "tab-content" >
                <
                Row gutter = {
                    [16, 16]
                } >
                <
                Col xs = {
                    24
                }
                md = {
                    12
                } > { /* Accordion for Wind Data */ } <
                Collapse accordion defaultActiveKey = {
                    ["1"]
                }
                expandIcon = {
                    ({
                        isActive
                    }) =>
                    isActive ? < MinusOutlined / > : < PlusOutlined / >
                }
                className = "hydrogen-accordion" >
                {
                    hydrogenTabs[activeTab].data.map((item) => ( <
                        Collapse.Panel key = {
                            item.key
                        }
                        header = {
                            item.title
                        } >
                        <
                        ul className = "energy-solution-list" >
                        <
                        li >
                        <
                        strong > Key Benefits: < /strong> <
                        ul > {
                            item.keyBenefits.map((benefit, i) => ( <
                                li key = {
                                    i
                                } > {
                                    benefit
                                } < /li>
                            ))
                        } <
                        /ul> <
                        /li> <
                        li >
                        <
                        strong > Ideal For: < /strong> {item.bestFor} <
                        /li> <
                        /ul> <
                        /Collapse.Panel>
                    ))
                } <
                /Collapse> <
                /Col>

                <
                Col xs = {
                    24
                }
                md = {
                    12
                } > { /* Image Section */ } <
                div className = "energySolutonImg-wrapper" >
                <
                img src = {
                    hydrogenTabs[activeTab].image
                }
                alt = {
                    hydrogenTabs[activeTab].label
                }
                style = {
                    {
                        width: "100%"
                    }
                }
                /> <
                /div> <
                /Col> <
                /Row> <
                /div> <
                /div> <
                />
            ) : type === "wind" ? ( <
                >
                <
                div className = "header-title white center" >
                <
                h2 > K2S Green’ s Energy Solutions < /h2> <
                p className = "blue" >
                Choosing the Right Solution: Not all energy solutions are the same.Depending on your location, energy needs, and goals, we offer different types. <
                /p> <
                /div>

                <
                div className = "k2s-green-container inner tab" >
                <
                div className = {
                    `customTabWrapper ${type}`
                } > { /* Custom Tabs */ } <
                ul className = {
                    `tab-list tablength-${windTabs.length}`
                } > {
                    windTabs.map((tab, index) => ( <
                        li key = {
                            tab.key
                        }
                        className = {
                            index === activeTab ? "selected" : ""
                        }
                        onClick = {
                            () => {
                                setActiveTab(index);
                                setActivePanelKey(windTabs[index].data[0].key); // Reset panel key on tab change
                            }
                        } >
                        {
                            tab.label
                        } <
                        /li>
                    ))
                } <
                /ul>

                { /* Tab Content */ } <
                div className = "tab-content" >
                <
                Row gutter = {
                    [16, 16]
                } >
                <
                Col xs = {
                    24
                }
                md = {
                    12
                } >
                <
                Collapse accordion activeKey = {
                    activePanelKey
                }
                onChange = {
                    (key) => {
                        const panelKey = String(key); // Convert to string
                        setActivePanelKey(panelKey);
                    }
                }
                expandIcon = {
                    ({
                        isActive
                    }) =>
                    isActive ? < MinusOutlined / > : < PlusOutlined / >
                }
                className = "wind-accordion" >
                {
                    currentTabData.map((item) => ( <
                        Collapse.Panel key = {
                            item.key
                        }
                        header = {
                            item.title
                        } >
                        <
                        ul className = "energy-solution-list" >
                        <
                        li >
                        <
                        strong > Daily Output: < /strong> {item.dailyOutput} <
                        /li> <
                        li >
                        <
                        strong > Key Benefits: < /strong> <
                        ul > {
                            item.keyBenefits.map((benefit, i) => ( <
                                li key = {
                                    i
                                } > {
                                    benefit
                                } < /li>
                            ))
                        } <
                        /ul> <
                        /li> <
                        li >
                        <
                        strong > Ideal For: < /strong> {item.idealFor} <
                        /li> <
                        li >
                        <
                        strong > Use Case: < /strong> {item.useCase} <
                        /li> <
                        /ul> <
                        /Collapse.Panel>
                    ))
                } <
                /Collapse> <
                /Col>

                <
                Col xs = {
                    24
                }
                md = {
                    12
                } >
                <
                div className = "energySolutonImg-wrapper" > {
                    currentImage.endsWith(".webm") ? ( <
                        video src = {
                            currentImage
                        }
                        autoPlay muted loop playsInline style = {
                            {
                                width: "200%",
                                objectFit: "cover",
                                borderRadius: "8px",
                            }
                        }
                        />
                    ) : ( <
                        img src = {
                            currentImage
                        }
                        alt = "Energy Solution"
                        style = {
                            {
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "8px",
                            }
                        }
                        />
                    )
                } <
                /div> <
                /Col> <
                /Row> <
                /div> <
                /div> <
                /div> <
                />
            ) : type === "optimizer" ? ( <
                >
                <
                div className = "k2s-green-container inner tab" >
                <
                Row >
                <
                Col xs = {
                    24
                }
                md = {
                    {
                        span: 12,
                        offset: 6
                    }
                } >
                <
                div className = "header-title black center" >
                <
                h2 > How K2S Green’ s Smart Energy Dashboard Works < /h2> <
                p className = "full" > {
                    " "
                }
                Our platform seamlessly integrates solar, wind, and hydrogen systems, capturing data via IoT sensors and presenting it in
                a user - friendly dashboard— available anytime through the K2S Green Mobile App(iOS and Android) or a web browser. {
                    " "
                } <
                /p> <
                /div> <
                /Col> <
                /Row> <
                div className = {
                    `customTabWrapper ${type}`
                } >
                <
                ul className = {
                    `tab-list tablength-${optimizerTabs.length}`
                } > {
                    optimizerTabs.map((tab, index) => ( <
                        li key = {
                            tab.key
                        }
                        className = {
                            index === activeTab ? "selected" : ""
                        }
                        onClick = {
                            () => setActiveTab(index)
                        } >
                        {
                            tab.label
                        } <
                        /li>
                    ))
                } <
                /ul> <
                /div> <
                div className = "tab-content" > {
                    optimizerTabs[activeTab].content
                } <
                /div> <
                /div> <
                />
            ) : type === "consultation" ? ( <
                >
                <
                div className = "k2s-green-container inner tab" >
                <
                div className = {
                    `customTabWrapper ${type}`
                } >
                <
                ul className = {
                    `tab-list tablength-${bookingConsultation.length}`
                } >
                {
                    bookingConsultation.map((tab, index) => ( <
                        li key = {
                            tab.key
                        }
                        className = {
                            index === activeTab ? "selected" : ""
                        }
                        onClick = {
                            () => setActiveTab(index)
                        } >
                        {
                            tab.label
                        } <
                        /li>
                    ))
                } <
                /ul> <
                /div> <
                div className = "tab-content" > {
                    bookingConsultation[activeTab].content
                } <
                /div> <
                /div> <
                />
            ) : type === "news" ? ( <
                >
                <
                div className = "news" >
                <
                div className = {
                    `customTabWrapper ${type}`
                } >
                <
                ul className = {
                    `tab-list tablength-${news.length}`
                } > {
                    news.map((tab, index) => ( <
                        li key = {
                            tab.key
                        }
                        className = {
                            index === activeTab ? "selected" : ""
                        }
                        onClick = {
                            () => setActiveTab(index)
                        } >
                        {
                            tab.label
                        } <
                        /li>
                    ))
                } <
                /ul> <
                div className = "tab-content" > {
                    news[activeTab].data
                } < /div> <
                /div> <
                /div> <
                />
            ) : ( <
                >
                <
                div className = "k2s-green-container inner tab" >
                <
                div className = {
                    `customTabWrapper ${type === undefined ? "about" : ""}`
                } >
                <
                ul className = {
                    `tab-list tablength-${aboutTabs.length}`
                } > {
                    aboutTabs.map((tab, index) => ( <
                        li key = {
                            tab.key
                        }
                        className = {
                            index === activeTab ? "selected" : ""
                        }
                        onClick = {
                            () => setActiveTab(index)
                        } >
                        {
                            tab.label
                        } <
                        /li>
                    ))
                } <
                /ul> <
                /div> <
                div className = "tab-content" >
                <
                div className = "aboutcontent" >
                <
                div className = "header-title black flexstyle" >
                <
                h4 > {
                    aboutTabs[activeTab].label
                } < /h4> <
                p className = "lightblack" > {
                    aboutTabs[activeTab].description
                } <
                /p> <
                /div> <
                div className = "about-img-wrapper" >
                <
                img src = {
                    aboutTabs[activeTab].image
                }
                alt = {
                    aboutTabs[activeTab].label
                }
                style = {
                    {
                        width: "100%"
                    }
                }
                /> <
                /div> {
                    aboutTabs[activeTab].content
                } <
                /div> <
                /div> <
                /div> <
                />
            )
        } <
        />
    );
};

export default CustomTabs;