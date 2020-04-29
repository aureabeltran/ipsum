import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../layout/Footer';
import Searcher from './Searcher';
import Box from './Boxes';
import {requestHttp} from '../services/request.service';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactGA from 'react-ga';

class Resources extends Component {
    constructor(props) {
        super(props);
        this.state={
            banner: {title: 'Plan better. Build on time.', bajada: 'Lean scheduling and planning software for the west generation of builders, by builders.', first_button: 'Conoce más', second_button: 'Pide tu demo'},
            activated: 1,
            toggleform: false,
            data:[], 
            loading: true,
            quantity: 10,
            hasMore: true,
            alldata: []
        }
    }

    async componentDidMount(){
        ReactGA.pageview(window.location.pathname + window.location.search);
        window.scrollTo(0, 0)
        if(this.props.all.location.search !== ''){
            let data = await requestHttp.requestGet('recursos' + this.props.all.location.search)
            if(data){
                this.setState({
                    data: data.data.slice(0, 8),
                    alldata: data.data,
                    loading: false
                })
            }
        }
        else{
            let data = await requestHttp.requestGet('recursos')
            if(data){
                this.setState({
                    data: data.data.slice(0, 8),
                    alldata: data.data,
                    loading: false
                })
            }
        }
        
    }

    toggleForm(e){
        this.setState({
            toggleform: !this.state.toggleform,
        })
    }

    renderItems(e){
        this.setState({
            data: e
        })
    }
    async handleReload(){
        if (this.state.data.length >= this.state.alldata.length) {
            this.setState({
                hasMore: false,
            })
        } else {
            const index = this.state.data.length
            await setTimeout(() => {
                this.setState({
                    loading: true,
                    data: this.state.data.concat(this.state.alldata.slice(index, index + 8))
                });
            }, 1500);
        }
    }
    render() {
        return (
            <main>
                <section className=" bg-source main-slider">
                    <div className="text-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                <ScrollAnimation animateOnce={true} animateIn="fadeIn" duration={1} delay={200}>
                                    <h1>Noticias y Recursos</h1>
                                </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Searcher items={ this.state.data } onClick={(e) => this.renderItems(e)}  />
                <section className="default-section resources-section" style={{paddingTop: '0px'}}>
                    <div className="container">
                        <InfiniteScroll
                            pageStart={1}
                            className="py-5 row no-gutters boxes-section"
                            dataLength={this.state.alldata.length}
                            hasMore={this.state.hasMore}
                            loadMore={()=>this.handleReload()}
                            endMessage={
                                <div style={{textAlign: 'center'}} className="col-sm-12 py-5">
                                    <b className="my-4 d-block">No hay más eventos</b>
                                </div>
                            }
                            loader={this.state.loading ? 
                                <div className="py-5 text-center w-100">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Cargando ..</span>
                                    </div>
                                </div> : null } >
                                    {this.state.data.map((item, index) => 
                                        <Box data={item} key={index}/>)}
                        </InfiniteScroll>
                    </div>                    
                </section> 

              {/*}  <section className="pagination-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xl-12 col-lg-12">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true"></span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    </section>*/}
                
                <Footer />
                
            </main>
        );
    }
  }
export default Resources;