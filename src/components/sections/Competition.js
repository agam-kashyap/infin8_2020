import React from 'react';
import '../css/hexagon-comp.css'

class Competition extends React.Component {
    render() {
        return(
            <div>
                <ul id = "hexGrid" class = "clr">

                    <li class = "hex">
                            <a class="hexIn" href="#">
                                    <img src={require('../assets/pubg1.jpg')} />   
                                    <h1>LAN Gaming</h1> 
                                    <p>Brief Event Description Bla Bla Bla Bla</p>
                            </a> 
                    </li>

                    <li class = "hex">
                            <a class="hexIn" href="#">
                                    <img src={require("../assets/sing2.jpg")} />   
                                    <h1>Individual Singing</h1> 
                                    <p>Brief Event Description Bla Bla Bla Bla</p>
                            </a> 
                    </li>

                    <li class = "hex">
                            <a class="hexIn" href="#">
                                    <img src={require('../assets/bands2.jpg')} />   
                                    <h1>Battle of Bands</h1> 
                                    <p>Brief Event Description Bla Bla Bla Bla</p>
                            </a> 
                    </li>

                    <li class = "hex">
                            <a class="hexIn" href="#">
                                    <img src={require("../assets/fanatics.jpg")} />   
                                    <h1>League of Fanatics</h1> 
                                    <p>Brief Event Description Bla Bla Bla Bla</p>
                            </a> 
                    </li>

                    <li class = "hex">
                            <a class="hexIn" href="#">
                                    <img src={require("../assets/dance2.jpg")} />   
                                    <h1>Dance off</h1> 
                                    <p>Brief Event Description Bla Bla Bla Bla</p>
                            </a> 
                    </li>

                    <li class = "hex">
                            <a class="hexIn" href="#">
                                    <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" />   
                                    <h1>Event Name</h1> 
                                    <p>Brief Event Description Bla Bla Bla Bla</p>
                            </a> 
                    </li>

                    <li class = "hex">
                            <a class="hexIn" href="#">
                                    <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" />   
                                    <h1>Event Name</h1> 
                                    <p>Brief Event Description Bla Bla Bla Bla</p>
                            </a> 
                    </li>
                </ul>
            </div>

        );
    }
}

export default Competition;