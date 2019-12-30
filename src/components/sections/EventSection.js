import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import '../css/Event.css';

export default function App() {
    return(
        <div>
            <Row between="xs">
                <Col xs md sm>
                    <img src={require('../../event.jpg')} alt="" className="event"/>
                </Col>
                <Col xs md sm>
                    <p><h1>Hello</h1></p>
                </Col>
            </Row>
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