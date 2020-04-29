import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import GoogleMapReact from 'google-map-react';
import rangel from '../../assets/images/map/rangel.jpeg';
import rangelLogo from '../../assets/images/map/rangel-logo.jpg';
import atacama from '../../assets/images/map/atacama.png';
import Palermo from '../../assets/images/map/palermo.jpg';
import Novotel from '../../assets/images/map/novotel.jpg';
import Maipu from '../../assets/images/map/maipu.jpg';
import wave_logo from '../../assets/images/logos/logo-wave-color.svg';
import lima from '../../assets/images/logos/products/lima.png';
import transelc_logo from '../../assets/images/logos/transelec-c.png';
import prodesa_c from '../../assets/images/logos/prodesa-c.png';
import gyl from '../../assets/images/logos/products/residencial/2.png';
import {styles} from './styles';

class Map extends Component {
    static defaultProps = {
        center: {
          lat: -33.429098,
          lng: -70.6219595
        },
        zoom: 5,
    };
    
    constructor(props) {
        super(props);
        this.state={
            sucursales:[
                {title: 'Atacama Solar - Transelec', pharraph: 'El proyecto de paneles solares más grande de Chile. Mas de 170 MWp en pleno desierto de Atacama, liderado por Sonnedix con una inversión de USD 180 millones y que dará más de 400 puestos de trabajo.', link: '', image: atacama, logo: transelc_logo, center: { lat: -23.9340256, lng: -75.5467352}},

                {title: 'Centro Comercial Santa Fe - Rangel ', pharraph: 'Renovación del mall de Santa Fe de una de Palacio de Hierro, una de las marcas más icónicas en el retail mexicano, que está invirtiendo mas de USD 300 millones en renovar y ampliar su cadena de centros comerciales.', link: '', image: rangel, logo: rangelLogo, center: { lat: 22.3617373, lng: -106.275564}},

                {title: 'Mercado Maipú - LIMA', pharraph: 'Esperado proyecto de USD 6 millones que busca modernizar uno de los espacios más característicos de la comuna de Maipú, en Santiago. ', link: '', image: Maipu, logo: lima, center: { lat: -33.429098, lng: -75.6219595}},  

                {title: 'Palermo - Prodesa', pharraph: 'Proyecto habitacional en la ciudad de Bogotá, rodeado de áreas verdes, pero inmerso en plena zona comercial, ideal para familias activas y con espacios flexibles de diseño único.', link: '', image: Palermo, logo: prodesa_c, center: { lat: 4.429098, lng: -79.6219595}},

                {title: 'Novotel - Guzman y Larrain', pharraph: 'Tercer Novotel en Chile que viene a potenciar el desarrollo económico de la región de Arica, con una inversión de más de USD 20 millones y que dará más de 300 empleos.', link: '', image: Novotel, logo: gyl, center: { lat: -18.909098, lng: -75.6219595}  }             
            ],
            selected:{
                center: { lat: -32.9340256, lng: -75.5467352},
                logo: wave_logo,
            },
        }
    }
    
    componentDidMount(){
        this.setState({
            selected:{
                center: this.state.sucursales[0].center,
                logo: this.state.sucursales[0].logo,
            },
        })
    }
   

    async handleSelect(e, a){
        await this.setState({
            selected: {
                center: {
                    lat: this.state.sucursales[e].center.lat,
                    lng: this.state.sucursales[e].center.lng
                },
                logo: this.state.sucursales[e].logo,
            },
        })
    }

    render() {
        const AnyReactComponent = ({ text }) => 
            <div className="map-container">
                <div className="mark-container">
                    <div className="mark">
                        <img src={this.state.selected.logo} alt="logo"/>
                    </div>
                </div>
            </div>
      return (
        <section className="map-section">
            
            <div className="container-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-6 col-12">
                            <Carousel indicators={false} interval={null} onSelect={(i,e)=>this.handleSelect(i,e)} prevIcon={<i className="fas fa-chevron-left"></i>} nextIcon={<i className="fas fa-chevron-right"></i>} >
                                {
                                    this.state.sucursales.map( (item, index) =>
                                    <Carousel.Item key={index} className="animated fadeIn">
                                        <Card>
                                            <Card.Img variant="top" src={item.image} alt="sucursal"/>
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>
                                                    {item.pharraph}
                                                </Card.Text>
                                                {/*<div className="text-right">
                                                    <a className="main-link" href="#">Leer más <i className="fas fa-arrow-right"></i></a>
                                                </div>*/}
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                    )
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div style = {{height: '100vh', width:'100% ' }} > 
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDJ_yO1nl47mKyuFNR2dfkXSHd2EAJEy78'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={{ styles: styles }}
                    center={this.state.selected.center}
                    >
                    <AnyReactComponent
                        lat={this.state.selected.center.lat}
                        lng={this.state.selected.center.lng}
                    />
                    </GoogleMapReact>
                </div>
            </div>
        </section>
      );
    }
  }
export default Map;