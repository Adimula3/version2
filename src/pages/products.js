import React from "react";
import {Col, Row} from "react-bootstrap";

function Products() {
    return (
      <div className="products">
          <div className="container">
              <h2>Our Beautiful Products. Available Now.</h2>
          </div>
          <Row>
              <Col lg={4}>
                  <div className="pro-texts">
                      <h3>Just for You.</h3>
                      <p>This is your Product section. It's a <br/>
                          great opportunity to showcase<br/>
                          your collection.</p>
                  </div>
                  <div className="content_img">
                      <img className="image2" src={require('../assets/billy.jpeg')} alt="" height="400" width="350"/>
                      <div><button type="button" className="btn btn-dark">Buy now</button></div>
                  </div>
              </Col>
              <Col lg={4}>
                  <div className="pro-texts">
                      <h3>Just for You.</h3>
                      <p>This is your Product section. It's a <br/>
                          great opportunity to showcase<br/>
                          your collection.</p>
                  </div>
                  <div className="content_img">
                      <img className="image2" src={require('../assets/angelo.jpeg')} alt="" height="400" width="350"/>
                      <div><button type="button" className="btn btn-dark">Buy now</button></div>
                  </div>
              </Col>
              <Col lg={4}>
                  <div className="pro-texts">
                      <h3>Just for You.</h3>
                      <p>This is your Product section. It's a <br/>
                          great opportunity to showcase<br/>
                          your collection.</p>
                  </div>
                  <div className="content_img">
                      <img className="image2" src={require('../assets/alisha.jpeg')} alt="" height="400" width="350"/>
                      <div><button type="button" className="btn btn-dark">Buy now</button></div>
                  </div>
              </Col>
          </Row>
      </div>
    );
}

export default Products;
