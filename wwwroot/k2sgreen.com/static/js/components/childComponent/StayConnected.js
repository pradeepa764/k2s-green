import React, {
    useState
} from "react";
import {
    Button,
    Input,
    Col,
    Row,
    Select,
    message,
    Spin
} from "antd";
import axios from "axios";

const {
    Option
} = Select;
const {
    TextArea
} = Input;

const StayConnected = () => {
        const [loading, setLoading] = useState(false); // Add loading state
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
            setLoading(true); // Start loading

            try {
                console.log("Sending Data:", formData); // Log data before sending

                const response = await axios.post("http://localhost:5000/send-email", formData);

                console.log("Server Response:", response.data); // Log server response

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
                console.error("Error:", error.response ? .data || error.message);
                message.error("Server error. Please try again later.");
            } finally {
                setLoading(false); // Stop loading
            }
        };

        return ( <
            div className = "stay-connected"
            id = "stay-connected" >
            <
            div className = "k2s-green-container defaultPadding" >
            <
            Row gutter = {
                24
            } >
            <
            Col className = "gutter-row"
            sm = {
                24
            }
            md = {
                12
            } >
            <
            div className = "bgblue containerPadding" >
            <
            div className = "img_stay_connected" >
            <
            img src = "./images/left-stay-connect.png"
            alt = "Stay Connected" / >
            <
            /div> <
            div className = "header-title pd50 white" >
            <
            h4 > Stay Connected < /h4> <
            p > Speak to our member of the team today. < /p>

            <
            /div> <
            /div> <
            /Col> <
            Col className = "gutter-row"
            sm = {
                24
            }
            md = {
                12
            } >
            <
            div className = "bgwhite containerPadding bs" >
            <
            div className = "header-title" >
            <
            h3 > Stay ahead in the renewable revolution < /h3> <
            p > Subscribe
            for the latest insights and breakthroughs in clean energy. < /p> <
            /div>

            {
                isSuccess ? ( <
                        div className = "success-message" >
                        <
                        h3 > Thank you
                        for contacting us! < /h3> <
                        p > We will get back to you shortly. < /p> <
                        /div>
                    ) : ( <
                        >
                        <
                        Row gutter = {
                            24
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
                            24
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
                        placeholder = "Enter Your Email"
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
                            formData.option || undefined
                        } // Ensures placeholder is shown when no option is selected
                        onChange = {
                            handleSelectChange
                        } >
                        <
                        Option value = "option1" > Wind Energy < /Option> <
                        Option value = "option2" > Solar Energy < /Option> <
                        Option value = "option3" > Hydrogen Energy < /Option> <
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
                        div className = "form-feild last" >
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
                        /Col>

                        <
                        /Row>



                        <
                        Button type = "primary"
                        size = "large"
                        className = {
                            `morebutton ${loading ? "loadingRight" : ""}`
                        }
                        onClick = {
                            handleSubmit
                        }
                        disabled = {
                            loading
                        } > {
                            loading ? < Spin style = {
                                {
                                    color: "#fff"
                                }
                            }
                            /> : <>SUBSCRIBE <i className="arrow-right"></i > < />} <
                            /Button> <
                            />
                        )
                    } <
                    /div> <
                    /Col> <
                    /Row> <
                    /div> <
                    /div>
            );
        };

        export default StayConnected;