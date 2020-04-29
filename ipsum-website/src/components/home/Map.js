import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import imgDefault from '../../assets/images/default.png';
import DefaultLogo from '../../assets/images/icons/default-logo.png';
import {GoogleApiWrapper} from 'google-maps-react';

class Map extends Component {
    constructor(props) {
      super(props);
      this.state={
      }
    }

    render() {
      return (
        <section className="map-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <Carousel indicators={false} interval={null} prevIcon={<i className="fas fa-chevron-circle-left"></i>} nextIcon={<i className="fas fa-chevron-circle-right"></i>} >
                            <Carousel.Item>
                                <Card>
                                    <Card.Img variant="top" src={imgDefault} alt="sucursal"/>
                                    <Card.Body>
                                        <Card.Title>Success Case - Grupo Lima</Card.Title>
                                        <hr  className="orange"/>
                                        <Card.Text>
                                            Qui culpa eu fugiat proident cupidatat nisi. Aliqua nisi ullamco excepteur quis veniam proident non magna sit quis.
                                        </Card.Text>
                                        <div className="text-center">
                                            <button className="main-btn orange-btn mx-auto">
                                                <span>Read more</span>
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card>
                                    <Card.Img variant="top" src={imgDefault} alt="sucursal"/>
                                    <Card.Body>
                                        <Card.Title>Success Case - Grupo Lima</Card.Title>
                                        <hr  className="orange"/>
                                        <Card.Text>
                                            Qui culpa eu fugiat proident cupidatat nisi. Aliqua nisi ullamco excepteur quis veniam proident non magna sit quis.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-6">
                        <div className="map-container">
                            <div className="mark-container">
                                <div className="mark">
                                    <img src={DefaultLogo} alt="logo"/>
                                    <a href="#/" className="main-btn orange-btn">
                                        <span>Read more success case</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }
export default Map;