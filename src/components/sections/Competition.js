import React from 'react';
import '../css/hexagon-comp.css'
import Fade from 'react-reveal/Fade';

class Competition extends React.Component {
    render() {
        return(
            <div>
                <ul id = "hexGrid" class = "clr">

                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src={require('../assets/pubg2.jpg')} />   
                                    </Fade>
                                <h1>LAN Gaming</h1>
                                <a href = "/lan">GO!</a>
                            </div> 
                    </li>

                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src={require("../assets/solosinging2.jpg")} />   
                                    </Fade>
                                    <h1>Solo-Singing</h1> 
                                    <a href = "/Singing">GO!</a>                            
                            </div> 
                    </li>

                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src={require('../assets/bands2.jpg')} />   
                                    </Fade>
                                    <h1>Battle of Bands</h1> 
                                    <a href = "/euphony">GO!</a>
                            </div> 
                    </li>

                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src={require("../assets/fanatics.jpg")} />      
                                    </Fade>
                                    <h1>League of Fanatics</h1> 
                                    <a href = "/blank">GO!</a>
                            </div> 
                    </li>

                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src={require("../assets/dance2.jpg")} />   
                                    </Fade>
                                    <h1>Dance off</h1> 
                                    <a href = "/groupdance">GO!</a>
                            </div> 
                    </li>

                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src = {require("../assets/FacePaint.jpg")} />   
                                    </Fade>
                                    <h1>Face Painting</h1> 
                                    <a href = "/facepainting">GO!</a>
                            </div> 
                    </li>

                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" />
                                    </Fade>
                                    <h1>Fashion Show</h1> 
                                    <a href = "/blank">GO!</a>
                            </div> 
                    </li>
                </ul>
            </div>

        );
    }
}

export default Competition;