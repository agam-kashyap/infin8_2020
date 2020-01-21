import React from 'react';
import '../css/blank.css'
import {ParallaxProvider} from 'react-scroll-parallax';
import {ParallaxBanner} from 'react-scroll-parallax';
import FooterNoMap from './Footerwithoutmap';

class SING extends React.Component {
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
                                    <h1 data-shadow = 'Swaraag'>Swaraag</h1>
                                </div>
                            ),
                            image: require("../assets/sing2.jpg"),
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
        <h2> The best way to express yourself is music” and what’s a better way to do that
than to make that music yourself? The one who sings knows no boundaries
but only the joy of expression - the joy that follows a song felt from the heart
and sung from the soul.</h2>
        <p>Swaraag, The Solo Singing Competition is a great platform for music
enthusiasts to showcase their vocal prowess.</p>
        <h2>General Rules </h2> 
        <ul type = "disc">
            <li>Participant is free to sing any English or Hindi song.</li>
            <li>A maximum of 5 minutes will be given to each candidate. Exceeding the
time may lead to deduction in marks.</li>
            <li>Participants must carry their own instrument or instrumental music/
karaoke.</li>
            <li>The decision of the organizers regarding the final line-up would be
considered absolute.</li>
            <li>Participants will not be allowed to refer to the lyrics while singing.</li>
            <li>Choice of song is open to the participants but the song should not have
any slangs or derogatory language.</li>
            <li>Decision by jury will be final and binding.</li>
            <li>Music on mobile phone will not be accepted.</li>
            <li>Judges will use the following criteria to evaluate participants:</li>
            <br />
            <ul type =  "circle">
                <li>Lyrics and Pitch: 10 marks</li>
                <li>Presentation and Song selection, Use of Props (if any): 10 marks</li>
                <li>Confidence and Stage Presence, Time Factor: 10 mark</li>
            </ul>

            <ul type="disc"><li><b>Prizes: &#8377;5000</b></li></ul>
        </ul>  

        
        <br />
        <br />
        <a href = "https://docs.google.com/forms/d/e/1FAIpQLSfH7mqHW4bdL7rF2bShjenIkwBOZzcehb4WQe5rJP1OxKctKw/viewform"><button class = "button button1">Register</button></a>
        <br />
        <br />
    </div>
                    <FooterNoMap/>
            </div>

        );
    }
}
export default SING;
