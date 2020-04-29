import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ContactFormAnimate from '../partials/ContactFormAnimate';
import CommercialGr from '../../assets/images/icons/commercial-grey.png';
import CommercialBl from '../../assets/images/icons/commercial-blue.png';
import IndustrialGr from '../../assets/images/icons/industrial-grey.png';
import IndustrialBl from '../../assets/images/icons/industrial-blue.png';
import HealthcareGr from '../../assets/images/icons/healthcare-grey.png';
import HealthcareBl from '../../assets/images/icons/healthcare-blue.png';
import ResidentialGr from '../../assets/images/icons/residential-grey.png';
import ResidentialBl from '../../assets/images/icons/residential-blue.png';
import MinningGr from '../../assets/images/icons/minning-grey.png';
import MinningBl from '../../assets/images/icons/minning-blue.png';

//comercial
import Alpha from '../../assets/images/logos/products/commercial/1.png';
import Casbro from '../../assets/images/logos/products/commercial/2.png';
import LDZ from '../../assets/images/logos/products/commercial/3.png';
import Range from '../../assets/images/logos/products/commercial/4.png';
//industrial
import Rekind from '../../assets/images/logos/products/industrial/1.png';
import Precon from '../../assets/images/logos/products/industrial/2.png';
import Stiler from '../../assets/images/logos/products/industrial/3.png';
import Cemex from '../../assets/images/logos/products/industrial/4.png';
import Unacem from '../../assets/images/logos/products/industrial/5.png';
import Tecnofast from '../../assets/images/logos/products/industrial/6.png';

import Armas from '../../assets/images/logos/products/residencial/1.png';
import Guzman from '../../assets/images/logos/products/residencial/2.png';
import Ignacio from '../../assets/images/logos/products/residencial/3.png';
import Urbop from '../../assets/images/logos/products/residencial/4.png';

//infreestructura
import Transelec from '../../assets/images/logos/products/infraestructura/1.png';
import GyM from '../../assets/images/logos/products/infraestructura/2.png';

//minning
import Excon from '../../assets/images/logos/products/minning/1.png';
import Techint from '../../assets/images/logos/products/minning/2.png';

import {requestHttp} from '../services/request.service';

class TypeProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            area: 0,
            open: false,
            areas: [
                {'id': 0, 'name': 'Comercial', 'active': CommercialBl, 'inactive': CommercialGr, 'enterprises': [Alpha, Casbro,LDZ, Range], 'labels': [
                'tiendas', 'malls',  'hoteles', 'restaurants', 'oficinas']},

                {'id': 1, 'name': 'Industrial', 'active': IndustrialBl, 'inactive': IndustrialGr, 'enterprises': [Rekind,  Precon, Stiler, Cemex, Unacem, Tecnofast], 'labels': ['plantas industriales', 'Refinerías', 'Almacenes', 'Plantas de tratamiento', 'Plantas de abastecimiento']},

                {'id': 2, 'name': 'Infraestructura', 'active': HealthcareBl, 'inactive': HealthcareGr, 'enterprises': [Transelec, GyM], 'labels':['puentes', 'autopistas', 'represas', 'energía']},

                {'id': 3, 'name': 'Residencial', 'active': ResidentialBl, 'inactive': ResidentialGr, 'enterprises': [Armas, Guzman, Ignacio, Urbop], 'labels': ['edificios habitacionales', 'casas']},

                {'id': 4, 'name': 'Minería', 'active': MinningBl, 'inactive': MinningGr, 'enterprises': [Excon, Techint], 'labels': ['túneles subterráneos', 'movimiento tierra', 'tranques']},
            ],
            'firstname':'',
            'lastname': '',
            'email': '',
            'phone': '',
            'country': '',
            'cargo': '',
            'industry': '',
            'company': '',
            'toggleform': 1,
            'loading': false
        }
    }

    handleChange(e) {
        this.setState({
            [e.name]: e.value,
        })
    }

    toggleClick(e){
        this.setState({
            area: e,
        })
    }
    handleCollapse(){
        this.setState({
            open: !this.state.open
        })
    }

    async handleSubmit(e){
        e.preventDefault()
        this.setState({
            'loading': true
        })
        let data = {
            fields: [
                {'name':'firstname','value': this.state.firstname },
                {'name':'lastname','value': this.state.lastname },
                {'name':'email','value': this.state.email },
                {'name':'phone','value': this.state.phone },
                {'name':'country','value': this.state.country },
                {'name':'cargo','value': this.state.cargo },
                {'name':'industry','value': this.state.industry },
                {'name':'company','value': this.state.company },
        ]}
        let send = await requestHttp.requestPostHubspot(data);
        if(send){
            console.log(send)
            this.setState({
                toggleform: 2,
                loading: false
            })
        }
        else{
            console.log('error')
            this.setState({
                toggleform: 3,
                loading: false
            })
        }
    }

    render() {
      return (
        <main>
            <section className="default-section bg-download">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                            <div className="icons-container">
                                {this.state.areas.map((item, index)=>
                                <ScrollAnimation animateIn="fadeInUp" duration={1} delay={100 * index} animateOnce={true} key={index}>
                                    <button onClick={ (e) => this.toggleClick(index)} key={index}><img src={this.state.area === item.id ? item.active : item.inactive} alt="Commercial"/> <h5 className={this.state.area === item.name ? 'text-blue' : ''}>{item.name}</h5> </button>
                                </ScrollAnimation>
                                )}
                            </div>   
                        </div>
                        <div className="col-md-12 col-xl-10 offset-xl-1 col-lg-12 text-center">
                            <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0} animateOnce={true}>
                                
                                <div className="box-stuff">
                                    {this.state.areas[this.state.area].labels.map((item, index)=>
                                        <span className="badge badge-pill badge-primary" key={index}>{item}</span>
                                    )}
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center mb-5">
                            <div className="logos">
                                {this.state.areas[this.state.area].enterprises.map((item, index)=>
                                    <img src={item} alt={"Commercial" + index} className="fadeIn animated" key={index}/>
                                )}
                            </div>
                         </div>

                        <div className="col-md-12 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 text-center">
                                <ContactFormAnimate />
                        </div>
                    </div>
                </div>
            </section>
        </main>
      );
    }
}
export default TypeProduct;