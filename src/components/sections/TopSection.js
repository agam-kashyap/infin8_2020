import React from 'react';
import { Carousel } from 'antd';
import '../css/TopSection.css';

class TopSection extends React.Component {
render() {
 return (
 <Carousel autoplay>
    <div>
      <img src={require('../assets/infin8logofrowebsite.png')} alt=""/>
    </div>
  </Carousel>
 );
}
}

export default TopSection;