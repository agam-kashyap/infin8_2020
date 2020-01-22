import React from 'react';
import '../css/blank.css'
import {ParallaxProvider} from 'react-scroll-parallax';
import {ParallaxBanner} from 'react-scroll-parallax';
import FooterNoMap from './Footerwithoutmap';

class League extends React.Component {
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
                                    <h1>League of Fanatics</h1>
                                </div>
                            ),
                            image: require("../assets/marvel.jpg"),
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
            <p>Watching Anime, movies and reading novels all night long, only to get scolded by your parents "are they going to question you in these?" Well....yes! League Of Fanatics, an event where one's knowledge on your favourite novel/show is more valued than whether or not trump has truly been impeached and where otakus can finally shine (other than when they are isekaied of course 🙄)</p>
            <h2><ul type="disc"><li><b>Prize Money: &#8377;3500</b></li></ul></h2>
            <h2>Rules and Regulations</h2>
        <ul type = "disc">
            <li>Every team can have at least 1 and at most  4 members.</li>
            <li>The first round will be a screening round, after which 8 teams will be selected.</li>
            <li>Further details about the rounds will be told on the day of the event.</li>
            <li>The decision of the judges will be absolute and binding.</li>
            <li>Each participant should bring his/her valid college Id , otherwise your team will be disqualified.</li>
            <li>Any team caught cheating will suffer immediate disqualification..</li>
        </ul>
        <h2><ul type="disc"><li><b>Registration deadline: 4th February 2020</b></li></ul></h2>
            <br/>
            <br/>
            <br/>
            
            <a href = "https://docs.google.com/forms/d/1RzqxzdidIHKhtJBIRVaTi4L2jYTBwdTF6eNufl89N10/viewform?edit_requested=true"><button class = "button button1">Register</button></a>
        </div>
                    <FooterNoMap/>
            </div>

        );
    }
}
export default League;
