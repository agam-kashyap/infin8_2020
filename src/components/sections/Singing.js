import React from 'react';
import '../css/blank.css'
import {ParallaxProvider} from 'react-scroll-parallax';
import {ParallaxBanner} from 'react-scroll-parallax';

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
                                    <h1 data-shadow = 'Solo Singing'>Solo Singing</h1>
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
        <p>Swaraag '20 is undoubtedly going to be bigger than ever before and so are
going to be the cash prizes for our top 3 winners:</p>
        <ul type = "disc">
            <li>1st:</li>
            <li>2nd:</li>
            <li>3rd:</li>
        </ul>
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
        </ul>  

        
        <br />
        <br />
        <button class = "button button1"><a href = "#">Register</a></button>
        <br />
        <br />
    </div>

            </div>

        );
    }
}
export default SING;
