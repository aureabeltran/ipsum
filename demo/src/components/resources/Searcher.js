import React,  { Component } from 'react';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import {requestHttp} from '../services/request.service';
import { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import moment from 'moment';
import 'moment/locale/es';
registerLocale('es', es);

class Searcher extends Component {
    constructor(props) {
        super(props);
        this.state={
            initDate: new Date(),
            pathname: '',
            categories: [],
            before: new Date(),
            after: new Date(),
            word: '',
            type: '',
            selectedTypes: []
        }
    }
    
    async componentDidMount(){
        let data = await requestHttp.requestGet('categorias')
        if(data){
            let arreglo = []
            data.data.forEach(element => {
                let obj = {
                    'label': element.nombre,
                    'value': element.id
                }
                arreglo.push(obj)
            });
            this.setState({
                categories: arreglo
            })
        }
    }
    
    handleDate = (date, e) => {
        this.setState({
          [e]: date
        });
    };

    async getData(e){
        e.preventDefault()
        let word = 'titulo_contains='+ this.state.word
        let fecha = 'fecha_lanzamiento_gte=' + moment(this.state.before, 'd-MM-yyyy').format('YYYY-MM-DD') + '&fecha_lanzamiento_lte=' + moment(this.state.after, 'd-MM-yyyy').format('YYYY-MM-DD')
        let urltypes = ''
        let filters = ''
        if(this.state.selectedTypes.length > 0){
            this.state.selectedTypes.forEach(element => {
                if(urltypes === ''){
                    urltypes = 'label_contains=' +  element.value.replace(/ /g, "")
                }
                else{
                    urltypes = urltypes + '&' + 'label_contains=' +  element.value.replace(/ /g, "")
                }
            });
        };
        if (this.state.word !== ''){
            if(filters === ''){
                filters = '?' + word
            }
            else{
                filters = filters + '&' + word
            }
        }
        if (this.state.selectedTypes.length > 0){
            if(filters === ''){
                filters = '?' + urltypes
            }
            else{
                filters = filters + '&' + urltypes
            }
        }
        if (moment(this.state.before,'d-MM-yyyy').format('YYYY-MM-DD') !== moment(this.state.initDate).format('YYYY-MM-DD')){
            if(filters === ''){
                filters = '?' + fecha
            }
            else{
                filters = filters + '&' + fecha
            }
        }
        let url = 'recursos' + filters
        await requestHttp.requestGet(url).then(resp => {
            this.props.onClick(resp.data)
        }).catch( error => {
        })
    }

    handleChange(e){
        this.setState({
            [e.name]: e.value
        })
    }

    handleType(e){
        this.setState({
            selectedTypes: e
        })
    }

    render() {
      return (
        <section className="default-section searcher-section">
            <div className="container">
                <div className="col-xl-11 offset-xl-1">
                    <Form onSubmit={(e)=>this.getData(e)}>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-4 ">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label >Palabra clave</Form.Label>
                                    <Form.Control  type="text" placeholder="Buscar" name="word" onChange={(e)=>this.handleChange(e.target)}/>
                                </Form.Group>
                            </div>
                            {/*<div className="col-xl-3 col-lg-3 col-md-4  dropdown-cont">
                                <Form.Label>Tipo de recurso</Form.Label>
                                <ReactMultiSelectCheckboxes options={this.state.categories} name="type" style={{zIndex: '1000'}} onChange={(e)=> this.handleType(e) } placeholderButtonLabel="Seleccionar tipo" className="especial"/>
                            </div>*/}
                            <div className="col-xl-3 col-lg-3 col-md-4 ">
                                <div className="row">
                                    <div className="col-6">
                                        <Form.Label>Desde</Form.Label>
                                        <DatePicker
                                            selected={this.state.before}
                                            onChange={(date) => this.handleDate(date, 'before')}
                                            className="form-control"
                                            locale="es"
                                            maxDate={new Date()}
                                            dateFormat="d-MM-yyyy"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <Form.Label>Hasta</Form.Label>
                                        <DatePicker
                                            selected={this.state.after}
                                            onChange={(date) => this.handleDate(date, 'after')}
                                            className="form-control"
                                            locale="es"
                                            maxDate={new Date()}
                                            dateFormat="d-MM-yyyy"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 ">
                                <button className="main-btn blue-btn w-100">Filtrar</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
      );
    }
  }
export default Searcher;
