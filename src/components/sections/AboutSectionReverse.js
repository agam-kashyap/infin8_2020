import React from 'react';
import { Card } from 'antd';
import { Row,Col } from 'react-flexbox-grid';

import '../css/AboutSection.css'

class AboutSectionReverse extends React.Component {
    render() {
        return(
            <div>
                <Row between="xs">
                    <Col xs sm md>
                        <img src={ require('../../random.jpg')} className="aboutlogo" alt=""/>
                    </Col>
                    <Col xs sm md>
                        <div className="aboutcard">
                        <div className="image">
                            <img src={ require('../../frame.png')} alt=""/>
                            <div className="caption">
                            <p>This is the About Section</p>
                            <p>Blah Blah</p>
                            </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AboutSectionReverse;