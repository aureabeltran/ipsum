import React, { Component } from 'react';
import proplannerLogo from '../../assets/images/proplanner.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../layout/Footer';
import TypeProduct from '../home/TypeProduct';
import fifth from '../../assets/images/news/fifth.JPG';
import sixth from '../../assets/images/news/sixth.JPG';
import nine from '../../assets/images/news/nine.JPG';
import seventh from '../../assets/images/news/seventh.JPG';
import eighth from '../../assets/images/news/eighth.JPG';
import integraciones from '../../assets/images/news/integraciones.png';
import reportes from '../../assets/images/news/reportes.JPG';
import proplannervideo from '../../assets/multimedia/proplanner.mp4';
import ReactPlayer from 'react-player';
import CallToAction from '../partials/CallToAction';
import ReactGA from 'react-ga';
import ScrollableAnchor ,{ configureAnchors }from 'react-scrollable-anchor';
configureAnchors({offset: -60, scrollDuration: 800})
class Proplanner extends Component {
    constructor(props) {
        super(props);
        this.state={
            banner: {title: 'Plan better. Build on time.', bajada: 'Lean scheduling and planning software for the west generation of builders, by builders.', first_button: 'Conoce más', second_button: 'Pide tu demo'},
            activated: 1,
            toggleform: false,
            isFirstTime: true,
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        ReactGA.pageview(window.location.pathname + window.location.search);
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

    render() {
        return (
            <main>
                <ScrollableAnchor id={'product'}>
                    <div> </div>
                </ScrollableAnchor>  
                <section className="default-section gant-section text-center" style={{minHeight: 'auto', paddingTop: '200px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                                <ScrollAnimation animateIn="fadeIn" duration={1} delay={200} animateOnce={true} >
                                    <img src={proplannerLogo} alt="pro planner logo" className="mb-3"/>
                                    <h1 className="mb-4">Conoce <span>ProPlanner</span></h1>
                                    <p className="">ProPlanner está construido bajo la metodología de trabajo Last Planner™, permite planificar, controlar avance, gestionar tareas, recursos y mucho más.</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ReactPlayer url={proplannervideo} playing loop controls={false} muted width={'100%'} height={'auto'}/>
                            </div>
                        </div>
                    </div>
                </section>
                <ScrollableAnchor id={'characteristics'}>
                    <div> </div>
                </ScrollableAnchor>  
                <section className="default-section proplanner-section">
                    <div className="container">
                        
                        <div className="boxA">
                            <div className="row">
                                <div className="col-xl-5 col-lg-6 col-md-6 on-desktop">
                                    <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200} animateOnce={true} >
                                        <h1 className=" mb-5">Planificación <span className="text-blue">Lean</span></h1>
                                        <p className="mb-5">Conectado con MSProject y Primavera P6 para cargar tu Plan Maestro, realizar tu Lookahead y construir un Plan Semanal efectivo y confiable, conectado a tu Gantt, para nunca perder de vista el progreso de tu proyecto y el estatus en tiempo real.</p>
                                    </ScrollAnimation>
                                </div>    
                                <div className="col-lg-6 col-xl-5 col-md-6 offset-xl-2">
                                    <ScrollAnimation animateIn="fadeInRight" duration={1} delay={200} animateOnce={true} >
                                        <article>
                                            <img src={fifth} alt="fifth" className="img-fluid" />
                                        </article>
                                    </ScrollAnimation>
                                </div>
                                <div className="col-xl-5 col-lg-6 col-md-6 on-mobile mt-4">
                                    <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200} animateOnce={true} >
                                        <h1 className=" mb-5">Planificación <span className="text-blue">Lean</span></h1>
                                        <p className="mb-5">Conectado con MSProject y Primavera P6 para cargar tu Plan Maestro, realizar tu Lookahead y construir un Plan Semanal efectivo y confiable, conectado a tu Gantt, para nunca perder de vista el progreso de tu proyecto y el estatus en tiempo real.</p>
                                    </ScrollAnimation>
                                </div>  
                            </div>
                        </div>

                        <div className="boxB">
                            <div className="row">
                                <div className="col-lg-6 col-xl-5 col-md-6 ">
                                    <ScrollAnimation animateIn="fadeInLeft" duration={1} delay={200} animateOnce={true} >
                                        <article>
                                            <img src={sixth} alt="sixth" className="img-fluid" /> 
                                        </article>
                                    </ScrollAnimation>
                                </div>
                                <div className="col-xl-5 col-lg-6 col-md-6  offset-xl-2">
                                    <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200} animateOnce={true} >
                                        <h1 className=" mb-5">Gestión de <span className="text-blue">Restricciones</span></h1>
                                        <p className="mb-5">Identifica, crea y gestiona tus restricciones junto a tu equipo en obra en cuestión de minutos, para luego acceder a ellas desde nuestro Log de Restricciones (web y móvil) y no permitas que quede ninguna sin liberar! Es misión de todos crear un plan confiable.</p>
                                    </ScrollAnimation>
                                </div>    
                            </div>
                        </div>

                        <div className="boxA">
                            <div className="row">
                                <div className="col-xl-5 col-lg-6 col-md-6 on-desktop">
                                    <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200} animateOnce={true} >
                                        <h1 className=" mb-5">Programación <span className="text-blue">Rítmica</span></h1>
                                        <p className="mb-5">Tienes un proyecto con actividades rítmicas y repetitivas? No te preocupes! Con ProPlanner podrás quebrar tu Plan Maestro en un WBS que podrás crear de manera rápida y fácil. Elige tu unidad de control, sea un departamento, casa o incluso un tramo de una autopista!</p>
                                    </ScrollAnimation>
                                </div>    
                                <div className="col-lg-6  offset-xl-2 col-xl-5 col-md-6 ">
                                    <ScrollAnimation animateIn="fadeInRight" duration={1} delay={200} animateOnce={true} >
                                        <article>
                                            <img src={nine} alt="nine" className="img-fluid" />  
                                        </article>
                                    </ScrollAnimation>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 on-mobile">
                                    <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200} animateOnce={true} >
                                        <h1 className=" mb-5">Programación <span className="text-blue">Rítmica</span></h1>
                                        <p className="mb-5">Tienes un proyecto con actividades rítmicas y repetitivas? No te preocupes! Con ProPlanner podrás quebrar tu Plan Maestro en un WBS que podrás crear de manera rápida y fácil. Elige tu unidad de control, sea un departamento, casa o incluso un tramo de una autopista!</p>
                                    </ScrollAnimation>
                                </div>  
                            </div>
                        </div>

                        <div className="boxB"> 
                            <div className="row">      
                                <div className="col-xl-5 col-lg-6 col-md-6">
                                    <ScrollAnimation animateIn="fadeInLeft" duration={1} delay={200} animateOnce={true} >
                                        <article>
                                            <img src={eighth} alt="eighth" className="img-fluid" />  
                                        </article>
                                    </ScrollAnimation>
                                </div>
                                <div className="col-lg-6 col-xl-5  offset-xl-2 col-md-6">
                                    <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200} animateOnce={true} >
                                        <h1 className=" mb-5"><span className="text-blue">Lean-BIM</span> 4D</h1>
                                        <p className="mb-5">Si tu empresa ya trabaja con BIM para la fase de diseño, carga tu modelo creado para la fase de construcción en ProPlanner directo de Naviswork, Revit o formato ifc. Este modelo podrás conectarlo con tu Carta Gantt y así generar un modelo 4D en cuestión de minutos!</p>
                                    </ScrollAnimation>
                                </div>    
                            </div>       
                        </div>

                        <div className="boxA">
                            <div className="row">
                                <div className="col-xl-5 col-lg-6 col-md-6 on-desktop">
                                    <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200} animateOnce={true} >
                                        <h1 className=" mb-5">Analíticas de <span className="text-blue">Obra</span></h1>
                                        <p className="mb-5">Toda la información que entra en ProPlanner se transforma en gráficos, curvas y tablas con información de gestión primordial, para que puedas controlar tu proyecto al día y todos los recursos utilizados en el. Todos los KPIs que esperas para la gestión de tu planificación de obra los encontrarás en nuestro Dashboard.</p>
                                    </ScrollAnimation>
                                </div>    
                                <div className="col-lg-6 col-xl-5  offset-xl-2 col-md-6">
                                    <ScrollAnimation animateIn="fadeInRight" duration={1} delay={200} animateOnce={true} >
                                        <article>
                                            <img src={seventh} alt="seventh" className="img-fluid" />  
                                        </article>
                                    </ScrollAnimation>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 on-mobile">
                                    <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200} animateOnce={true} >
                                        <h1 className=" mb-5">Analíticas de <span className="text-blue">Obra</span></h1>
                                        <p className="mb-5">Toda la información que entra en ProPlanner se transforma en gráficos, curvas y tablas con información de gestión primordial, para que puedas controlar tu proyecto al día y todos los recursos utilizados en el. Todos los KPIs que esperas para la gestión de tu planificación de obra los encontrarás en nuestro Dashboard.</p>
                                    </ScrollAnimation>
                                </div>  
                            </div>
                        </div>
                        <div className="boxB"> 
                            <div className="row">      
                                <div className="col-xl-5 col-lg-6 col-md-6">
                                    <ScrollAnimation animateIn="fadeInLeft" duration={1} delay={200} animateOnce={true} >
                                        <article>
                                            <img src={reportes} alt="eighth" className="img-fluid" />  
                                        </article>
                                    </ScrollAnimation>
                                </div>
                                <div className="col-lg-6 col-xl-5  offset-xl-2 col-md-6">
                                    <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200} animateOnce={true} >
                                        <h1 className=" mb-5">Reportes en <span className="text-blue">Tiempo Real</span></h1>
                                        <p className="mb-5">Además de paneles en tiempo real donde podrás filtrar lo que quieras, si tu tiempo es escaso, no te preocupes que también tenemos soluciones para ti. A nivel diario o semanal, te llegarán reportes de manera automática directamente desde ProPlanner. Estos reportes se hicieron pensando en ti, Administrador y Gerente que necesitas la información de la obra con inmediatez!</p>
                                    </ScrollAnimation>
                                </div>    
                            </div>       
                        </div>

                    </div>
                </section>

                <section className="default-section get-started bg-blue proplanner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="mb-5 text-center">La planificación es tu brújula, te ayudamos a afinarla</h3>
                            </div>    
                            <div className="col-md-12 text-center">
                                <span><button onClick={(e)=>this.toggleForm(e)} className="main-btn orange-btn mb-6">Quiero planificar mejor</button></span>
                            </div>
                        </div>
                    </div>
                </section>
                    
                <ScrollableAnchor id={'integrations'}>
                    <div> </div>
                </ScrollableAnchor>  
                <section className="bg-gray bg-gray-vertical default-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                                <ScrollAnimation animateIn="fadeIn" duration={1} delay={200} animateOnce={true} >
                                    <h1 className="mb-5"><span className="text-blue">Todo</span> en un sólo lugar </h1>
                                    <p>Además de las funcionalidades que entrega ProPlanner, a pedido de nuestros clientes hemos realizado integraciones con las siguientes plataformas, para facilitarte el trabajo diario. Más integraciones vendrán durante el 2020!</p>
                                    <article className="mt-3">
                                        <img src={integraciones} alt="integraciones" className="img-fluid" />  
                                    </article>    
                                </ScrollAnimation>
                            </div> 
                        </div>
                    </div>
                    <div className="cont"><div className="gradient"></div></div>
                </section>
                <ScrollableAnchor id={'industries'}>
                    <div> </div>
                </ScrollableAnchor>  
                <TypeProduct />
               
                <div style={{backgroundColor: '#fff'}} >
                    <Footer />
                </div>
                {this.state.isFirstTime ? null : 
                <CallToAction isActive={ this.state.toggleform } onClick={()=> this.toggleForm()} />}
            </main>
        );
    }
  }
export default Proplanner;