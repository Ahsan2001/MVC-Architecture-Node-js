import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import logo from '../../images/header-logo.png';




function Header() {
    return (
        <React.Fragment>
            <header className="Main-header">
                <div className="container-fluid">
                    <div className="row Header-Top">
                        <div className="col-md-2">
                            <div className="social-media-icons">
                                <span> <FaFacebookF /> </span>
                                <span> <FaInstagram /> </span>
                                <span>  <FaYoutube /> </span>
                            </div>
                        </div>

                        <div className="col-md-10">
                            <div className="email-call-icons">
                                <span> <FaEnvelope /><a href="javascript:;">Indy@sunrisestaffing.us</a> </span>
                                <span> <FiPhone /><a href="javascript:;">317-350-3250</a> </span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <figure>
                                <img src={logo} className="img-fluid" />
                            </figure>
                        </div>

                        <div className="col-md-10 m-auto">
                            <div className="navlinks">
                                <ul>
                                    <li><NavLink activeClassName="nav-active" exact to="/">HOME</NavLink></li>
                                    <li><NavLink activeClassName="nav-active" exact to="/About">ABOUT US</NavLink></li>
                                    <li><NavLink activeClassName="nav-active" exact to="/Employers">EMPLOYERS</NavLink></li>
                                    <li><NavLink activeClassName="nav-active" exact to="/Job">JOB SEEKERS</NavLink></li>
                                    <li><NavLink activeClassName="nav-active" exact to="/Contact">CONTACT</NavLink></li>
                                    <li><NavLink activeClassName="nav-active" exact to="/Login">EMPLOYERS LOGIN</NavLink></li>
                                    <li><NavLink activeClassName="nav-active" exact to="/Apply">APPLY ONLINE</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </header>
        </React.Fragment>
    )
}

export default Header;