import React, {
    useState
} from "react";
import {
    Button,
    Row,
    Col,
    Input,
    Select,
    message
} from "antd";
import {
    useLocation
} from "react-router-dom";
import StaticStepper from "../components/childComponent/StaticStepper";
import axios from "axios";

const {
    TextArea
} = Input;
const {
    Option
} = Select;

const Contact = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get("name") || "default"; // Default if no name found

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        option: "",
        message: "",
    });

    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSelectChange = (value) => {
        setFormData({ ...formData,
            option: value
        });
    };

    const handleSubmit = async () => {
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.option || !formData.message) {
            message.error("Please fill all required fields!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/send-email", formData);

            if (response.data.success) {
                message.success("Email sent successfully!");
                setIsSuccess(true);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    option: "",
                    message: ""
                });
            } else {
                message.error(response.data.message || "Error sending email.");
            }
        } catch (error) {
            console.error("Error:", error);
            message.error("Server error. Please try again later.");
        }
    };

    return ( <
        >
        <
        div className = "landing-screen defaultPadding_fge cmobile" >
        <
        div className = "k2s-green-container" >
        <
        div className = "modelPopup contact" >
        <
        Row >
        <
        Col xs = {
            24
        }
        sm = {
            12
        }
        md = {
            10
        } >
        <
        div className = "flex_col_style" >
        <
        div className = "header-title" >
        <
        h4 > We are open to everyone who is interested in renewable energy. < /h4> <
        /div>

        <
        div className = "contact-info-block" >
        <
        h6 > Contact Details < /h6> <
        div className = "mobile" >
        <
        span > Phone < /span> <
        span > +1(405) 544 - 4333 < /span> <
        /div> <
        div className = "mobile" >
        <
        span > Address < /span> <
        span > 9450 SW Gemini Dr, Suite #31023, Beaverton, OR 97008, USA</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs= {
            24
        }
        sm = {
            12
        }
        md = {
            14
        } > {
            isSuccess ? ( <
                div className = "success-message" >
                <
                h3 > Thank you
                for contacting us! < /h3> <
                p > We will get back to you shortly. < /p> <
                /div>
            ) : ( <
                Row >
                <
                Col xs = {
                    24
                }
                sm = {
                    24
                }
                md = {
                    24
                } >
                <
                div className = "imageWrapper" >
                <
                img src = "images/how-it-work-left2.jpg"
                alt = "how-it-work-left2" / >
                <
                /div> <
                /Col> <
                Col xs = {
                    24
                }
                sm = {
                    24
                }
                md = {
                    24
                } >
                <
                div className = "bgwhite bs stay-connected white" >
                <
                Row gutter = {
                    16
                } >
                <
                Col xs = {
                    24
                }
                sm = {
                    12
                }
                md = {
                    12
                } >
                <
                div className = "form-feild" >
                <
                Input type = "text"
                id = "firstName"
                className = "inputFeild"
                size = "large"
                placeholder = "First Name"
                value = {
                    formData.firstName
                }
                onChange = {
                    handleChange
                }
                /> <
                /div> <
                /Col> <
                Col xs = {
                    24
                }
                sm = {
                    12
                }
                md = {
                    12
                } >
                <
                div className = "form-feild" >
                <
                Input type = "text"
                id = "lastName"
                className = "inputFeild"
                size = "large"
                placeholder = "Last Name"
                value = {
                    formData.lastName
                }
                onChange = {
                    handleChange
                }
                /> <
                /div> <
                /Col> <
                /Row> <
                Row gutter = {
                    16
                } >
                <
                Col xs = {
                    24
                }
                sm = {
                    24
                }
                md = {
                    24
                } >
                <
                div className = "form-feild" >
                <
                Input type = "email"
                id = "email"
                className = "inputFeild"
                size = "large"
                placeholder = "Your Email"
                value = {
                    formData.email
                }
                onChange = {
                    handleChange
                }
                /> <
                /div> <
                /Col> <
                Col xs = {
                    24
                }
                sm = {
                    24
                }
                md = {
                    24
                } >
                <
                div className = "form-feild" >
                <
                Select className = "inputFeild"
                size = "large"
                placeholder = "Select an option"
                value = {
                    formData.option || (name === "default" ? undefined : name)
                }
                onChange = {
                    handleSelectChange
                } >
                <
                Option value = "wind" > Wind Energy < /Option> <
                Option value = "solar" > Solar Energy < /Option> <
                Option value = "hydrogen" > Hydrogen Energy < /Option> <
                /Select> <
                /div> <
                /Col> <
                Col xs = {
                    24
                }
                sm = {
                    24
                }
                md = {
                    24
                } >
                <
                div className = "form-feild" >
                <
                TextArea id = "message"
                className = "inputFeild"
                size = "large"
                placeholder = "Enter your message"
                rows = {
                    2
                }
                value = {
                    formData.message
                }
                onChange = {
                    handleChange
                }
                /> <
                /div> <
                /Col> <
                /Row>

                <
                Button type = "primary"
                size = "large"
                className = "morebutton"
                onClick = {
                    handleSubmit
                } >
                SUBSCRIBE < i className = "arrow-right" > < /i> <
                /Button> <
                /div> <
                /Col> <
                /Row>
            )
        } <
        /Col> <
        /Row> <
        /div> <
        /div> <
        /div>

        <
        div className = "defaultPadding g-bb-gray" >
        <
        div className = "k2s-green-container" >
        <
        Row gutter = {
            16
        } >
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
        div className = "header-title center" >
        <
        h2 > Our Consultation Process < /h2> <
        /div> <
        /Col> <
        /Row> <
        div className = "pdt50" >
        <
        StaticStepper / >
        <
        /div> <
        /div> <
        /div> <
        />
    );
};

export default Contact;