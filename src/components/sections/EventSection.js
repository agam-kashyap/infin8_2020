import React from 'react';
import { Row, Col } from 'antd';
import '../css/Event.css';

export default function App() {
    return(
        <div>
            <Row>
                <Col span={12}>
                    <img src={require('../../event.jpg')} alt="" className="event"/>
                </Col>
                <Col span={12}>
                    
                </Col>
            </Row>
            <div className="Section">
            <Row>
                    <Col xs={24} sm={12} md={6}><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col xs={24} sm={12} md={6}><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col xs={24} sm={12} md={6}><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col xs={24} sm={12} md={6}><img src={require('../../frame.png')} className="competition"/></Col>
            </Row>
            <div className="Section"/>
            <Row>
                    <Col xs={24} sm={12} md={6}><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col xs={24} sm={12} md={6}><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col xs={24} sm={12} md={6}><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col xs={24} sm={12} md={6}><img src={require('../../frame.png')} className="competition"/></Col>
            </Row>
            </div>
        </div>
    );
}