import React from 'react';
import { Carousel } from 'antd';
import '../css/TopSection.css';

class TopSection extends React.Component {
render() {
 return (
 <Carousel autoplay>
    <div>
      <img src={require('../../warner-bros.png')} alt=""/>
    </div>
  </Carousel>
 );
}
}

export default TopSection;