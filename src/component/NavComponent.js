import React, {Component} from "react";
import logo from '../img/logo.png';
import {NavLink} from "react-router-dom";
export default class NavComponent extends Component{
    render() {
        return (
            <header>
                <div className="Logo">
                    <img src={logo} alt="123"/>
                    GrandGym
                </div>
                <ul className="NavBar">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">Services</NavLink></li>
                    <li><NavLink to="/">About us</NavLink></li>
                    <li><NavLink to="/">Contact</NavLink></li>
                    <li><NavLink to="/Register">Register</NavLink></li>
                </ul>
            </header>
        );
    }
}