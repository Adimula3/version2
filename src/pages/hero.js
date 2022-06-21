import React from "react";
import {Col, Row} from "react-bootstrap";

function Hero () {
    return (
        <div className="hero">
           <div>
               <Row>
                   <Col lg={6}>
                       <img src={require('../assets/angelo.jpeg')} alt="" height="600" width="550"/>
                   </Col>
                   <Col lg={6}>
                       <div className="hero-text">
                           <h2>Transform Your Business Online </h2>
                           <p>Invest in Wears</p>
                           <button type="button" className="btn btn-dark">Buy now</button>
                       </div>
                       <div className="mini-hero">
                                   <img className="image" src={require('../assets/edho.jpeg')} height="180" width="180" alt=""/>
                                   <img className="image" src={require('../assets/alisha.jpeg')}  height="180" width="180" alt=""/>
                                   <img className="image" src={require('../assets/billy.jpeg')}  height="180" width="180" alt=""/>
                       </div>
                   </Col>
               </Row>
           </div>
        </div>
    );
}

export default Hero;
