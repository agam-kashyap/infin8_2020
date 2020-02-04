import React from 'react';
import '../css/hexagon-comp.css'
import Fade from 'react-reveal/Fade';

class Competition extends React.Component {
    render() {
        return(
            <div className="competition">
                <ul id = "hexGrid" class = "clr">

                <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src={require('../assets/edm.jpg')} alt="pubg"/>   
                                    </Fade>
                                <h1>SUNBURN Campus</h1>
                                <a href = "/edm">GO!</a>
                            </div> 
                    </li>

                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src={require('../assets/streetfair3.jpeg')} alt="pubg"/>   
                                    </Fade>
                                <h1>Carnival</h1>
                                <a href = "/mela">GO!</a>
                            </div> 
                    </li>

                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src={require('../assets/stageplay2.jpeg')} alt="pubg"/>   
                                    </Fade>
                                <h1>Curtain Call</h1>
                                <a href = "/stage">GO!</a>
                            </div> 
                    </li>


                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src={require('../assets/pubg2.jpg')} alt="pubg"/>   
                                    </Fade>
                                <h1>LAN Gaming</h1>
                                <a href = "/lan">GO!</a>
                            </div> 
                    </li>

                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src={require("../assets/solosinging2.jpg")} alt="Solo-singing"/>   
                                    </Fade>
                                    <h1>Solo-Singing</h1> 
                                    <a href = "/Singing">GO!</a>                            
                            </div> 
                    </li>

                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src={require('../assets/bands2.jpg')} alt="Band"/>   
                                    </Fade>
                                    <h1>Battle of Bands</h1> 
                                    <a href = "/overtone">GO!</a>
                            </div> 
                    </li>
                    
                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src = {require("../assets/FacePaint.jpg")} alt="face"/>   
                                    </Fade>
                                    <h1>Painting</h1> 
                                    <a href = "/facepainting">GO!</a>
                            </div> 
                    </li>

                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src={require("../assets/dance2.jpg")} alt="Dancing"/>   
                                    </Fade>
                                    <h1>Group Dance</h1> 
                                    <a href = "/groupdance">GO!</a>
                            </div> 
                    </li>

                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src={require("../assets/fanatics.jpg")} alt="BOF"/>      
                                    </Fade>
                                    <h1>League of Fanatics</h1> 
                                    <a href = "/lof">GO!</a>
                            </div> 
                    </li>

                    <li class = "hex">
                            <div class="hexIn">
                                    <Fade bottom big>
                                        <img src={require("../assets/fashion.jpg")} alt="fashion"/>
                                    </Fade>
                                    <h1>Fashion Show</h1> 
                                    <a href = "/fashion">GO!</a>
                            </div> 
                    </li>
                    <li class="hex"></li>
                    
                </ul>
            </div>

        );
    }
}

export default Competition;
