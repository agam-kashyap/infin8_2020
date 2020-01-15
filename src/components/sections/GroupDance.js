import React from 'react';
import { Carousel } from 'antd';
import '../css/blank.css'
import {ParallaxProvider} from 'react-scroll-parallax';
import {ParallaxBanner} from 'react-scroll-parallax';

class GroupDance extends React.Component {
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
                                <div className = "customChild overlay hindi" >
                                    <h1> नृत्यक्षेत्र  </h1>
                                </div>
                            ),
                            image: require("../assets/dance1.jpg"),
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
        <h1> To dance is to be out of yourself. Larger, more beautiful, more
powerful.</h1>
        <p>नृत्यक्षेत्र is one of the most awaited and
enigmatic cult events of IIIT Bangalore. The unparalleled energy
and the sizzling moves of the talented performers are bound to
steal your hearts away. </p>
        <h2>General Rules:</h2>
        <ul type="disc">
            <li> Time limit is 8 minutes for each performance.</li>
            <li>Negative marking for exceeding the time limit.</li>
            <li>Each team may have 6-12 members, including coordinators.</li>
            <li>Choice of songs is open to the participants.</li>
            <li>The participants are requested to bring two CDs/Pendrives to
avoid technical disturbance. Out of which, they are also
requested to submit one CD/Pendrive with the coordinator of
the event.(Music must be in .mp3 format)</li>
        <li>Dancers must always be ready to perform thirty minutes prior
to their scheduled time.</li>
        <li>No props will be provided by the coordinators. Participants
can carry their own props(insert maximum permissible
dimensions if required)</li>            
        <li>Dance performance should not convey any indecent
gestures.</li>
        <li>Rooms would be given for changing purpose.</li>
        <li>The participants will be judged on the basis of their rhythm,
formation, synchronisation, expressions, and costumes,
makeup, setup and overall effects.</li>
        <li>Decision of the judges will be final and binding.</li>
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
export default GroupDance;
