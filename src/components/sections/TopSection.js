import React from 'react';
import { Carousel } from 'antd';
import '../css/TopSection.css';
import '../css/TopSection.scss';
import '../css/bganimation.scss';

class TopSection extends React.Component {
render() {
 return (
 <Carousel autoplay>
    <div>
     <div className="header"/>
        { /* <div class="hero">
          <div class="hero__title">Hello World</div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
      </div> */}
      <img src={require('../assets/infin8logofrowebsite.png')} alt=""/>
      <div class="wrapper">
        <div class="letters"><span class="letter">c</span><span class="letter">u</span><span class="letter">l</span><span class="letter">t</span><span class="letter">u</span><span class="letter">r</span><span class="letter">a</span><span class="letter">l</span><span class="letter"> </span>
                <span
                    class="letter">f</span><span class="letter">e</span><span class="letter">s</span><span class="letter">t</span><span class="letter"> </span><span class="letter">o</span><span class="letter">f</span><span class="letter"> </span><span class="letter">i</span>
                    <span
                        class="letter">i</span><span class="letter">i</span><span class="letter">t</span><span class="letter"> </span><span class="letter">b</span><span class="letter">a</span><span class="letter">n</span><span class="letter">g</span><span class="letter">a</span>
                        <span
                            class="letter">l</span><span class="letter">o</span><span class="letter">r</span><span class="letter">e</span></div>
        </div>
        {/* <div className="watermark"/> */}
    </div>
  </Carousel>
 );
}
}

export default TopSection;