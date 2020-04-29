import React from 'react';
import Logo from '../../assets/images/logos/logo-white.gif';
import Ios from '../../assets/images/logos/app-store.png';
import Android from '../../assets/images/logos/market-place.png';
import {Link} from "react-router-dom";
import doc from '../../assets/docs/IPSUM-privacy-policy.pdf'


class Footer extends React.Component {
    render() {
      return (
        <div>
            <div className="buildings">
              
            </div>
            <footer>
              <div className="container">
                <div className="footer-lists row">
                  <div className=" list col-lg-3 col-md-3 col-6">
                    <h5>Nosotros</h5>
                    <ul>
                      <li><a href="/about#company">Company</a></li>
                      <li><a href="/about#ourteam">Our Team</a></li>
                    </ul>
                  </div>
                  <div className=" list col-lg-3 col-md-3 col-6">
                    <h5>ProPlanner</h5>
                    <ul>
                      <li><a href="/proplanner#product">Producto</a></li>
                      <li><a href="/proplanner#characteristics">Características</a></li>
                      <li><a href="/proplanner#integrations">Integraciones</a></li>
                      <li><a href="/proplanner#industries">Industrias</a></li>
                    </ul>
                  </div>
                  <div className="list col-lg-3 col-md-3 col-6">
                    <h5>Recursos</h5>
                    <ul>
                      <li><Link to="/resources?label_contains=5ea72f526b51e50ef547058a">Blog</Link></li>
                      <li><Link to="/resources?label_contains=5e8e26e96952806f97c482a4">Noticias</Link></li>
                      <li><Link to="/resources?label_contains=5e9a464d8d5fa70c079636d0">Webinars</Link></li>
                    </ul>
                  </div>
                  <div className=" list col-lg-3 col-md-3 col-6">
                    <h5>Descarga</h5>
                    <ul>
                      <li><a href="https://apps.apple.com/cl/app/proplanner/id1436981907" rel="noopener noreferrer" target="_blank"><img src={Ios} alt="IOS" className="img-fluid my-2" /></a></li>
                      <li><a href="https://play.google.com/store/apps/details?id=co.ipsumapp.proplanner&hl=es_CL" rel="noopener noreferrer" target="_blank"><img src={Android} alt="Android" className="img-fluid" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>

                <div className="line">
                  <ul className="redes">
                    <li><a href="https://www.youtube.com/channel/UC8u_9Kq32QpRKVhPgb2pKgg" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                    <li><a href="https://www.facebook.com/ipsumapp/?__tn__=%2Cd%2CP-R&eid=ARB8kqZMG7O0HIenL9CFqkaCGnKk9EULR2_mhBA4gANCq9oSaAR0-ODzY0FMSmYFlKTAxNKPCllpQwDR" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/ipsumapp/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://www.instagram.com/ipsumapp/?hl=es-la" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/ipsumapp?lang=es" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                  </ul>
                </div>
                <div className="container"> 
                  <div className="row" style={{alignItems: 'center'}}>
                    <div className="col-md-6">
                      <a href="/">
                        <img src={Logo} alt="logo" className="img-fluid logo" /> 
                      </a>
                    </div>
                    <div className="col-md-6 text-right">
                      <h6 className="mb-0">&copy; Copyright 2020 <span className="text-skyblue">IPSUM</span> - Todos los derechos reservados. <a target="_blank" className="text-skyblue" rel="noopener noreferrer" href={doc}>Privacy Policy</a></h6>
                    </div>
                </div>
              </div>
          </footer>
        </div>
      );
    }
  }
  export default Footer;