import React from 'react';
import '../css/blank.css'
import FooterNoMap from './Footerwithoutmap';
class EDM extends React.Component {
    render() {
        return(
            <div>
            
                <div className="edmPoster">
                    <img src={require("../assets/candice.jpeg")}/>
                </div>
                <div className="edmbutton">
                    <a href = "https://docs.google.com/forms/d/1t7lp_KaEXKBQFHbVTp_-2PZ5xj-TH-xcaF-HYLXeGck/edit">
                        <button class = "button2 button2">Register</button>
                    </a>
                </div>
                <FooterNoMap/>
            </div>
        );
    }
}
export default EDM;
