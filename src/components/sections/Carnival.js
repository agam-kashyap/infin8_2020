import React from 'react';
import '../css/blank.css'
import {ParallaxProvider} from 'react-scroll-parallax';
import {ParallaxBanner} from 'react-scroll-parallax';
import FooterNoMap from './Footerwithoutmap';

class Stage extends React.Component {
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
                                    <h1 data-shadow = 'Informals'>Informals</h1>
                                </div>
                            ),
                            image: require("../assets/streetfair2.jpeg"),
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
        <h2> 
            <ul type = "disc">
                <li>Mela</li>
                <li>Gulp & Gobble</li>
                <li>Twister</li>
                <li>Casino</li>
                <li>Jamming Session</li>
                <li>Midnight Parties</li>
                <li>Open Mic</li>
                <li>Slam Poetry</li>
                <li>Board Games</li>
                <li>Shooting</li>
                <li>Bull Riding</li>
                <li>Zorbing</li>
                <li>Air Hockey</li>
            </ul>
        </h2>
        
        <br />
        <br />
        <br />
        <br />
    </div>
                    <FooterNoMap/>
            </div>

        );
    }
}
export default Stage;
