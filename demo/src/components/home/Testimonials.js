import React, { Component } from 'react';
import profile_1 from '../../assets/images/testimonios/1.png';
import profile_2 from '../../assets/images/testimonios/2.png';
import profile_3 from '../../assets/images/testimonios/3.png';
import Card from 'react-bootstrap/Card';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';

class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.state={
            active: 1,
            BrowserWidth: false,
            testimonials:[
                {'id': 1, 'img': profile_1, 'name': 'Cesar Ramirez', 'ocupation': 'Prodesa', 'testimony':'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor id."', 'link': '' },
                {'id': 2, 'img': profile_2, 'name': 'Michael Beldwell', 'ocupation': 'EBCO', 'testimony':'"Gracias a ProPlanner hemos podido visualizar nuestros indicadores de desempeño en tiempo real y poder tomar mejores decisiones. La Plataforma nos ha ayudado a identificar interferencias de secuencias constructivas y a planificar en equipo."', 'link': '' },
                {'id': 3, 'img': profile_3, 'name': 'Cristian Sánchez', 'ocupation': 'Ayudante Oficina Técnica', 'testimony':'Nos ha facilitado la medición del avance del proyecto, sobre todo en terminaciones, ahorrandonos mucho tiempo en obra. Podemos ver qué partidas están atrasadas fácilmente, cuales tienen restricciones y cuales tienen observaciones en tiempo real.', 'link': '' }
            ]
        }
    }
    componentDidMount(){
        this.setState({BrowserWidth: window.innerWidth <= 767});
    }
    
    toggleActive(e){
        this.setState({
            active: this.state.active !== e ? e : this.state.active 
        })
    }

    render() {
        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 4,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1280 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1279, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
        };
      return (
        <section className="testimonials-section default-section" style={{padding: '80px 80px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 text-center mb-5">
                        <h1 className="mb-4 text-center"><span className="text-blue">Súmate </span> a ellos</h1>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-md-12 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 ">
                        <Carousel swipeable={false} draggable={false} responsive={responsive} infinite={true} autoPlaySpeed={1000}>
                            {this.state.testimonials.map((card, index) => 
                                <Card key={index}>
                                    <Card.Img variant="top" src={card.img} alt={card.name} />
                                    <Card.Body style={{padding: '1.5rem'}}>
                                        <p className="card-text testimony">{card.testimony}</p>
                                        <Card.Title >{card.name}</Card.Title>
                                        <Card.Text >
                                            <b>{card.ocupation}</b>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                        </Carousel>
                    </div>
                </div> 
            </div>
        </section>

      );
    }
  }
export default Testimonials;