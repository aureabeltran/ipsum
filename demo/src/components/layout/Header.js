import React,  { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";
import CallToAction from '../partials/CallToAction';
import Pricing from '../partials/Pricing';
import ReactGA from 'react-ga';

class Header extends Component {
    constructor(props) {
      super(props);
      this.state={
        pathname: '',
        active: 0,
        activeClass: 'fas fa-chevron-down',
        activateMenu: false,
        togglePricing: false,
        isFirstTimePricing: true,
        isFirstTime: true,
        toggleForm: true
      }
    };

    componentWillUnmount() {
    }
    componentDidMount(){
      this.setState({
        pathname: window.location.pathname
      })
    }

    async changeroute(e){
      await this.setState({pathname: e})
    }

    toggleMobile(e, route){
      this.setState({
        activateMenu: !this.state.activateMenu,
        pathname: route
      })
    }

  togglePricing(e){
    ReactGA.event({
      category: 'Pricing',
      action: 'Abre cotizador'
    });
    this.setState({
        togglePricing: !this.state.togglePricing,
        isFirstTimePricing: false
    })
  }

  toggleForm(e){
    ReactGA.event({
      category: 'Demo',
      action: 'Solicita Demo'
    });
    this.setState({
        toggleform: !this.state.toggleform,
        isFirstTime: false
    })
  }



    render() {
      return (
        <Navbar expand="md"  className={ this.props.fix ? 'fixed' : '' }>
          <div className="container">
              <Link to="/" className="navbar-brand active">
                
              </Link>
              <button className={this.state.activateMenu ? "on-mobile btn-toggle-menu is-active" : "on-mobile btn-toggle-menu"} onClick={(e)=>this.toggleMobile(e)}> <span className="navbar-toggler-icon"></span></button>
              <Navbar.Collapse id="basic-navbar-nav" className={this.state.activateMenu ? 'navbar-collapse active' : 'navbar-collapse '}>
                <Nav className="ml-auto">
                  <Link to="/proplanner" onClick={(e)=>this.toggleMobile(e, '/proplanner')} className={this.state.pathname === '/proplanner' ? "nav-link with-line" : 'nav-link'} ><span className="link-text">ProPlanner</span></Link>
                  <Link to="/resources"  onClick={(e)=>this.toggleMobile(e, '/resources')} className={this.state.pathname === '/resources' ? "nav-link with-line" : 'nav-link'} ><span className="link-text">Resources</span></Link>
                  <p className="nav-link" onClick={()=>this.togglePricing()}><span className="link-text">Pricing</span></p>
                  <Nav.Link href="https://www.proplanner.cl/" target="_blank" className="log on-mobile"><span className="link-text">Login </span></Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Nav.Link href="https://www.proplanner.cl/" target="_blank" className="log on-desktop"><span className="link-text">Login </span></Nav.Link>
              <button onClick={(e)=>this.toggleForm(e)} className="main-btn orange-btn on-desktop"><span>Pide tu Demo</span></button>
          </div>
          {this.state.isFirstTimePricing ? null : 
                <Pricing isActive={ this.state.togglePricing } onClick={()=> this.togglePricing()} />}
          {this.state.isFirstTime ? null : 
                <CallToAction isActive={ this.state.toggleform } onClick={()=> this.toggleForm()} />}
        </Navbar>
      );
    }
  }
export default Header;
