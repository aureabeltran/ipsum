import React, { Component } from 'react';
import first from '../../assets/images/propuesta/1.png';
import second from '../../assets/images/propuesta/2.png';
import third from '../../assets/images/propuesta/3.png';
import ScrollAnimation from 'react-animate-on-scroll';
import group1 from '../../assets/images/propuesta/first.png';
import group2 from '../../assets/images/propuesta/second.png';
import group3 from '../../assets/images/propuesta/third.png';

class DetailSection extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    toggleClick(e){
        this.setState({
            area: e,
        })
    }

    render() {
      return (
            <section className="default-section propuesta">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 my-5"> 
                            <ScrollAnimation animateIn="fadeInLeft" duration={1} animateOnce={true} >  
                                <figure className="left">
                                    <img src={first} alt="first" className="img-fluid"/>
                                    <div className="to-left"><img src={group1} alt="first" /></div>
                                </figure>
                            </ScrollAnimation>
                        </div>  
                        <div className="col-xl-6 col-lg-6 offset-xl-1">
                            <h1 className="mb-4">Basado en la <span>Metodología Lean</span></h1>
                            <p>Todos los flujos de planificación de ProPlanner están basados en la metodología Lean Construction y sus herramientas como el Last Planner System y el Takt Planning.</p>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-right on-desktop">
                            <h1 className="mb-4">Orientado a las <span>Analíticas</span></h1>
                            <p>Cualquier información que entre en ProPlanner te entregará de manera inmediata curvas e indicadores de progreso, productividad, performance y otros KPIs que tu obra necesita a diario.</p>
                        </div> 
                        <div className=" offset-xl-1 col-xl-5 col-lg-6  my-5">
                            <ScrollAnimation animateIn="fadeInRight" duration={1} animateOnce={true}>
                                <figure className="right">
                                    <img src={second} alt="second" className="img-fluid"/>
                                    <div className="to-right"><img src={group2} alt="first" /></div>
                                </figure>  
                            </ScrollAnimation>
                        </div> 
                        <div className="col-xl-6 col-lg-6 text-right on-mobile">
                            <h1 className="mb-4">Orientado a las <span>Analíticas</span></h1>
                            <p>Cualquier información que entre en ProPlanner te entregará de manera inmediata curvas e indicadores de progreso, productividad, performance y otros KPIs que tu obra necesita a diario.</p>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-xl-5 col-lg-6  my-5">
                            <ScrollAnimation animateIn="fadeInLeft" duration={1} animateOnce={true}>  
                                <figure className="left">
                                    <img src={third} alt="third" className="img-fluid"/>
                                    <div className="to-left"><img src={group3} alt="first" /></div>
                                </figure>
                            </ScrollAnimation>
                        </div>  
                        <div className="col-xl-6 col-lg-6  offset-xl-1">
                            <h1 className="mb-4"><span>Expertos</span> en planificación</h1>
                            <p>Nuestro equipo cuenta con ingenieros expertos en planificación, gestión de proyectos, metodologías Lean, BIM, así como también expertos en desarrollo de software (SaaS).</p>
                        </div>  
                    </div>
                </div>
            </section>
      );
    }
  }
export default DetailSection;