import React from "react";
import {
    Col,
    Row
} from "antd";

const Footer = () => {
    return ( <
        div className = "footer" >
        <
        div className = "k2s-green-container" >
        <
        Row gutter = {
            16
        }
        className = "" > { /* Brand & Social Links */ } <
        Col className = "gutter-row coltype"
        xs = {
            24
        }
        md = {
            4
        } >
        <
        div className = "brandlogo_footer" >
        <
        img src = "/images/footer-logo.png"
        alt = "Footer Logo" / >

        <
        /div> {
            /* <ul className="social">
                          <li className="twitter">
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                              <i className="bi bi-twitter-x"></i>
                            </a>
                          </li>
                          <li className="insta">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                              <i className="bi bi-instagram"></i>
                            </a>
                          </li>
                          <li className="linkedin">
                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                              <i className="bi bi-linkedin"></i>
                            </a>
                          </li>
                          <li className="youtube">
                            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                              <i className="bi bi-youtube"></i>
                            </a>
                          </li>
                        </ul> */
        }

        <
        /Col> {
            /* <Col className="gutter-row coltype" xs={24} md={6}>
                      <div className="copyright">© K2S Consulting 2025</div>
                        <div className="privacy-link">
                          <a href="/privacy-policy">Privacy Policy</a>
                          <a href="/legal">Legal</a>
                          <a href="/terms-of-use">Terms of Use</a>
                        </div>
                        
                      </Col> */
        }

        { /* Contact Information */ } {
            /* <Col className="gutter-row coltype" xs={24} md={6}>
                        <div className="menu-header">Contact</div>
                        <p className="textonly">9450 SW Gemini Dr, Suite #31023, Beaverton, OR 97008, USA</p>
                        <p className="textonly">+1 (405) 544-4333</p>
                        <a href="tel:+1234567890" className="linkonly" onClick={() => alert("Calling...")}> Call us now! </a>
                      </Col> */
        }


        { /* Who We Are Section */ } <
        Col className = "gutter-row coltype"
        xs = {
            24
        }
        md = {
            15
        } >

        <
        ul className = "footerlink row" >
        <
        li > < a href = "/about" > About Us < /a></li >
        <
        li > < a href = "/solutions" > Solutions < /a></li >
        <
        li > < a href = "/booking" > Booking & Consultation < /a></li >

        <
        /ul> <
        /Col> <
        Col className = "gutter-row coltype"
        xs = {
            24
        }
        md = {
            5
        } >
        <
        div className = "copyright pd10" > ©K2S Consulting 2025 < /div> <
        div className = "privacy-link" >
        <
        a href = "/privacy-policy" > Privacy Policy < /a> <
        a href = "/legal" > Legal < /a> <
        a href = "/terms-of-use" > Terms of Use < /a> <
        /div> <
        /Col>

        { /* Our Solutions Section */ } {
            /* <Col className="gutter-row coltype" xs={24} md={6}>
                        <div className="menu-header">Our Solutions</div>
                        <ul className="footerlink">
                          <li><a href="/wind-assessments">Wind Assessments</a></li>
                          <li><a href="/customized-recommendations">Customized Recommendations</a></li>
                          <li><a href="/installation">Installation & Commissioning</a></li>
                          <li><a href="/maintenance-support">Maintenance Support</a></li>
                        </ul>
                      </Col> */
        } <
        /Row> <
        /div> <
        /div>
    );
};

export default Footer;