import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import '../css/Event.css';

export default function App() {
    return(
        <div>
            <div className="wrapper">
                <div className="aboutcontent">
                    <img src={require('../../event.jpg')} alt="" className="aboutlogo"/>  
                </div>
                <div className="aboutimage">
                    <div className="aboutcard">
                        <div className="image">
                            <img src={ require('../../frame.png')} alt=""/>
                            <div className="caption">
                                <p>Event</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Row between="xs">
                    <Col xs sm md><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col xs sm md><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col xs sm md><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col xs sm md><img src={require('../../frame.png')} className="competition"/></Col>
            </Row>
            <Row between="xs">
                    <Col xs sm md><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col xs sm md><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col xs sm md><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col xs sm md><img src={require('../../frame.png')} className="competition"/></Col>
            </Row>
        </div>
    );
}