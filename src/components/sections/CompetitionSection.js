import React from 'react';
import { Row, Col } from 'antd';

class Competition extends React.Component {
    render(){
        return (
            <div>
                <Row>
                    <Col span={6}><img src={require('../../frame.png')}/></Col>
                    <Col span={6}><img src={require('../../frame.png')}/></Col>
                    <Col span={6}><img src={require('../../frame.png')}/></Col>
                    <Col span={6}><img src={require('../../frame.png')}/></Col>
                </Row>
            </div>
        );
    }
}

export default Competition;