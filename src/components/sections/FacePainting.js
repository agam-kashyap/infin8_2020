import React from 'react';
import { Carousel } from 'antd';
import '../css/blank.css'
import {ParallaxProvider} from 'react-scroll-parallax';
import {ParallaxBanner} from 'react-scroll-parallax';

class Blank extends React.Component {
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
                                    <h1> Face painting</h1>
                                </div>
                            ),
                            image: require("../assets/dance2.jpg"),
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
        <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>

            </div>

        );
    }
}
export default Blank;
