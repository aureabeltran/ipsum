import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../layout/Footer';
import Franco from '../../assets/images/about/franco.png';
import Martin from '../../assets/images/about/martin.png';
import Benjamin from '../../assets/images/about/benjamin.png';
import Alexis from '../../assets/images/about/alexis.png';
import Hernan from '../../assets/images/about/hernan.png';
import logoAu from '../../assets/images/news/logoau.png';
import ReactGA from 'react-ga';
import ScrollableAnchor ,{ configureAnchors }from 'react-scrollable-anchor';
import logo_1 from '../../assets/images/about-icons/1.png';
import logo_2 from '../../assets/images/about-icons/2.png';
import logo_3 from '../../assets/images/about-icons/3.png';
import logo_4 from '../../assets/images/about-icons/4.png';

configureAnchors({offset: -60, scrollDuration: 800})
class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            activated: 1,
            toggleform: false,
            hoverActive: 0,
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    toggleForm(e){
        this.setState({
            toggleform: !this.state.toggleform,
        })
    }

    render() {
        return (
            <main>
                <ScrollableAnchor id={'company'}>
                    <div> </div>
                </ScrollableAnchor>
                <section className="bg-about main-slider">
                    <div className="text-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                <ScrollAnimation animateOnce={true} animateIn="fadeIn" duration={1} delay={200}>
                                    <h1>Nuestra Compañía</h1>
                                </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="default-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-6 col-md-6">
                                <ScrollAnimation animateIn="fadeInLeft" duration={1} delay={500} animateOnce={true} >
                                    <img src={logoAu} alt="logo"  className="w-100"/>
                                </ScrollAnimation>
                            </div> 
                            <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-md-6 mb-5">
                                <ScrollAnimation animateIn="fadeIn" duration={1} delay={500} animateOnce={true} >
                                    <div className="align-text">
                                        <h1 className="mb-3">Somos<span className="text-blue"> IPSUM</span></h1>
                                        <p>Una empresa chilena nacida el 2014, con la misión de aportar a la mejora en la productividad de la industria nacional e internacional, 
                                        buscando lograr un impacto tanto económico como social, aportando así a la creación de verdaderas “smart cities”</p>
                                    </div>
                                </ScrollAnimation>
                            </div> 
                        </div>
                    </div>
                </section>
                <ScrollableAnchor id={'ourteam'}>
                    <div> </div>
                </ScrollableAnchor>
                <section className="bg-gray default-section about-section mb-0 bg-gray-vertical">
                    <div className="cont"><div className="gradient"></div></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-6 offset-lg-3 text-center">
                                <ScrollAnimation animateIn="fadeIn" duration={1} delay={500} animateOnce={true} >
                                    <h1 className="mb-3">Conoce nuestro<span className="text-blue"> equipo</span></h1>
                                    <p>Detrás de los grandes productos que se crean y el servicio por parte de nuestra empresa, 
                                    hay un gran equipo con experiencia en diferentes áreas y conocimientos necesarios para transformar la industria 
                                    de la construcción.</p>
                                </ScrollAnimation>
                            </div> 
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="col-lg-11 offset-lg-1">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6  mb-3">
                                <ScrollAnimation animateIn="fadeInUp" duration={1} delay={500} animateOnce={true} >
                                <div className="card" >
                                    <img src={Franco} alt="Franco Giaquinto" className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">Franco Giaquinto</h5>
                                        <p className="card-text">Founder & CEO</p>
                                        
                                    </div>
                                </div>
                                </ScrollAnimation>
                            </div>

                            <div className="col-lg-3 col-sm-6 offset-lg-1  mb-3">
                                <ScrollAnimation animateIn="fadeInUp" duration={1} delay={500} animateOnce={true} >
                                <div className="card" >
                                    <img src={Martin} alt="Martín Rojas" className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">Martín Rojas</h5>
                                        <p className="card-text">General Manager</p>
                                        
                                    </div>
                                </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-3 col-sm-6 offset-lg-1  mb-3">
                                <ScrollAnimation animateIn="fadeInUp" duration={1} delay={500} animateOnce={true} >
                                <div className="card" >
                                    <img src={Benjamin} alt="Benjamín Cofré" className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">Benjamín Cofré</h5>
                                        <p className="card-text">COO</p>
                                        
                                    </div>
                                </div>
                                </ScrollAnimation>
                            </div>       
                            <div className="col-lg-3 col-sm-6 offset-lg-2 mb-3">
                                <ScrollAnimation animateIn="fadeInUp" duration={1} delay={500} animateOnce={true} >
                                <div className="card" >
                                    <img src={Alexis} alt="Alexis Gatica" className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">Alexis Gatica</h5>
                                        <p className="card-text">Sales Manager</p>
                                        
                                    </div>
                                </div>
                                </ScrollAnimation>
                            </div>

                            <div className="col-lg-3 col-sm-6 offset-lg-1  mb-3">
                                <ScrollAnimation animateIn="fadeInUp" duration={1} delay={500} animateOnce={true} >
                                <div className="card" >
                                    <img src={Hernan} alt="Hernán Vargas" className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">Hernán Vargas</h5>
                                        <p className="card-text">Technical Lead</p>
                                        
                                    </div>
                                </div>
                                </ScrollAnimation>
                            </div>       
                        </div>
                        </div>
                    </div>
                    
                </section>
                <section className="default-section partners about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">
                                <div className="logo-container">
                                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={0} >
                                        <img src={logo_1}  alt="Wayra" />
                                    </ScrollAnimation>
                                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={200}>
                                        <img src={logo_2}  alt="Besalco" />
                                    </ScrollAnimation>
                                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={400}>
                                        <img src={logo_3}  alt="Besalco" />
                                    </ScrollAnimation>
                                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={600}>
                                        <img src={logo_4}  alt="Besalco" />
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <div style={{backgroundColor: '#f1f1f1'}}>
                    <Footer />
                </div>
                
            </main>
        );
    }
}
export default About;