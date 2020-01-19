import React from 'react';
import '../css/blank.css'
import {ParallaxProvider} from 'react-scroll-parallax';
import {ParallaxBanner} from 'react-scroll-parallax';

class LAN extends React.Component {
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
                                    <h1>Last Man Standing</h1>
                                </div>
                            ),
                            image: require("../assets/pubg2.jpg"),
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
        <h1> Some players play like pros, whereas some play just to hang out with their bros.</h1>
        <p>If any of you consider yourself as gaming pros and want to try your hand at winning the grand prize or if
you just feel like chilling out with your bros, then infin8’s Last Man Standing is the perfect event for you,
where you can experience excitement, like never before, in this nail-biting but nevertheless satisfying
gaming atmosphere.
Here you can either finally show your peers who’s the boss or just relax and have some fun with your
friends. </p>
        
        <h2>PUBG</h2>
        <h3> Squad </h3>
        <ul type = "disc">
            <li><h3>Registration Details</h3></li>    
            <ul type="circle">
                <li>Entry fees: </li>
                <li>Team Size: upto 4</li>
                <li>Game Type: Battle Royale</li>
            </ul>
            <br />
            <li><h3>Rules and Regulations</h3></li>
            <ul type = "circle">    
                <li> It is strictly pubg mobile(no emulators).</li>
                <li>No mods allowed.</li>
                <li>Participants must carry their own mobile.</li>
                <li>Android, ios and any other mobile devices are allowed.</li>            
                <li>Registered members must bring their college id for verification.</li>
            </ul> 
            <br />
            <li><h3>Prize Distribution</h3></li>
            <ul type = "circle">    
                <li>&#8377;6000 will be awarded to the best performing team.</li>
                <li>&#8377;1000 will be awarded to the player with most kills.</li>
            </ul>
            <li><h3>Registration Deadline</h3></li>
            <ul type = "circle">    
                <li>6th February 2020</li>
            </ul>
            <li><h3>Competition Date</h3></li>
            <ul type = "circle">    
                <li>8th February 2020</li>
            </ul>
        </ul>               
        <br />
        <br />
        <a href = "https://docs.google.com/forms/d/e/1FAIpQLSe3lQOK73mhUuEqzqAts-1es3zZDjDfq948vJmlTZGiatYFeg/viewform?vc=0&c=0&w=1"><button class = "button button1">Register</button></a>
        <br />
        <br />
    </div>

            </div>

        );
    }
}
export default LAN;
