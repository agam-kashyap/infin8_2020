import React from 'react';
import '../css/meettheteam.css';
import { Row,Col } from 'antd';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import FooterNoMap from './Footerwithoutmap';

class Team extends React.Component {
    render() {
        return(
            <div>
                
                <div className="heroteam">
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <div className="cubeteam"></div>
                    <header>
                        <a href="/"><div className="headerlogo"></div></a>
                    </header>
                    <div class="container">
                        <div className="headingMain" >
                            Meet the Infin8 Team!
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className="heading" >
                            Core Members
                        </div>
                        <br/>
                        <br/>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/solosinging2_300x300.jpg')}/>
                                        <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Williamson</h3>
                                            <span class="post">Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                    
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/solosinging2_300x300.jpg')} />
                                        <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Kristiana</h3>
                                            <span class="post">Web Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/solosinging2_300x300.jpg')}/>
                                        <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Williamson</h3>
                                            <span class="post">Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                    
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/solosinging2_300x300.jpg')} />
                                        <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Kristiana</h3>
                                            <span class="post">Web Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        
                        <Row type="flex" justify="space-around" align="middle">
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/solosinging2_300x300.jpg')}/>
                                        <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Williamson</h3>
                                            <span class="post">Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                    
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/solosinging2_300x300.jpg')} />
                                        <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Kristiana</h3>
                                            <span class="post">Web Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            
                        </Row>



                        <div className="heading" >
                            Design 
                        </div>
                        <br/>
                        <br/>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/solosinging2_300x300.jpg')}/>
                                        <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Williamson</h3>
                                            <span class="post">Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                    
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/solosinging2_300x300.jpg')}/>
                                        <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Williamson</h3>
                                            <span class="post">Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                    
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/solosinging2_300x300.jpg')} />
                                        <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Kristiana</h3>
                                            <span class="post">Web Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                        <div className="heading" >
                            Website Design
                        </div>
                        <br/>
                        <br/>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col md={{span:3}} sm={{span:8}} xs={{span:12}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/solosinging2_300x300.jpg')}/>
                                        <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Williamson</h3>
                                            <span class="post">Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                    
                            <Col md={{span:3}} sm={{span:8}} xs={{span:12,offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/solosinging2_300x300.jpg')}/>
                                        <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Williamson</h3>
                                            <span class="post">Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <FooterNoMap/>
        </div>
        );
    }
}

export default Team;
