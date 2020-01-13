import React from 'react';
import { Card } from 'antd';
import { Row, Col } from 'react-flexbox-grid';
import '../css/about.css';

class About extends React.Component {
    render() {
        return(
           <div className="outer-container">
                <div className="image-container">
                    <img className = "containImage" src={require('../assets/dance1.jpg')}/>
                </div>
                <div className="text-container">
                    <p>Lorem ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
           </div>
        );
    }
}
export default About;