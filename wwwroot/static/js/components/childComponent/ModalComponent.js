import React, {
    useState
} from "react";
import {
    Modal,
    Button,
    Input,
    Col,
    Row,
    Select,
    message
} from "antd";
import axios from "axios";

const {
    Option
} = Select;
const {
    TextArea
} = Input;

const ModalComponent = ({
    isModalOpen,
    setIsModalOpen
}) => {
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
        Modal open = {
            isModalOpen
        } // ✅ Keep only this
        onCancel = {
            () => setIsModalOpen(false)
        } // ✅ Fixed onCancel
        footer = {
            null
        } // ✅ Hides default footer buttons
        className = "modelPopup"
        centered width = {
            800
        } >
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
        /div> <
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
        } >
        <
        Row >
        <
        Col >
        <
        div className = "imageWrapper" >
        <
        img src = "images/how-it-work-left2.jpg"
        alt = "how-it-work-left2" / >
        <
        /div> <
        /Col>

        {
            isSuccess ? ( <
                div className = "success-message" >
                <
                h3 > Thank you
                for contacting us! < /h3> <
                p > We will get back to you shortly. < /p> <
                /div>
            ) : ( <
                Col >
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
                Option value = "option1" > Option 1 < /Option> <
                Option value = "option2" > Option 2 < /Option> <
                Option value = "option3" > Option 3 < /Option> <
                /Select> <
                /div> <
                /Col> <
                Col xs = {
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
                /Row> <
                Button type = "primary"
                size = "large"
                className = "morebutton"
                onClick = {
                    handleSubmit
                } >
                SUBSCRIBE < i className = "arrow-right" > < /i> <
                /Button> <
                /div> <
                /Col>
            )
        } <
        /Row> <
        /Col> <
        /Row> <
        /Modal>
    );
};

export default ModalComponent;