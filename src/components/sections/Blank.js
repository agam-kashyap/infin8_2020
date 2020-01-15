import React from 'react';
import { Parallax } from "react-parallax"
import "../css/about.css";

const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";


const image= "https://unsplash.com/photos/I4fDK4Fz_vw";
const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

class Blank extends React.Component {
    render() {
        return(
            <div style={styles}>
            <Parallax
              bgImage={image4}
              strength={500}
              renderLayer={percentage => (
                <div>
                  {/* <div
                    style={{
                      position: "absolute",
                      background: `rgba(255, 125, 0, ${percentage * 1})`,
                      left: "50%",
                      top: "50%",
                      borderRadius: "50%",
                      transform: "translate(-50%,-50%)",
                      width: percentage * 500,
                      height: percentage * 500
                    }}
                  /> */}
                </div>
              )}
            >
              <div style={{ height: "150vh" }}>
                <div style={insideStyles}>renderProp</div>
              </div>
            </Parallax>
            <div className="text-container">
                    <p>Lorem ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        );
    }
}

export default Blank;