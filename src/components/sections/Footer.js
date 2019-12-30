import React from 'react';
import '../css/Footer.css';
import { Row,Col } from 'antd';

class CFooter extends React.Component {
    render() {
        return (
            // <div className="footer">
            <footer id="footer" class="footer-1">
                <div className="main-footer widgets-dark typo-light">
                    <div className="container">
                    <Row>
                    
                        <Col xs={12} sm={6} md={3}>
                        <div className="widget subscribe no-box">
                        <h5 className="widget-title">COMPANY NAME<span></span></h5>
                        <p>About the company, little discription will goes here.. </p>
                        </div>
                        </Col>

                        <Col xs={12} sm={6} md={3}>
                        <div className="widget no-box">
                            <h5 className="widget-title">Quick Links<span></span></h5>
                            <ul className="thumbnail-widget">
                            <li>
                            <div className="thumb-content"><a href="#.">Get Started</a></div>	
                            </li>
                            <li>
                            <div className="thumb-content"><a href="#.">Top Leaders</a></div>	
                            </li>
                            <li>
                            <div className="thumb-content"><a href="#.">Success Stories</a></div>	
                            </li>
                            <li>
                            <div className="thumb-content"><a href="#.">Event/Tickets</a></div>	
                            </li>
                            <li>
                            <div className="thumb-content"><a href="#.">News</a></div>	
                            </li>
                            <li>
                            <div className="thumb-content"><a href="#.">Lifestyle</a></div>	
                            </li>
                            <li>
                            <div className="thumb-content"><a href="#.">About</a></div>	
                            </li>
                            </ul>
                        </div>
                        </Col>

                        <Col xs={12} sm={6} md={3}>
                        <div className="widget no-box">
                            <h5 className="widget-title">Get Started<span></span></h5>
                            <p>Get access to your full Training and Marketing Suite.</p>
                            <a className="btn" href="#." target="_blank">Register Now</a>
                        </div>
                        </Col>

                        <Col xs={12} sm={6} md={3}>
                        <div className="widget no-box">
                            <h5 className="widget-title">Contact Us<span></span></h5>

                            <p><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
                        </div>
                        </Col>

                    </Row>
                    </div>
                </div>
                    
                <div className="footer-copyright">
                    <div className="container">
                    <Row>
                    <div className="col-md-12 text-center">
                    <p>Copyright Company Name © 2016. All rights reserved.</p>
                    </div>
                    </Row>
                    </div>
                </div>

            </footer>
        );
    }
}

export default CFooter;