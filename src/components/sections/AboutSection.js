import React from 'react';
import { Card } from 'antd';
import { Row, Col } from 'react-flexbox-grid';
import '../css/AboutSection.css'

class AboutSection extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <div className="aboutimage">
                    <div className="aboutcard">
                        <div className="image">
                            <img src={ require('../../frame.png')} alt=""/>
                            <div className="caption">
                                <p>About College</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutcontent">
                    <img src={ require('../../random.jpg')} className="aboutlogo" alt=""/>
                </div>
            </div>
        );
    }
}
export default AboutSection;