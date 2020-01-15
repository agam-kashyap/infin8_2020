import React, {Component} from 'react';
import Iframe from 'react-iframe'
import "../css/Location.css";
import { Col, Row } from 'antd';

class Location extends React.Component {
  render() {
    return(
      <div>
        <Row>
          <Col xs={12} md={12} sm={12}>
          <h2 style={{color: "#fff"}}>Event Location</h2>
                    <br></br>
                    <address>
                        <p style={{color: "#fff"}}>
                            26/C, Hosur Road,Electronics City Phase 1, Electronic City
                            <br />
                            Karnataka,India.
                            <br />
                            560100
                        </p>
                    </address>
          </Col>
          <Col  xs={12} md={12} sm={12}>
          <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.97716725604!2d77.66103764976539!3d12.844751190894804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae135aeb7f340f%3A0x3ad86af40d2ac611!2sInternational+Institute+of+Information+Technology+Bangalore!5e0!3m2!1sen!2sin!4v1552580936073"
              width="100%" height="100%" styles={{border: "0"}} allowfullscreen></Iframe>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Location;