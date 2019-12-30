import React from 'react';
import { Card } from 'antd';
import { Row, Col } from 'react-flexbox-grid';
import '../css/AboutSection.css'

class AboutSection extends React.Component {
    render() {
        return(
            <div>
                <Row justify="center">
                    {/* <Col xs md sm>
                        <div className="aboutcard">
                        <Card bordered={false}>
                        <div className="thumbnail">
                            <img src={ require('../../frame.png')} alt="" className="image"/>
                            <div className="caption">
                            <h2>This is the <strong style={{}}>About Section</strong></h2>
                            <p>Blah Blah</p>
                            </div>
                        </div>
                        </Card>
                        </div>
                    </Col> */}
                    <Col xs md sm>
                        <img src={ require('../../random.jpg')} className="aboutlogo" alt=""/>
                        <p style={{textAlign:"center"}}>About our College</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AboutSection;