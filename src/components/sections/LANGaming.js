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
                                    <h1>Last Man Standing</h1>
                                </div>
                            ),
                            image: require("../assets/pubg1.jpg"),
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
friends.
PUBG, CS: GO, FIFA, COD. Take your favourite pick and decimate your opponents. </p>
        <h2>Call of Duty Mobile</h2>
        <ul type = "disc">
        <br />
            <li><h3>Registration Details</h3></li>    
            <ul type="circle">
                <li>Entry fees: </li>
                <li>Team Size: upto 5 per team.</li>
                <li>Game Type: </li>
            </ul>
            <br />
            <li><h3>Rules and Regulations</h3></li>
            <ul type = "circle">    
                <li>No emulators, only mobile.</li>
                <li>No mods.</li>
                <li>No peeping or any other malpractice.</li>
                <li>Players found indulging in any of the above malpractices will be disqualified instantly.</li>            
                <li>All team players must be present at the place of competition to be allowed to participate.</li>
            </ul> 
            <br />
            <li><h3>Prize Distribution</h3></li>
            <ul type = "circle">    
                <li>xxx</li>
            </ul>
        </ul>
        
        <h2>CS:GO</h2>
        <ul type = "disc">
        <br />
            <li><h3>Registration Details</h3></li>    
            <ul type="circle">
                <li>Entry fees: </li>
                <li>Team Size: upto 5 per team.</li>
                <li>Game Type: Competitive</li>
            </ul>
            <br />
            <li><h3>Rules and Regulations</h3></li>
            <ul type = "circle">    
                <li>No mods or cheats.</li>
                <li>No peeping or any other malpractice.</li>
                <li>Players found indulging in any of the above malpractices will be disqualified instantly.</li>            
                <li>All team players must be present at the place of competition to be allowed to participate.</li>
            </ul> 
            <br />
            <li><h3>Prize Distribution</h3></li>
            <ul type = "circle">    
                <li>xxx</li>
            </ul>
        </ul>

        <h2>PUBG</h2>
        <h3> Solo </h3>
        <ul type = "disc">
        <br />
            <li><h3>Registration Details</h3></li>    
            <ul type="circle">
                <li>Entry fees: </li>
                <li>Team Size: 1</li>
                <li>Game Type: Battle Royale</li>
            </ul>
            <br />
            <li><h3>Rules and Regulations</h3></li>
            <ul type = "circle">    
                <li>No emulators, only mobile.</li>
                <li>No mods.</li>
                <li>No peeping or any other malpractice.</li>
                <li>Players found indulging in any of the above malpractices will be disqualified instantly.</li>            
                <li>All team players must be present at the place of competition to be allowed to participate.</li>
            </ul> 
            <br />
            <li><h3>Prize Distribution</h3></li>
            <ul type = "circle">    
                <li>xxx</li>
            </ul>
        </ul>

        <h3> Duo </h3>
        <ul type = "disc">
        <br />
            <li><h3>Registration Details</h3></li>    
            <ul type="circle">
                <li>Entry fees: </li>
                <li>Team Size: 2</li>
                <li>Game Type: Battle Royale</li>
            </ul>
            <br />
            <li><h3>Rules and Regulations</h3></li>
            <ul type = "circle">    
                <li>No emulators, only mobile.</li>
                <li>No mods.</li>
                <li>No peeping or any other malpractice.</li>
                <li>Players found indulging in any of the above malpractices will be disqualified instantly.</li>            
                <li>All team players must be present at the place of competition to be allowed to participate.</li>
            </ul> 
            <br />
            <li><h3>Prize Distribution</h3></li>
            <ul type = "circle">    
                <li>xxx</li>
            </ul>
        </ul>

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
                <li>No emulators, only mobile.</li>
                <li>No mods.</li>
                <li>No peeping or any other malpractice.</li>
                <li>Players found indulging in any of the above malpractices will be disqualified instantly.</li>            
                <li>All team players must be present at the place of competition to be allowed to participate.</li>
            </ul> 
            <br />
            <li><h3>Prize Distribution</h3></li>
            <ul type = "circle">    
                <li>xxx</li>
            </ul>
        </ul>

        <h2> FIFA </h2>
        <ul type = "disc">
            <li><h3>Registration Details</h3></li>    
            <ul type="circle">
                <li>Entry fees: </li>
                <li>Team Size: </li>
                <li>Game Type: </li>
            </ul>
            <br />
            <li><h3>Rules and Regulations</h3></li>
            <ul type = "circle">    
                <li>No mods or cheats.</li>
                <li>No peeping or any other malpractice.</li>
                <li>Players found indulging in any of the above malpractices will be disqualified instantly.</li>            
                <li>All team players must be present at the place of competition to be allowed to participate.</li>
            </ul> 
            <br />
            <li><h3>Prize Distribution</h3></li>
            <ul type = "circle">    
                <li>xxx</li>
            </ul>
        </ul>                           
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
