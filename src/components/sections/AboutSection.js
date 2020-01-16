import React from 'react';
import '../css/about.css';

class About extends React.Component {
    render() {
        return(
            <div>
            <br />
           <div className="outer-container">
                <div className="image-container">
                    <img className = "containImage" src={require('../assets/dance1.jpg')} alt="infin8"/>
                </div>
                <div className="text-container">
                    <p>Infin8 is the annual Cultural Fest of IIIT Bangalore. The
fifth iteration of Infin8 has numerous live events,
workshops and a multitude of contests, with the main
attractions being the Battle of Bands and EDM Night
featuring Candice Redding & Kalpanik Bass.</p>
                </div>
           </div>
           </div>
        );
    }
}
export default About;