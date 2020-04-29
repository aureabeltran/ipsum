import React, { Component } from 'react';
import first from '../../assets/images/news/first.png';
import second from '../../assets/images/news/second.png';
import third from '../../assets/images/news/third.png';
import fourth from '../../assets/images/news/fourth.png';
import ScrollAnimation from 'react-animate-on-scroll';

class News extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    toggleClick(e){
        this.setState({
            area: e,
        })
    }

    render() {
      return (
            <section className="default-section news-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <ScrollAnimation animateIn="fadeInLeft" duration={1} delay={500} >
                                <h1 className="text-blue mb-5">Lorem Ipsum</h1>
                                <p className="mb-5">Amet minim consectetur culpa officia sit ut dolor non cupidatat Lorem veniam ad aliquip veniam. Duis in cillum ex consequat sit nostrud anim esse occaecat pariatur do voluptate fugiat ea.</p>
                                <a className="main-btn orange-btn"><span>Leer más</span></a>
                            </ScrollAnimation>
                        </div>  
                        <div className="offset-xl-1 col-xl-5 col-lg-6">
                            <div className="float-news">
                                <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0} className="article" >
                                    <article>
                                        <img src={first} alt="first" />
                                        <div className="overlay">
                                            <div>
                                                <h4>Lorem Ipsum</h4>
                                                <p>Lorem ipsum</p>
                                            </div>
                                        </div>
                                    </article>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200} className="article" >
                                    <article>
                                        <img src={second} alt="second" />
                                        <div className="overlay">
                                            <div>
                                                <h4>Lorem Ipsum</h4>
                                                <p>Lorem ipsum</p>
                                            </div>
                                        </div>
                                    </article>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" duration={1} delay={400} className="article" >
                                    <article>
                                        <img src={third} alt="third" />
                                        <div className="overlay">
                                            <div>
                                                <h4>Lorem Ipsum</h4>
                                                <p>Lorem ipsum</p>
                                            </div>
                                        </div>
                                    </article>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" duration={1} delay={600}  className="article" >
                                    <article>
                                        <img src={fourth} alt="fourth" />
                                        <div className="overlay">
                                            <div>
                                                <h4>Lorem Ipsum</h4>
                                                <p>Lorem ipsum</p>
                                            </div>
                                        </div>
                                    </article>
                                </ScrollAnimation>
                            </div>
                        </div>  
                    </div>
                </div>
            </section>
      );
    }
  }
export default News;