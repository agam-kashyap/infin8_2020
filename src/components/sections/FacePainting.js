import React from 'react';
import '../css/blank.css'
import {ParallaxProvider} from 'react-scroll-parallax';
import {ParallaxBanner} from 'react-scroll-parallax';
import FooterNoMap from './Footerwithoutmap';

class FacePainting extends React.Component {
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
                                    <h1 data-shadow='Painting'>Painting</h1>
                                </div>
                            ),
                            image: require("../assets/FacePaint.jpg"),
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
        <p> Painting is an artist's means of expression, to pour their heart out on an empty canvas. A painting shows not only a picture, but the story behind it. Paint a story on your canvas. The sky is the limit for your creativity. The painting which conveys the strongest message will win.</p>
        <h2><ul type="disc"><li><b>Prize Money: &#8377;3500</b></li></ul></h2>
        <h2><ul type="disc"><li><b>Spot Registration will be applicable.</b></li></ul></h2>        
        <h2><ul type="disc"><li><b>Contact: </b></li></ul></h2>
        <br />
        <br />
        <br />
        <br />
    </div>

    {/* <FooterNoMap/> */}

            </div>

        );
    }
}
export default FacePainting;
