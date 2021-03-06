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
                                    <h1 data-shadow = 'Curtain Call'>Curtain Call</h1>
                                </div>
                            ),
                            image: require("../assets/stageplay2.jpeg"),
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
        <h2> "All the world's a stage" is what Shakespeare believed.<b> Curtain Call</b> - The stage play
            competition seeks if you have what it takes to make the stage your world.
        </h2>
    </div>
                    <FooterNoMap/>
            </div>

        );
    }
}
export default Stage;
