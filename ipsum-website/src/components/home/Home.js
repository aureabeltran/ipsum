import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import first_carousel from '../../assets/images/slider/first.jpg';
import devices from '../../assets/images/devices-3.png';
import imgDefault from '../../assets/images/default.png';
import DefaultLogo from '../../assets/images/icons/default-logo.png';
import TypeProduct from './TypeProduct';
import Testimonials from './Testimonials';
import Map from './Map';
import { Link, animateScroll as scroll } from "react-scroll";

class Home extends Component {
    constructor(props) {
      super(props);
      this.state={
        slider: [{img: first_carousel, title: 'Plan better. Build on time.', bajada: 'Lean scheduling and planning software for the west generation of builders, by builders.', first_button: 'Know more', second_button: 'Ask for Demo'}, {img: first_carousel, title: 'Plan better. Build on time.', bajada: 'Lean scheduling and planning software for the west generation of builders, by builders.', first_button: 'Know more', first_link:'', second_link: '', second_button: 'Ask for Demo'}]
      }
    }

    render() {
      return (
        <main>
            <section className="main-slider">
                <Carousel indicators={false}>
                    {
                        this.state.slider.map((item, index)=>
                            <Carousel.Item key={index}>
                                <img
                                className="img-fluid"
                                src={item.img}
                                alt={index + ' slide'}
                                />
                                <Carousel.Caption>
                                    <h1>{item.title}</h1>
                                    <h4>{item.bajada}</h4>
                                    <a href="/" className="main-btn blue-btn"><span>{item.first_button}</span></a>
                                    <a href="/" className="main-btn orange-btn"><span>{item.second_button}</span></a>
                                    <Link to="first" className="btn-scroll" smooth={true} ><i className="fas fa-chevron-circle-down"></i></Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    }
                </Carousel>
            </section>
            <section className="container default-section" id="first">
                <div className="row">
                    <div className="col-md-12 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <h3 className="mb-4 text-center">Take your Lean and BIM practices to the next level</h3>
                        <hr className="orange mb-5" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-xl-6 col-lg-6">
                        <img src={devices} className="img-fluid" alt="devices"/>
                    </div>
                    <div className="col-md-12 col-xl-6 col-lg-6">
                        <h4 className="text-blue">Lean Construction</h4>
                        <p className="mb-2">Redesigned werkflow to implement Lean methodologies properly, faster and easier.</p>
                        <h4 className="text-blue">Quality Management</h4>
                        <p className="mb-2">Connected QA/QC checklist with your schedule, allowing to cress powerful data.</p>
                        <h4 className="text-blue">BIM 4D</h4>
                        <p className="mb-2">Import your model and link your schedule hassle-free and have your model up-to-date.</p>
                    </div>
                </div>
            </section>
            <Map />
            <section className="default-section container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <Card>
                            <Card.Img variant="top" src={DefaultLogo} alt="Lean scheduling"/>
                            <Card.Body>
                                <Card.Title className="text-blue">Lean scheduling</Card.Title>
                                <Card.Text>
                                    Qui culpa eu fugiat proident cupidatat nisi. Aliqua nisi ullamco excepteur quis veniam proident non magna sit quis.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <Card>
                            <Card.Img variant="top" src={DefaultLogo} alt="Lean scheduling"/>
                            <Card.Body>
                                <Card.Title className="text-blue">Planning Kanban</Card.Title>
                                <Card.Text>
                                    Qui culpa eu fugiat proident cupidatat nisi. Aliqua nisi ullamco excepteur quis veniam proident non magna sit quis.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <Card>
                            <Card.Img variant="top" src={DefaultLogo} alt="Lean scheduling"/>
                            <Card.Body>
                                <Card.Title className="text-blue">Real-time Analitycs</Card.Title>
                                <Card.Text>
                                    Qui culpa eu fugiat proident cupidatat nisi. Aliqua nisi ullamco excepteur quis veniam proident non magna sit quis.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="overlay-blue building-section default-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="mb-5"><span className="text-orange">Integrated</span> with the plataforms you need.</h3>
                        </div>
                        <div className="col-md-12 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 text-center">
                            <div className="logo-container">
                                <img src={DefaultLogo} alt="logo" />
                                <img src={DefaultLogo} alt="logo" />
                                <img src={DefaultLogo} alt="logo" />
                                <img src={DefaultLogo} alt="logo" />
                            </div>
                            <h6>Need an integration ? <b>Tell us what you need!</b></h6>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials />
            <section className="default-section partners">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 text-center">
                            <h3 className="mb-4 text-center">You're in good hands</h3>
                            <hr className="orange mb-5"/> 
                            <p>Non exercitation reprehenderit nulla Lorem. Velit aliqua voluptate elit laborum officia exercitation reprehenderit cupidatat do aute nisi consectetur eu. </p>
                        </div>
                        <div className="col-md-12 col-lg-|0 offset-lg-1 col-xl-10 offset-xl-1">
                            <div className="logo-container">
                                <img src={DefaultLogo} alt="logo" />
                                <img src={DefaultLogo} alt="logo" />
                                <img src={DefaultLogo} alt="logo" />
                                <img src={DefaultLogo} alt="logo" />
                                <img src={DefaultLogo} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="default-section get-started bg-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 text-center">
                            <h3 className="mb-5 text-center">It´s time to prioritize <span className="text-orange">Project planning</span></h3>
                            <a href="/" className="main-btn orange-btn mb-5"><span>Get started</span></a>
                            <h5>Don´t forget to ask your demo!</h5>
                        </div>
                    </div>
                </div>
            </section>
            <TypeProduct />
            <section className="default-section news-section">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h1 className="text-blue">News</h1>
                            <hr className="orange mb-5"/>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-xl-7 col-lg-7">
                            <article>
                                <div className="overlay-effect">
                                </div>
                                <img src={imgDefault} alt="news" className="img-fluid"/>
                            </article>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="row">
                                <div className="col-xl-12">
                                    <article className="new-sm">
                                        <div className="overlay-effect">
                                        </div>
                                        <img src={imgDefault} alt="news" className="img-fluid"/>
                                    </article>
                                </div>
                                <div className="col-xl-12">
                                    <article className="new-sm">
                                        <div className="overlay-effect">
                                        </div>
                                        <img src={imgDefault} alt="news" className="img-fluid"/>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-right">
                            <a href="/" className="text-blue charge">More news</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
      );
    }
  }
export default Home;