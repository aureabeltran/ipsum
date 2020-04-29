import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
/* Assets */
import close from '../../assets/images/icons/close-black.png';
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

class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state={
            activeClass:'contenedor',
            firstCLass:'',
            isActive: false,
            type: '',
            quantity: 0,
            quatityProjects: 0,
            result: '',
            error: '',
            areas: [
                {'id': 1, 'name': 'Residencial', 'active': ResidentialBl, 'inactive': ResidentialGr},
                {'id': 2, 'name': 'Comercial', 'active': CommercialBl, 'inactive': CommercialGr},
                {'id': 3, 'name': 'Industrial', 'active': IndustrialBl, 'inactive': IndustrialGr},
                {'id': 4, 'name': 'Infraestructura', 'active': HealthcareBl, 'inactive': HealthcareGr},
                {'id': 5, 'name': 'Minería', 'active': MinningBl, 'inactive': MinningGr},
            ],
        }
    }
    componentDidMount(){
        this.setState({
            firstCLass: 'call-to-action call-pricing animated fadeIn active',
            isActive: true
        })
        setTimeout(() => {  
            this.setState({
                activeClass: 'contenedor animated fadeInDown',
            })
        }, 400)
    }

    componentWillReceiveProps(prev, state){
        if(prev.isActive !== state.isActive){
            if(prev.isActive){
                this.setState({
                    firstCLass: 'call-to-action call-pricing animated fadeIn active'
                })
                setTimeout(() => {  
                    this.setState({
                        activeClass: 'contenedor animated fadeInDown active',
                    })
                }, 400)
            }
            else{
                this.setState({
                    activeClass: 'contenedor animated fadeOutUp'
                })
                setTimeout(() => {  
                    this.setState({
                        firstCLass: 'call-to-action call-pricing animated fadeOut',
                    })
                }, 400)
            }

        }
    }

    closeModal(){
        this.props.onClick()
    }

    handleChange(e) {
        this.setState({
            [e.name]: e.value,
        })
    }

    toggleClick(e){
        console.log(e)
        this.setState({
            area: e,
            type: e
        })
    }

    calcular_valor_unitario(e){
        let proyecto = parseInt(this.state.quantity)
        let tipo = this.state.type
        var n_proyectos =[5,15,50,100,101]
        var pricio_por_proyecto = [500,500,600,800,1000]
        var precio_unidad = 0;
        var porsentajes =[1,0.8,0.7,0.6,0.4]
        if(proyecto > 0){
            if(proyecto <= n_proyectos[0]){
                precio_unidad = pricio_por_proyecto[tipo] * porsentajes[0];
            }
            if(proyecto >= n_proyectos[0] && proyecto <= n_proyectos[1]){
                precio_unidad = pricio_por_proyecto[tipo] * porsentajes[1];
            }
            if(proyecto >= n_proyectos[1] && proyecto <= n_proyectos[2]){
                precio_unidad = pricio_por_proyecto[tipo] * porsentajes[2];
            }
            if(proyecto >= n_proyectos[2] && proyecto <= n_proyectos[3]){
                precio_unidad = pricio_por_proyecto[tipo] * porsentajes[3];
            }
            if(proyecto >= n_proyectos[4]){
                precio_unidad = pricio_por_proyecto[tipo] * porsentajes[4];
            }    
            this.setState({
                quatityProjects: precio_unidad
            })
        }else{
            return "La cantidad de proyectos debe ser mayor que cero"
        }
    }

    renderPricing(e){
        
        let proyecto = parseInt(this.state.quantity)
        let tipo = this.state.type
        var porsentajes =[1,0.8,0.7,0.6,0.4]
        var n_proyectos =[5,15,50,100,101]
        var pricio_por_proyecto = [500,500,600,800,1000]
        var precio_unidad = 0;
        if(proyecto > 0){
            if(proyecto <= n_proyectos[0]){
                console.log("funciona es "+n_proyectos[0])
                precio_unidad = pricio_por_proyecto[tipo] * porsentajes[0];
            }
            if(proyecto >= n_proyectos[0] && proyecto <= n_proyectos[1]){
                console.log("funciona es "+n_proyectos[1])
                precio_unidad = pricio_por_proyecto[tipo] * porsentajes[1];
            }
            if(proyecto >= n_proyectos[1] && proyecto <= n_proyectos[2]){
                console.log("funciona es "+n_proyectos[2])
                precio_unidad = pricio_por_proyecto[tipo] * porsentajes[2];
            }
            if(proyecto >= n_proyectos[2] && proyecto <= n_proyectos[3]){
                console.log("funciona es "+n_proyectos[3])
                precio_unidad = pricio_por_proyecto[tipo] * porsentajes[3];
            }
            if(proyecto >= n_proyectos[4]){
                console.log("funciona es "+n_proyectos[4])
                precio_unidad = pricio_por_proyecto[tipo] * porsentajes[4];
            }   
            this.setState({
                result: precio_unidad * this.state.quantity
            })
        }else{
            this.setState({
                error: 'Debes tener al menos un proyecto'
            })
        }

    }
    renderall(e){
        e.preventDefault()
        if(this.state.type === ''){
            this.setState({
                error: 'Selecciona un tipo de proyecto.'
            })
            return
        }
        else{
            this.setState({
                error: ''
            })
            this.renderPricing();
            this.calcular_valor_unitario();
        }
    }
    
    render() {
      return (
            <div className={this.state.firstCLass}>
                <div className={this.state.activeClass}>
                    <button className="no-button close-btn" onClick={()=>this.closeModal()}><img src={close} alt="close" style={{opacity: '.2'}} /></button>
                    <Form>
                        <h4 className="text-center mb-5">¡<span>Elige tu industria</span> y cuántos proyectos tienen!</h4>
                        <div className="icons-container mb-5">
                            {this.state.areas.map((item, index)=>
                                <button type="button" onClick={ (e) => this.toggleClick(index)} key={index}><img src={this.state.area === index ? item.active : item.inactive} alt="Commercial"/> <h5 className={this.state.area === item.name ? 'text-blue' : ''}>{item.name}</h5> </button>
                            )}
                        </div>
                        <div className="row mb-2">
                            <div className="form-group col-6">
                                <div className="form-group w-100 mb-2">
                                    <input type="number" className="form-control" placeholder="Cantidad de proyectos" name="quantity" onChange={(e)=>this.handleChange(e.target)} required/>
                                </div>
                            </div>
                            <div className="form-group col-6">
                                <button className="main-btn blue-btn w-100" onClick={(e)=> this.renderall(e)}><span>¡Dame mi precio!</span></button>
                                {this.state.error !== '' ?  <small className="text-error">{this.state.error}</small> : null}
                            </div> 
                        </div>
                        <div className="row mb-4">
                            <div className="form-group col-6">
                                <small>Precio por proyecto/mes</small>
                                <p className="form-control text-center" >{this.state.quatityProjects !== 0 ? this.state.quatityProjects + ' USD' : ''}</p>
                            </div> 
                            <div className="form-group col-6">
                                <small>Precio por {this.state.quantity}  proyectos/mes</small>
                                <p className="form-control text-center" > {this.state.result !== '' ? 'USD' : ''} {this.state.result} </p>
                            </div> 
                        </div>
                        <div className="text-center">
                            <small>*Estos son precios referenciales, para más detalle contacta a nuestro equipo.</small>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
  }
export default Pricing;