import React, {Component} from 'react';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import Pin from './Pin'

const TOKEN = 'pk.eyJ1IjoiYWdhbS1rYXNoeWFwIiwiYSI6ImNrNHBvMGR6ejBodGUzbHAxNjR5ODN3a28ifQ.nOBYQvNGFZgXlMhMum9QHQ'; // Set your mapbox token here

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

export default class Location extends Component {


    constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 12.8447999,
        longitude: 77.66323896266928,
        zoom: 15,
        bearing: 0,
        pitch: 0,
        width: 50,
        height: 50,
      },
      popupInfo: "Blah Blah"
    };
    this.renderPopup = this.renderPopup.bind(this)
  }
renderPopup(){
    return this.state.popupInfo && (
      <Popup tipSize={5}
        anchor="bottom-right"
        longitude={this.state.popupInfo.state.longitude}
        latitude={this.state.popupInfo.state.latitude}
        onClose={() => this.setState({popupInfo: null})}
        closeOnClick={true}>
        <p>"Bleh Bleh"</p>
      </Popup>
    )
  }
render() {
    const {viewport} = this.state;
    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/agam-kashyap/ck4ppvyzc40xg1dqlnra1aki9"
        mapboxApiAccessToken={TOKEN} >
        {/* {markers} */}
        {this.renderPopup()}
        <div className="nav" style={navStyle}>
          <NavigationControl/>
          <Marker longitude={77.66323896266928} latitude={12.8447999}>
            <Pin onClick={() => this.setState({popupInfo: "popupInfo"})}/>
          </Marker>
          </div>
      </MapGL>
    );
  }
}