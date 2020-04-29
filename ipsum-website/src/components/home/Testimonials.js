import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import DefaultLogo from '../../assets/images/icons/default-logo.png';

class Testimonials extends Component {
    constructor(props) {
      super(props);
      this.state={
      }
    }

    render() {
      return (
        <section className="testimonials-section">
            <div className="preview bg-blue">
                <img src={DefaultLogo} alt="Profile"/>
                <h5>John Doe - Construcción los Robles</h5>
            </div>
            <div className="preview bg-skyblue">
                <img src={DefaultLogo} alt="Profile"/>
                <h5>Alfredo Moya - Marhnos</h5>
            </div>
            <div className="preview bg-second-blue">
                <img src={DefaultLogo} alt="Profile"/>
                <h5>Christopher Pérez - Grupo Lima</h5>
            </div>
            <div className="detail-text">
                <div className="card mb-4" >
                    <div className="row no-gutters">
                        <div className="col-md-2">
                            <div className="cont-card-img">
                                <img src={DefaultLogo} className="card-img"  alt="cuestionario" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title mb-1 text-blue">Christopher Pérez </h5>
                                <p className="card-text text-blue">Project Control Engineer - Grupo Lima</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p>Mollit voluptate nostrud sint id cillum proident mollit nulla elit Lorem aliqua magna. Excepteur officia nostrud laboris nulla ipsum sit deserunt. Cupidatat commodo laborum ea laborum cupidatat deserunt ex irure veniam nisi ad nisi id.</p>
                <div className="text-right">
                    <a className="main-btn orange-btn"><span>Download Case of Study</span></a>
                </div>
            </div>
        </section>
      );
    }
  }
export default Testimonials;