import React from 'react';
import Logo from '../../assets/images/logo.png';

class Header extends React.Component {
    render() {
      return (
        <footer>
            <div className="container">
              <div className="footer-lists">
                <div className="list">
                  <h5>Company</h5>
                  <ul>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Integrations</a></li>
                    <li><a href="/">Newsroom</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Blog</a></li>
                  </ul>
                </div>
                <div className="list">
                  <h5>Pro Planner</h5>
                  <ul>
                    <li><a href="/">Product</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Case studies</a></li>
                    <li><a href="/">Security</a></li>
                    <li><a href="/">API</a></li>
                  </ul>
                </div>
                <div className="list">
                  <h5>Training</h5>
                  <ul>
                    <li><a href="/">Training</a></li>
                    <li><a href="/">Consulting</a></li>
                    <li><a href="/">Schools & unions</a></li>
                    <li><a href="/">Support</a></li>
                  </ul>
                </div>
                <div className="list">
                  <h5>Resources</h5>
                  <ul>
                    <li><a href="/">Resources center</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/">Webinars</a></li>
                    <li><a href="/">ROI</a></li>
                    <li><a href="/">Status Page</a></li>
                  </ul>
                </div>
                <div className="list">
                  <h5>Follow Us</h5>
                  <ul className="redes">
                    <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                  </ul>
                  <h5>Download</h5>
                  <ul>
                    <li><a href="/">IOS</a></li>
                    <li><a href="/">Android</a></li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <hr className="black" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <img src={Logo} alt="logo" className="img-fluid my-4" />
                  <small className="text-sky-blue mb-5">
                    Nostrud excepteur magna aliquip irure irure ullamco aliquip do duis quis commodo nostrud. Sit consequat eu anim et sit voluptate deserunt ipsum adipisicing ut anim commodo. Amet aliquip tempor nostrud velit nostrud. Consequat cupidatat nostrud voluptate tempor ex velit nisi sunt aliqua cupidatat.
                  </small>
                </div>
                <div className="col-md-12 text-center">
                  <h6>&copy; Copyright 2019 <span className="text-skyblue">IPSUM</span> - Todos los derechos reservados. <a className="text-skyblue" href="/">Privacy Policy</a></h6>
                </div>
              </div>
            </div>
        </footer>
      );
    }
  }
  export default Header;