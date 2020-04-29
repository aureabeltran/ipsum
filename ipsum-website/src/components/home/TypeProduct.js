import React, { Component } from 'react';
import DefaultLogo from '../../assets/images/icons/default-logo.png';
import first_carousel from '../../assets/images/slider/first.jpg';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import flag from '../../assets/images/chilean.jpg';

class TypeProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }

    render() {
      return (
        <main>
            <section className="default-section bg-download">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="icons-container">
                                <button><img src={DefaultLogo} alt="logo" /> <h5>Commercial</h5> </button>
                                <button><img src={DefaultLogo} alt="logo" /> <h5>Industrial</h5> </button>
                                <button><img src={DefaultLogo} alt="logo" /> <h5>Healthcare</h5> </button>
                                <button><img src={DefaultLogo} alt="logo" /> <h5>Residential</h5> </button>
                                <button><img src={DefaultLogo} alt="logo" /> <h5>Minning</h5> </button>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <h3 className="mb-5 text-center">Tell us more about your projects. <span className="text-orange">We're here to help.</span></h3>
                            <h5 className="mb-5">Please tell us little bit more so we can assess you in the best way possible. Also, we´d love send you. User Cases and Videos Suited for your type of company and projects.</h5>
                        </div>
                        <div className="col-md-12 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 text-center">
                            <Form>
                                <div className="row">
                                    <div className="col-1">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <img src={flag} alt="flag"/>
                                            </Dropdown.Toggle>
                                        
                                            <Dropdown.Menu>
                                                <img src={flag} alt="flag"/>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="col-6">
                                        <Form.Group controlId="area">
                                            <Form.Control as="select">
                                            <option>Commercial</option>
                                            <option>Industrial</option>
                                            <option>Healthcare</option>
                                            <option>Residential</option>
                                            <option>Minning</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                    <div className="col-2">
                                        <Form.Group controlId="exampleForm.ControlSelect2">
                                            <Form.Control as="select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                    <div className="col-3">
                                        <button className="main-btn orange-btn">Download Case</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
      );
    }
  }
export default TypeProduct;