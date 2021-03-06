import React from 'react';
import '../css/meettheteam.css';
import { Row,Col } from 'antd';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import FooterNoMap from './Footerwithoutmap';

class Team extends React.Component {
    render() {
        return(
            <div>
                
                <div className="heroteam" style={{}}>
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
                                        <img src={require('../assets/people/abhigna.jpeg')}/>
                                        <ul class="social">
                                            {/* <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li> */}
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Abhigna Banda</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/ananya.png')} />
                                        {/* <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul> */}
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Ananya Appan</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/aniruddha.jpg')} />
                                        <ul class="social">
                                            <li><a href=" fb.com/chronos247" ><FaFacebook/></a></li>
                                            <li><a href="https://www.instagram.com/aniruddhatr/" ><FaInstagram/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Aniruddha Trivedi</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/bharath.jpg')}/>
                                        <ul class="social">
                                            <li><a href="https://www.facebook.com/bharath.joshi.9" ><FaFacebook/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Bharath Joshi</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
            
                        </Row>
                        
                        <Row type="flex" justify="space-around" align="middle">
                        <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/brahma.jpg')} />
                                        <ul class="social">
                                            <li><a href="https://www.facebook.com/brahma.kulkarni" ><FaFacebook/></a></li>
                                            <li><a href="https://www.instagram.com/brahmakulkarni/" ><FaInstagram/></a></li>
                                            <li><a href="https://www.linkedin.com/in/brahma-kulkarni-7a0951145/" ><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Brahma Kulkarni</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/prachi.jpg')}/>
                                        {/* <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul> */}
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Prachi Gupta</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                    
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/shivani.png')} />
                                        {/* <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul> */}
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Shivani Shah</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/smit.jpg')} />
                                        <ul class="social">
                                            <li><a href="https://www.facebook.com/smit.srl.7.4" ><FaFacebook/></a></li>
                                            <li><a href="https://twitter.com/slsrlsmith91?s=09"><FaTwitter/></a></li>
                                            <li><a href="https://www.instagram.com/smit.limbani/" ><FaInstagram/></a></li>
                                            <li><a href="https://in.linkedin.com/in/smit-limbani-878914106" ><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Smit Limbani</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            
                        </Row>
                        <div className="heading" >
                            Outreach
                        </div>
                        <br/>
                        <br/>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col md={{span:3}} sm={{span:8}} xs={{span:12}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/aarushi.jpg')}/>
                                        <ul class="social">
                                            <li><a href="https://www.facebook.com/aarushi.goenka.9" ><FaFacebook/></a></li>
                                            {/* <li><a href="#"><FaTwitter/></a></li> */}
                                            <li><a href="https://www.instagram.com/aarushi2405/" ><FaInstagram/></a></li>
                                            {/* <li><a href="#" ><FaLinkedin/></a></li> */}
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Aarushi Goenka</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                    
                            <Col md={{span:3}} sm={{span:8}} xs={{span:12,offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/pranav.jpg')}/>
                                        <ul class="social">
                                            <li><a href="https://instagram.com/p__k__?igshid=1st2i2bighmnl" ><FaInstagram/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Pranav Kumar</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        
                            <Col md={{span:3}} sm={{span:8}} xs={{span:12,offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/tanmay.JPG')}/>
                                        <ul class="social">
                                            <li><a href="https://www.facebook.com/sinbycosmay" ><FaFacebook/></a></li>
                                            <li><a href="https://www.instagram.com/sinbycosmay/" ><FaInstagram/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Tanmay Arora</h3>
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
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/agam.JPG')}/>
                                        <ul class="social">
                                            <li><a href="https://www.facebook.com/agam.sasluck" ><FaFacebook/></a></li>
                                            <li><a href="https://www.instagram.com/agam_kashyap" ><FaInstagram/></a></li>
                                            <li><a href="https://www.linkedin.com/in/agam-kashyap-83538817a/" ><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Agam Kashyap</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                    
                            <Col md={{span:3, offset:1}} sm={{span:8, offset:1}} xs={{span:12, offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/jishnu.jpg')}/>
                                        {/* <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul> */}
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Jishnu Vinod Kumar</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                
                        </Row>
                        <div className="heading" >
                            Design Team 
                        </div>
                        <br/>
                        <br/>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col md={{span:3}} sm={{span:8}} xs={{span:12,offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/dhruv.jpeg')}/>
                                        <ul class="social">
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Dhruv Patel</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col md={{span:3}} sm={{span:8}} xs={{span:12,offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/niki.jpeg')}/>
                                        <ul class="social">
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Nikitha Adivi</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col md={{span:3}} sm={{span:8}} xs={{span:12,offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/udith.jpg')}/>
                                        <ul class="social">
                                            <li><a href="https://m.facebook.com/uddu.sai?ref=bookmarked"><FaFacebook/></a></li>
                                            <li><a href="https://instagram.com/udith__m?igshid=14duq8obznjdk"><FaInstagram/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Udith M</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="heading" >
                            Photography 
                        </div>
                        <br/>
                        <br/>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col md={{span:3}} sm={{span:8}} xs={{span:12}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/tejas.jpeg')}/>
                                        <ul class="social">
                                            <li><a href="https://m.facebook.com/ktejas98" ><FaFacebook/></a></li>
                                            <li><a href="https://instagram.com/mai.bhi.kheechega" ><FaInstagram/></a></li>
                                            <li><a href="kotha.tejas@iiitb.org" ><FaMailBulk/></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Tejas Kotha</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <div className="heading" >
                            Content Writers 
                        </div>
                        <br/>
                        <br/>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col md={{span:3,offset:1}} sm={{span:8,offset:1}} xs={{span:12,offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/vikram.jpeg')}/>
                                        <ul class="social">
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Vikram Adithya</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col md={{span:3,offset:1}} sm={{span:8,offset:1}} xs={{span:12,offset:1}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/gurleen.jpeg')}/>
                                        <ul class="social">
                                        </ul>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Gurleen Kaur</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <div className="heading" >
                            Logistics
                        </div>
                        <br/>
                        <br/>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col md={{span:3}} sm={{span:8}} xs={{span:12}}>
                                <div class="our-team">
                                    <div class="pic">
                                        <img src={require('../assets/people/ritik.jpg')}/>
                                        {/* <ul class="social">
                                            <li><a href="#" ><FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                            <li><a href="#" ><FaInstagram/></a></li>
                                            <li><a href="#" ><FaLinkedin/></a></li>
                                        </ul> */}
                                    </div>
                                    <div class="team-content">
                                        <div class="team-info">
                                            <h3 class="title">Ritik Kakwani</h3>
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
