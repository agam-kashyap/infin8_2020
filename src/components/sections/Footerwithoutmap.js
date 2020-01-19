import React from 'react';
import '../css/Footer.css';
import { Row,Col } from 'antd';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

class FooterNoMap extends React.Component {
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

export default FooterNoMap;