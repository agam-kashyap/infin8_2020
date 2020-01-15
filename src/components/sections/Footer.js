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
                    
                        <Col xs={{span: 12}} sm={{span: 12 }} md={{span: 4}}>
                        <div className="widget subscribe no-box">
                            <img className="footerlogo" src={require("../assets/iiitb.png")}/>
                        </div>
                        </Col>

                        <Col xs={{span: 12}} sm={{span: 12 }} md={{span: 4,offset: 1}}>
                        <div className="widget no-box">
                            <h1 className="widget-title">Connect<span></span></h1>
                            <ul className="thumbnail-widget">
                            <li>
                            <div className="thumb-content"><a href="https://www.facebook.com/iiitb.infin8/?ref=br_rs">Facebook</a></div>	
                            </li>
                            <li>
                            <div className="thumb-content"><a href="https://www.instagram.com/infin8_iiitb/?hl=en">Instagram</a></div>	
                            </li>
                            </ul>
                        </div>
                        </Col>

                        <Col xs={{span : 12, offset: 1}} sm={{span: 12, offset: 1}} md={{span: 6, offset: 1}}>
                        <div className="widget no-box">
                            <h1 className="widget-title">Contact Us<span></span></h1>
                            <p><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
                            <ul className="thumbnail-widget">
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                            </ul>
                        </div>
                        </Col>

                        <Col xs={{span : 12, offset: 1}} sm={{span: 12, offset: 1}} md={{span: 6, offset: 1}}>
                        <div className="widget no-box">
                            <ul className="thumbnail-widget">
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                            </ul>
                        </div>
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