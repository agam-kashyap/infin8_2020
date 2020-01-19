import React from 'react';
import '../css/Footer.css';
import { Row,Col } from 'antd';
import Iframe from 'react-iframe'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
class CFooter extends React.Component {
    render() {
        return (
            // <div className="footer">
            <footer id="footer" class="footer-1">
                <div className="main-footer widgets-dark typo-light">
                    <div className="container">
                    <Row>
                    
                        {/* <Col md={4} xs={6} sm={12}>
                        <div className="widget subscribe no-box">
                            <img className="footerlogo" src={require("../assets/iiitb-white.png")} alt="iiitb"/>
                        </div>
                        </Col> */}

                        <Col md={{span:4, offset:1}} sm={{span:6,offset:1}} xs={{span:12}} >
                        <div className="widget no-box">
                            <h1 className="widget-title">Connect<span></span></h1>
                            <ul className="thumbnail-widget">
                            <li>
                            <div className="thumb-content"><a href="https://www.facebook.com/infin8iiitb"><FaFacebook size={70}/></a></div>	
                            </li>
                            <li>
                            <div className="thumb-content"><a href="https://www.instagram.com/infin8_iiitb/?hl=en"><FaInstagram size={70}/></a></div>	
                            </li>
                            </ul>
                        </div>
                        </Col>

                        <Col md={4} xs={12} sm={12}>
                        <div className="widget no-box">
                            <h1 className="widget-title">Contact Us<span></span></h1>
                            {/* <p><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p> */}
                            <ul className="thumbnail-widget">
                                <li>
                                    <h3>+91 9691622672</h3>
                                </li>
                            </ul>
                        </div>
                        </Col>

                        <Col md={4} xs={12} sm={12}>
                            <div className="widget no-box">
                                <h2 className="widget-title">Event Location</h2>
                                    <br></br>
                                    <address className="address">
                                        <p style={{color: "#fff"}}>
                                            26/C, Hosur Road,Electronics City Phase 1, Electronic City
                                            <br />
                                            Karnataka,India.
                                            <br />
                                            560100
                                        </p>
                                    </address>
                                    </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{span:24}} xs={{span:24 }} md={{span:20, offset:1}}>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9771672553525!2d77.66104301532664!3d12.844751190939244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae135aeb7f340f%3A0x3ad86af40d2ac611!2sInternational%20Institute%20of%20Information%20Technology%20Bangalore!5e0!3m2!1sen!2sin!4v1579113162889!5m2!1sen!2sin"
                         width="100%" height="300" allowfullscreen="">
                        </Iframe>
                        </Col>
                    </Row>
                    </div>
                </div>
                    
                <div className="footer-copyright">
                    <div className="container">
                    <Row>
                    <div className="col-md-12 text-center">
                    <p>Copyright <a href="https://zense.co.in">Zense</a>  © 2020. All rights reserved.</p>
                    </div>
                    </Row>
                    </div>
                </div>

            </footer>
        );
    }
}

export default CFooter;