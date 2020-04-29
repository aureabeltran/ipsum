import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from "react-router-dom";
import DefaultImg from '../../assets/images/default.png';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return (
            <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200} animateOnce={true} className="box " >
                    
                <div className="card" >
                    <Link to={'/resources/resource=' + this.props.data.titulo.toLowerCase()}>
                        <div className={this.props.data.label === '5e9a464d8d5fa70c079636d0 ' ? "image-container is_video" : "image-container"}>
                            <img src={this.props.data.fotos ?  this.props.data.fotos.url : DefaultImg} alt="Rfirst" className="card-img-top" />
                        </div>
                        <div className="tag-card">
                            <h5 className="card-title">{this.props.data.categorias.length > 0 ? this.props.data.categorias[0].nombre : ''}</h5>
                            <hr></hr>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{this.props.data.titulo}</p>
                            <span className="read-more"> Leer más</span>
                        </div>
                    </Link>
                </div>
            
            </ScrollAnimation>
        );
    }
  }
export default Box;