import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import '../css/Event.css';

export default function App() {
    return(
        <div>
            <ul id= "hexGrid" class= "clr">
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