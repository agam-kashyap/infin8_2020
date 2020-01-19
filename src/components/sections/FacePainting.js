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
                                    <h1 data-shadow='Face painting'>Face painting</h1>
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
        <p> The Japanese say you have three faces. The first face, you show to the world. The second face, you show to your close
friends, and your family. The third face, you never show anyone.”
Face painting is all about giving that chance to bring out the other face for everyone to see, be it of any person, idea or even
a statement which has been made or would like to be made.
It is an opportunity, where one gets to display their idea, creativity and painting skills while at the same time have fun
scribbling on your friend’s face.</p>
        <br />
        <br />
        <button class = "button button1"><a href = "#">Register</a></button>
        <br />
        <br />
    </div>

    {/* <FooterNoMap/> */}

            </div>

        );
    }
}
export default FacePainting;
