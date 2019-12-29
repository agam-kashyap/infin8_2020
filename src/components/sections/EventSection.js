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
            <Row>
                    <Col span={6}><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col span={6}><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col span={6}><img src={require('../../frame.png')} className="competition"/></Col>
                    <Col span={6}><img src={require('../../frame.png')} className="competition"/></Col>
                </Row>
        </div>
    );
}