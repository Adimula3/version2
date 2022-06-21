import React from "react";
import {Col, Form, Row} from "react-bootstrap";

function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <h2>Contact</h2>
                        <div>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Your Name" name="name"/>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <input className="form-control" type="email" placeholder="Your Email" name="email"/>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="form-group">
                                    <textarea  className="form-control" cols="30" rows="5"  placeholder="Message" name="message"></textarea>
                                </div>
                                <div className="button-center">
                                    <button type="submit" className="button">Submit</button>
                                </div>

                            </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
