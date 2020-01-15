import React from 'react';
import { Carousel } from 'antd';
import '../css/TopSection.css';
import '../css/TopSection.scss';
import '../css/bganimation.scss';

class TopSection extends React.Component {
render() {
 return (
 <Carousel autoplay>
 <div class="hero">
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="header"/>
    <div className= "Image">
    <img src={require('../assets/infin8logofrowebsite.png')} alt=""/>
    </div>
    <div class="wrapper">
    <div class="letters"><span class="letter">c</span><span class="letter">u</span><span class="letter">l</span><span class="letter">t</span><span class="letter">u</span><span class="letter">r</span><span class="letter">a</span><span class="letter">l</span><span class="letter"> </span>
                <span
                    class="letter">f</span><span class="letter">e</span><span class="letter">s</span><span class="letter">t</span><span class="letter"> </span><span class="letter">o</span><span class="letter">f</span><span class="letter"> </span><span class="letter">i</span>
                    <span
                        class="letter">i</span><span class="letter">i</span><span class="letter">t</span><span class="letter"> </span><span class="letter">b</span><span class="letter">a</span><span class="letter">n</span><span class="letter">g</span><span class="letter">a</span>
                        <span
                            class="letter">l</span><span class="letter">o</span><span class="letter">r</span><span class="letter">e</span></div>
        </div>
        <br />
        <div class = "wrapper2">
          <div class = "numbers"> </div>
           <span class = "letter">7</span><span class = "letter">F</span><span class = "letter">E</span><span class = "letter">B</span><span class = "letter">-</span><span class = "letter">2</span><span class = "letter">0</span><span class = "letter">2</span><span class = "letter">0</span><br />
        </div>
        <div class = "wrapper3">      
           <div class = "numbers"></div>
           <span class = "letter">8</span><span class = "letter">F</span><span class = "letter">E</span><span class = "letter">B</span><span class = "letter">-</span><span class = "letter">2</span><span class = "letter">0</span><span class = "letter">2</span><span class = "letter">0</span><br />
        </div>
  </div>
  </Carousel>
 );
}
}

export default TopSection;