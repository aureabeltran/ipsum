import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../layout/Footer';
import DefaultImg from '../../assets/images/default.png';
import {requestHttp} from '../services/request.service';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
} from 'react-share';
import moment from 'moment';
import 'moment/locale/es';

class ResourcesDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:{},
            loading: true,
        }
    }

    async componentDidMount(){
        window.scrollTo(0, 0)
        let data = await requestHttp.requestGet('recursos?titulo_contains='+ this.props.all.match.params.id)
        if(data){
            this.setState({
                data: data.data[0],
                loading: false
            })
        }
    }

    render() {
        return (
            <main>
                <section className="bg-source main-slider bg-resource" style={{backgroundImage: this.state.data && this.state.data.foto_header ? "url(" + this.state.data.foto_header.url + ")": "url(" + DefaultImg  + ")" }}>
                    <div className="text-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <ScrollAnimation animateOnce={true} animateIn="fadeIn" duration={1} delay={200}>
                                        <h1> {this.state.data ? this.state.data.titulo : null}</h1>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

                <section className="default-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xl-12 col-lg-12">
                                <h5 className="text-capitalize">{this.state.data ? moment(this.state.data.fecha_lanzamiento).format('LLLL') : ''}</h5>
                                <div className="shared">    
                                    <h5>Compartir</h5>
                                    <FacebookShareButton url={ "https://www.ipsumapp.co/resources/resource=" + this.state.data ? this.state.data.id : 0 } > <FacebookIcon size={20} round={true} /></FacebookShareButton> 
                                    <TwitterShareButton url={"https://www.ipsumapp.co/resources/resource="  + this.state.data ? this.state.data.id : 0} > <TwitterIcon size={20} round={true} /> </TwitterShareButton> 
                                    <WhatsappShareButton url={"https://www.ipsumapp.co/resources/resource="  + this.state.data ? this.state.data.id : 0 } > <WhatsappIcon size={20} round={true} /> </WhatsappShareButton> 
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-xl-12 col-lg-12">
                                <p>{this.state.data ? this.state.data.descripcion : null}</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Footer />
                
            </main>
        );
    }
  }
export default ResourcesDetail;