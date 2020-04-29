import React, { Component } from 'react';
import PlanningGr from '../../assets/images/icons/planning-grey.png';
import PlanningBl from '../../assets/images/icons/planning-blue.png';
import QualityGr from '../../assets/images/icons/quality-grey.png';
import QualityBl from '../../assets/images/icons/quality-blue.png';
import BimGr from '../../assets/images/icons/bim-grey.png';
import BimBl from '../../assets/images/icons/bim-blue.png';
import AnalyticsGr from '../../assets/images/icons/analytics-grey.png';
import AnalyticsBl from '../../assets/images/icons/analytics-blue.png';
import ScrollAnimation from 'react-animate-on-scroll';
import proplannerLogo from '../../assets/images/proplanner.svg';
import gant1 from '../../assets/images/news/gant.png';
import gant2 from '../../assets/images/news/kanban.png';
import gant3 from '../../assets/images/news/bim.png';
import gant4 from '../../assets/images/news/dashboard.png';

import {Link} from "react-router-dom";


class ProplannerDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            activated: 1,
            activeClass: 'fadeInUp animated',
            activeClassText: 'fadeIn animated',
            ProPlanner: [
                {'pharraph': 'Nuestra plataforma te permite importar tu programa directamente desde MS Project y/o Primavera P6 y trabajar tu planificación maestra, intermedia y semanal de una manera eficiente y efectiva para lograr un plan confiable.', 'image': gant1},
                {'pharraph': 'Además de la planificación, puedes crear tus protocolos de calidad en ProPlanner y completarlos en terreno con nuestra aplicación “Protocolos”. Estos checklists los puedes conectar con tu planificación semanal y generar analíticas en tiempo real.', 'image': gant2},

                {'pharraph': 'Si en tu empresa trabajan con BIM y tienen modelos para fase de construcción, importalos directo a ProPlanner desde Revit o Naviswork (o extensión ifc) y conéctalos con tu programa de obra. De esta manera, podrás tener un modelo 4D actualizado al día y ver tu plan semanal desde el modelo BIM.', 'image': gant3},
                
                {'pharraph': 'Si necesitas analíticas y reportería para tomar mejores decisiones, en ProPlanner podrás tener paneles de gráficos e indicadores de gestión en tiempo real, con métricas de avance, productividad, performance y mucho más.', 'image': gant4}
            ],
            activeP: 'Nuestra plataforma te permite importar tu programa directamente desde MS Project y/o Primavera P6 y trabajar tu planificación maestra, intermedia y semanal de una manera eficiente y efectiva para lograr un plan confiable.',
            activeImage: gant1,
        }
    }

    componentDidMount(){

    }

    async toggleProplanner(e){
        let activo = this.state.activated;
        this.changeClass(e)
        this.setState({
            activated: e,
            activeClass: 'fadeOutDown animated',
            activeClassText: e > activo ? 'fadeOutLeft animated' : 'fadeOutRight animated',
        })
        this.changeClassText(e, activo)
    }

    changeClass(e){
        setTimeout(() => {  
            this.setState({
                activeClass: 'fadeInUp animated',
                activeImage: this.state.ProPlanner[e-1].image
            })
        }, 400)
    }

    changeClassText(e, active){
        setTimeout(() => {  
            this.setState({
                activeP: this.state.ProPlanner[e-1].pharraph,
                activeClassText: e > active || e === active ? 'fadeInRight animated' : 'fadeInLeft animated',
            })
        }, 400)
    }

    render() {
        return (
            <section className="default-section gant-section text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={proplannerLogo} alt="pro planner logo" className="mb-3"/>
                            <h1 className="mb-5">Conoce <span className="text-blue">ProPlanner</span></h1>
                        </div>
                    </div>
                    
                    <div className="row ">
                        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                            <div className="row mb-4">
                                <div className="col-lg-3 col-3 ">
                                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={0}>
                                        <img src={this.state.activated === 1 ? PlanningBl : PlanningGr} className="img-fluid my-2" onClick={ ()=> this.toggleProplanner(1) }  alt="logo" />
                                        <h5 className={this.state.activated === 1 ? 'active' : ''}>Planning</h5>
                                    </ScrollAnimation>
                                </div>
                                <div className="col-lg-3 col-3 ">
                                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={200}>
                                        <img src={this.state.activated === 2 ? QualityBl : QualityGr} className="img-fluid my-2" onClick={ ()=> this.toggleProplanner(2) }  alt="logo" />
                                        <h5 className={this.state.activated === 2 ? 'active' : ''}>Quality</h5>
                                    </ScrollAnimation>
                                </div>
                                <div className="col-lg-3 col-3 ">
                                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={400} >
                                        <img src={this.state.activated === 3 ? BimBl : BimGr} onClick={ ()=> this.toggleProplanner(3) } className="img-fluid my-2" alt="logo" />
                                        <h5 className={this.state.activated === 3 ? 'active' : ''}>BIM 4D</h5>
                                    </ScrollAnimation>
                                </div>
                                <div className="col-lg-3 col-3 ">
                                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1} delay={600}>
                                        <img src={this.state.activated === 4 ? AnalyticsBl : AnalyticsGr} className="img-fluid my-2" onClick={ ()=> this.toggleProplanner(4) }  alt="logo" />
                                        <h5 className={this.state.activated === 4 ? 'active' : ''}>Analytics</h5>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-gant">
                        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12">
                            <div className={this.state.activeClassText}>
                                <p className="mb-4">{this.state.activeP}</p>
                            </div>
                            <div>
                                <Link to="/proplanner" className="main-btn blue-btn mb-4 with-shadow"><span>Saber más</span></Link>
                                <br/>
                            </div>
                            <div className={this.state.activeClass}>
                                <img src={this.state.activeImage} alt="first gant" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default ProplannerDetail;