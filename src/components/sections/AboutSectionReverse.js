import React from 'react';
import { Row, Col, Card } from 'antd';

import '../css/AboutSection.css'

class AboutSectionReverse extends React.Component {
    render() {
        return(
            <div>
                <Row justify="center">
                    <Col span={12}>
                        <img src={ require('../../random.jpg')} className="aboutlogo" alt=""/>
                    </Col>
                    <Col span={12}>
                        <div className="aboutcard">
                        <Card bordered={false}>
                        <div className="image">
                            <img src={ require('../../frame.png')} alt=""/>
                            <div className="content">
                            <h2>This is the <strong style={{}}>About Section</strong></h2>
                            <p>Blah Blah</p>
                            </div>
                        </div>
                        </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AboutSectionReverse;