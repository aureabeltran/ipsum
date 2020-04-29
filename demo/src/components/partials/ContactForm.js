import React, { Component } from 'react';
import {requestHttp} from '../services/request.service';
import {countries} from './countries';

class ContactForm extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            'cargos': ['Gerente de Construcción', 'Gerente de División', 'Gerente de Proyecto', 'Administrador de Obra', 'Profesional de Terreno', 
                        'Oficina Técnica', 'Jefe de Calidad', 'Jefe de Seguridad', 'Jefe de Obra', 'Otro'],
            'main_countries': ['Chile', 'Colombia', 'México', 'Perú', 'Otro'],
            'countries': countries,
            'industries': [{'name':'Residencial (edificios habitacionales/casas)', 'value': 'Inmobiliaria'}, {'name': 'Comercial (tiendas /malls/hoteles)', 'value': 'Constructora'},{'name': 'Industrial (galpones/plantas de producción)', 'value': 'Industrial'}, {'name': 'Infraestructura (puentes/autopistas/represas/ energía)', 'value': 'Infraestructura'},
            {'name': 'Minería (túneles subterraneos/movimiento de tierra/ tranques)', 'value': 'Minería'}],
            'jobtitle': '',
            'pais_principal': '',
            'industria_principal': '',
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
    componentDidMount(){
    }
    
    handleChange(e){
        this.setState({
            [e.name]: e.value
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
                /*{'name':'pais_principal','value': this.state.pais_principal },*/
                /*{'name':'country','value': this.state.country },*/
                {'name':'pa_s','value': this.state.country },
                /*{'name':'cargo','value': this.state.cargo },*/
                {'name':'jobtitle','value': this.state.jobtitle },
                {'name':'industry','value': this.state.industria_principal },
                {'name':'company','value': this.state.company },
        ]}
        let send = await requestHttp.requestPostHubspot(data);
        if(send){
            this.setState({
                toggleform: 2,
                loading: false
            })
        }
        else{
            this.setState({
                toggleform: 3,
                loading: false
            })
        }
    }

    render() {
        return (
            <div >
                <form onSubmit={(e)=>this.handleSubmit(e)} className={this.state.toggleform === 1 ? 'fadeIn' : 'fadeOut d-none'} >
                    <h1 className="text-center mb-5"><span className="text-orange">Contáctanos</span> y planifiquemos juntos</h1>
                    <div className="row">
                        <div className="form-group col-lg-6 col-md-6">
                            <input type="text" className="form-control" name="firstname" placeholder="Nombre" onChange={(e)=>this.handleChange(e.target)} required/>
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                            <input type="text" className="form-control" placeholder="Apellido" name="lastname" onChange={(e)=>this.handleChange(e.target)} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-6 col-md-6">
                            <input type="email" className="form-control" name="email" placeholder="Email" onChange={(e)=>this.handleChange(e.target)} required/>
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                            <input type="text" className="form-control" name="phone" placeholder="Teléfono" onChange={(e)=>this.handleChange(e.target)} required/>
                        </div>
                    </div>
                    <div className="row">
                        {/*<div className="form-group col-lg-12">
                            <select className="form-control" name="pais_principal" defaultValue="País Principal" placeholder="País" onChange={(e)=>this.handleChange(e.target)} required>
                                <option value="País Principal" disabled>País Principal</option>
                                {this.state.main_countries.length > 0 ? 
                                    this.state.main_countries.map( (item, index) => 
                                        <option value={item} key={index}> {item} </option>
                                    )
                                    : null
                                }
                            </select>
                        </div>*/}
                        <div className="form-group col-lg-12 text-left">
                            <select className="form-control" name="country" defaultValue="País/región" placeholder="País" onChange={(e)=>this.handleChange(e.target)} required>
                                <option value="País/región" disabled>País/región</option>
                                {this.state.countries.length > 0 ? 
                                    this.state.countries.map( (item, index) => 
                                        <option value={item.name} key={index}> {item.name} </option>
                                    )
                                    : null
                                }
                            </select>
                            {this.state.country === '' ? <small className="text-white">Este campo es obligatorio*</small> : null}
                        </div>
                        <div className="form-group col-lg-12 text-left">
                            <select className="form-control" name='jobtitle' defaultValue="Cargo"  onChange={(e)=>this.handleChange(e.target)} required>
                                <option value="Cargo" disabled>Cargo</option>
                                {this.state.cargos.length > 0 ? 
                                    this.state.cargos.map( (item, index) => 
                                        <option value={item} key={index}> {item} </option>
                                    )
                                    : null
                                }
                            </select>
                            {this.state.jobtitle === '' ? <small className="text-white">Este campo es obligatorio*</small> : null}
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-6 col-md-6">
                            <input type="text" className="form-control" placeholder="Nombre de la empresa" name="company" onChange={(e)=>this.handleChange(e.target)} required/>
                        </div>
                        <div className="form-group col-lg-6 col-md-6 text-left">
                            <select className="form-control" name="industry" defaultValue="Industria principal" onChange={(e)=>this.handleChange(e.target)} required>
                                <option value="Industria principal" disabled>Industria principal</option>
                                {this.state.industries.length > 0 ? 
                                    this.state.industries.map( (item, index) => 
                                        <option value={item.value} key={index}> {item.name} </option>
                                    )
                                    : null
                                }
                            </select>
                            {this.state.industry === '' ? <small className="text-white">Este campo es obligatorio*</small> : null}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">     
                            <button type="submit" className="main-btn orange-btn w-100" disabled={this.state.loading || this.state.country === '' || this.state.jobtitle === '' || this.state.industry === ''}>¡Quiero mi Demo!</button>
                        </div>
                    </div>
                </form>
                <div className={this.state.toggleform === 2 ? 'fadeIn' : 'fadeOut d-none'}>
                    <article className="py-5 text-center">
                        <h1 className="text-white">¡Gracias por completar el formulario!</h1>
                        <h4 className="text-white font-weight-light">Nos pondremos en contacto a la brevedad</h4>
                    </article>
                </div>
                <div className={this.state.toggleform === 3 ? 'fadeIn' : 'fadeOut d-none'}>
                    <article className="py-5 text-center">
                        <h1 className="text-white">Ha ocurrido un error</h1>
                        <h4 className="text-white font-weight-light">Ha ocurrido un error mientras enviabamos la información.</h4>
                        <button className="main-btn orange-btn w-100 mt-5" onClick={()=>this.setState({toggleform: 1})}><span>Intentar denuevo</span></button>
                    </article>
                </div>
            </div>
        );
    }
}
export default ContactForm;