import React from 'react';
import { Carousel } from 'antd';
import '../css/blank.css'
import {ParallaxProvider} from 'react-scroll-parallax';
import {ParallaxBanner} from 'react-scroll-parallax';

class FashionShow extends React.Component {
    render() {
        return(
            <div>
            <div className="vertical">
            <div className= "bannerContainer">
            <ParallaxProvider>
            <ParallaxBanner
                    className=" bannerBg"
                    layers={[
                        {   
                            children: (
                                <div className = "customChild overlay" >
                                    <h1>Ramp It Up</h1>
                                </div>
                            ),
                            image: require("../assets/fashion.jpg"),
                            amount: 0.5,
                            expanded: false,
                        },

                    ]}

                    style = {{ height : '100vh'}}
            >
                
            </ParallaxBanner>
            </ParallaxProvider>    
                
            </div>
        </div>
        <div className = "content">
        <p> RAMP IT UP - a competition where you would not only wear
fashionable clothes but also put your style quotient to test.
Walk with style and set the ramp afire!</p>
        <h2>General Rules</h2>
        <ul type =  "disc">
            <li> There are 3 options of attire: Indian, Western, and Office wear. You
are at liberty to choose any one of the above. </li>
            <li> Single ramp walk, There would be no Q&A round. </li>
            <li> All kinds of accessories and props are allowed. </li>
            <li> The decision of the judges is final and binding. </li>
            <li> <b>Judging criteria:</b> based on walk and outfit only.</li>
            <li> Last date of registration is 6th February 2020</li>
            <li> No requests for refund will be entertained. </li>
        </ul>
        <br />
        <br />
        <a href = "https://forms.gle/8vtm7J1fNRjENBJs7"><button class = "button button1">Register</button></a>
        <br />
        <br />
    </div>

            </div>

        );
    }
}
export default FashionShow;
