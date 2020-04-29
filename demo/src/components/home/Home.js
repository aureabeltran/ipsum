import React, { Component } from 'react';
import Testimonials from './Testimonials';
import Sucursales from './Map';
import logo_7_1 from '../../assets/images/logos/besalco.png';
import logo_7_2 from '../../assets/images/logos/ingevec.png';
import logo_7_3 from '../../assets/images/logos/marnhos.png';
import logo_7_4 from '../../assets/images/logos/prodesa.png';
import logo_7_5 from '../../assets/images/logos/transelec.png';
import logo_7_1_c from '../../assets/images/logos/besalco-c.png';
import logo_7_2_c from '../../assets/images/logos/ingevec-c.png';
import logo_7_3_c from '../../assets/images/logos/marnhos-c.png';
import logo_7_4_c from '../../assets/images/logos/prodesa-c.png';
import logo_7_5_c from '../../assets/images/logos/transelec-c.png';
import ScrollAnimation from 'react-animate-on-scroll';
import gant1 from '../../assets/images/news/gant.png';
import gant2 from '../../assets/images/news/kanban.png';
import gant3 from '../../assets/images/news/bim.png';
import gant4 from '../../assets/images/news/dashboard.png';
import Footer from '../layout/Footer';
import DetailSection from './Detail.js';
import ReactPlayer from 'react-player';
import homevideo from '../../assets/multimedia/home.mp4';
import ContactForm from '../partials/ContactForm';
import CallToAction from '../partials/CallToAction';
import BCG from '../../assets/images/logos/bcg.png';
import CBI from '../../assets/images/logos/cbi.png';
import PlugNPlay from '../../assets/images/logos/plug-and-play.png';
import $ from 'jquery';
import ReactGA from 'react-ga';

import { Link } from 'react-scroll'
import ProplannerDetail from './ProplannerDetail';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            banner: {title: 'Planifica mejor. Construye en plazo.', bajada: 'Descubre una mejor manera de planificar y programar tu obra con una solución 100% pensada para la obra. De constructores para constructores.', first_button: 'Conoce más', second_button: 'Pide tu demo'},
            activated: 1,
            hoverActive: 0,
            toggleform: false,
            activeClass: 'fadeInUp animated',
            ProPlanner: [
                {'pharraph': 'Nuestra plataforma te permite importar tu proyecto directamente desde MS Project o Primavera P6 y trabajar la planificación  maestra, intermedia y semanal de la mejor manera desde nuestro módulo Gantt', 'image': gant1},
                {'pharraph': 'Nuestra plataforma te permite importar tu proyecto directamente desde MS Project o Primavera P6 y trabajar la planificación  maestra, intermedia y semanal de la mejor manera desde nuestro módulo Gantt', 'image': gant2},
                {'pharraph': 'Nuestra plataforma te permite importar tu proyecto directamente desde MS Project o Primavera P6 y trabajar la planificación  maestra, intermedia y semanal de la mejor manera desde nuestro módulo Gantt', 'image': gant3},
                {'pharraph': 'Nuestra plataforma te permite importar tu proyecto directamente desde MS Project o Primavera P6 y trabajar la planificación  maestra, intermedia y semanal de la mejor manera desde nuestro módulo Gantt', 'image': gant4}
            ],
            activeP: 'Nuestra plataforma te permite importar tu proyecto directamente desde MS Project o Primavera P6 y trabajar la planificación  maestra, intermedia y semanal de la mejor manera desde nuestro módulo Gantt',
            activeImage: gant1,
            isFirstTime: true,
            subiHastArriba: false,
            is_responsive: false
        }
    }

    componentDidMount(){
        ReactGA.pageview(window.location.pathname + window.location.search);
        let scrollTop = document.documentElement.scrollTop
        if( scrollTop < 10){
            this.setState({
                subiHastArriba: true
            })
        }
        let mobile = window.innerWidth;
        this.setState({
            is_responsive: mobile < 991 ? true : false
        })
    }

    componentWillUpdate(next, prev){
        let elHeight = document.getElementById('main-video').offsetHeight
        let scrollTop = document.documentElement.scrollTop
        if( scrollTop < 10 && prev.subiHastArriba !== true){
            this.setState({
                subiHastArriba: true
            })
        }
        if(this.state.subiHastArriba && scrollTop > 10 ){
            scrollTop = elHeight
            $('html, body').animate({
                scrollTop: elHeight
            }, 500)
        }
        if(scrollTop >= elHeight){
            if( prev.subiHastArriba !== false){
                this.setState({
                    subiHastArriba: false
                })
            }
        }
    }

    detectScroll(e){
        let elHeight = document.getElementById('main-video').offsetHeight
        $('html, body').animate({
            scrollTop: elHeight
        }, 800)
        console.log('mmmm, creo q aun no salgo')
    }

    toggleForm(e){
        ReactGA.event({
            category: 'Demo',
            action: 'Solicita Demo'
        });
        this.setState({
            toggleform: !this.state.toggleform,
            isFirstTime: false
        })
    }

    toggleProplanner(e){
        this.changeClass(e)
        this.setState({
            activated: e,
            activeClass: 'fadeOutDown animated'
        })
    }
    
    changeClass(e){
        setTimeout(() => {  
            this.setState({
                activeClass: 'fadeInUp animated',
                activeP: this.state.ProPlanner[e-1].pharraph,
                activeImage: this.state.ProPlanner[e-1].image
            })
        }, 0)
    }
    
    

    render() {
      return (
          <main>
                <section className="main-slider scroller" id="main-video" >
                    <ReactPlayer url={homevideo} playing loop controls={false} muted height={'auto'} className="video-container" playsinline/>
                    <div className="text-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-12 ">
                                <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" duration={1} delay={200}>
                                    <h1>{this.state.banner.title}</h1>
                                    <p className="text-light mb-md-5">Descubre una mejor manera de planificar y programar
                                    tu obra con una solución 100% pensada para la obra.
                                    Desde constructores, para constructores.
                                    </p>
                                    <a href="/proplanner" className="main-btn bordered-btn"><span>{this.state.banner.first_button}</span></a>
                                    <button onClick={(e)=>this.toggleForm(e)} className="main-btn orange-btn"><span>{this.state.banner.second_button}</span></button>
                                </ScrollAnimation>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center bajada" style={{position: 'relative', top: '100px'}}>
                                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={200}>
                                        <p className="mb-3 " style={{color: '#fff', marginBottom: '0', fontSize: '16px', opacity: '.7'}}>Top 100 Construction Tech Startups</p>
                                        <img src={BCG} alt="BCG" />
                                        <img src={CBI} alt="CBI" className=" ml-4 mr-3"/>
                                        <img src={PlugNPlay} alt="Plug and Play" />
                                    </ScrollAnimation>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-md-5" style={{position: 'relative', top: '100px'}}>
                                    <Link activeClass="active" style={{cursor: 'pointer'}} className="test1" to="test1" spy={true} smooth={true} duration={800} offset={92} ><i className="fas fa-chevron-down" aria-hidden="true" style={{color: "#fff"}}></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ProplannerDetail name="test1"/>
                <section className="default-section get-started bg-blue"  >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="mb-6 text-center">Es hora de priorizar la planificación de tu proyecto.</h3>
                            </div>    
                            <div className="col-md-12 text-center">
                                <span><button onClick={(e)=>this.toggleForm(e)} className="main-btn orange-btn mb-6">Pide tu demo</button></span>
                            </div>
                        </div>
                    </div>
                </section>
                <DetailSection />
                <section className="default-section partners">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 text-center">
                                <h1 className="mb-4 text-center"><span className="text-blue">Confían </span> en nosotros</h1>
                            </div>
                            <div className="col-md-12 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">
                                <div className="logo-container">
                                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={0} >
                                    <a href="http://www.besalco.cl/" target="_blank" rel="noopener noreferrer"><img src={this.state.hoverActive === 1 ? logo_7_1_c : logo_7_1} onMouseEnter={ ()=> this.setState({hoverActive: 1}) } onMouseLeave={ ()=> this.setState({hoverActive: 0}) } alt="Besalco" /></a>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={200}>
                                    <a href="https://www.ingevec.cl/" rel="noopener noreferrer" target="_blank"><img src={this.state.hoverActive === 2 ? logo_7_2_c : logo_7_2} onMouseEnter={ ()=> this.setState({hoverActive: 2}) } onMouseLeave={ ()=> this.setState({hoverActive: 0}) } alt="Ingevec" /></a>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={400}>
                                    <a href="https://www.marhnos.com.mx/" rel="noopener noreferrer" target="_blank"><img src={this.state.hoverActive === 3 ? logo_7_3_c : logo_7_3} onMouseEnter={ ()=> this.setState({hoverActive: 3}) } onMouseLeave={ ()=> this.setState({hoverActive: 0}) } alt="Marhnos"  /></a>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={600}>
                                    <a href="http://www.prodesa.com/" rel="noopener noreferrer" target="_blank"><img src={this.state.hoverActive === 4 ? logo_7_4_c : logo_7_4} onMouseEnter={ ()=> this.setState({hoverActive: 4}) } onMouseLeave={ ()=> this.setState({hoverActive: 0}) } alt="Prodesa" /></a>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={800}>
                                    <a href="https://www.transelec.cl/" rel="noopener noreferrer" target="_blank"><img src={this.state.hoverActive === 5 ? logo_7_5_c : logo_7_5} onMouseEnter={ ()=> this.setState({hoverActive: 5}) } onMouseLeave={ ()=> this.setState({hoverActive: 0}) } alt="Transelec" /></a>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {this.state.is_responsive ? null : 
                <Sucursales />}
                <ScrollAnimation animateOnce={true} animateIn="fadeIn" duration={1} delay={200}>
                    <Testimonials />
                </ScrollAnimation>

                <section className="get-started  bg-blue form-box">
                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={0}>  
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3 col-md-12">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                 <Footer />
                </section>
                {this.state.isFirstTime ? null : 
                <CallToAction isActive={ this.state.toggleform } onClick={()=> this.toggleForm()} />}
               
          </main> 
        );
    }
  }
export default Home;