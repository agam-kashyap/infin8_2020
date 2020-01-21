import React from 'react';
import '../css/blank.css'
import {ParallaxProvider} from 'react-scroll-parallax';
import {ParallaxBanner} from 'react-scroll-parallax';

class EDM extends React.Component {
    render() {
        return(
            <div>
            
                <div className="edmPoster">
                    <img src={require("../assets/candice.jpeg")}/>
                </div>
                <div>
                    <a className="edmbutton" href = "https://docs.google.com/forms/d/1t7lp_KaEXKBQFHbVTp_-2PZ5xj-TH-xcaF-HYLXeGck/edit"><button class = "button button2">Register</button></a>
                </div>
            </div>
        );
    }
}
export default EDM;
