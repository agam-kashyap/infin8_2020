import React from 'react';
import '../css/blank.css'
import {ParallaxProvider} from 'react-scroll-parallax';
import {ParallaxBanner} from 'react-scroll-parallax';

class EDM extends React.Component {
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
                            image: require("../assets/candice.jpeg"),
                            amount: 0.5,
                            expanded: false,
                        },

                    ]}

                    style = {{ width : '100vw', height: '100vh'}}
            >
                
            </ParallaxBanner>
            </ParallaxProvider>    
                
            </div>
            </div>

            </div>

        );
    }
}
export default EDM;
