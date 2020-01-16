import React from 'react';
import '../css/blank.css'
import {ParallaxProvider} from 'react-scroll-parallax';
import {ParallaxBanner} from 'react-scroll-parallax';

class Euphony extends React.Component {
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
                                    <h1>Euphony</h1>
                                </div>
                            ),
                            image: require("../assets/bands2.jpg"),
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
        <p> Battle of bands, organised last year for the very first time, was an
immediate hit. Addressing our motive to make infin8 bigger, how can we
forget to add the most significant event of last year? We bring to you, our
very own - Battle of bands aka ​<b> Euphony</b>.</p>
        <p>Get ready to have the most fantastic evening of your lives. Bands from all
over Bengaluru will compete with each other for the title of the 'best band.'
Euphony will set a standard for many more years to come.</p>
        <p>This year, get ready for more rock and roll, more headbanging beats and
more prizes, with of course more of you!</p>
        <br />
        <h2>Rules and Regulations</h2>
        <ul type = "disc">
            <li>Songs can be of any Genre</li>
            <li>Bands are required to bring their instruments.</li>
            <li>Minimum of 3 people and a maximum of 7 can be part of a team.</li>
            <li>The usage of any pre-recorded music is not allowed.</li>
            <li>All bands must register online/offline before the commencement of the
competition.</li>
            <li>Decisions of the judges will be final and binding under all circumstances.</li>
            <li>A band will have a total of 10 minutes on stage.</li>
            <li>Exceeding the given time will lead to a penalty.</li>
        </ul>    
        <br />
        <br />
        <button class = "button button1"><a href = "/">Register</a></button>
        <br />
        <br />
    </div>

            </div>

        );
    }
}
export default Euphony;
