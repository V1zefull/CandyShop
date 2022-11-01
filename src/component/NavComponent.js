import React, {Component} from "react";
import logo from '../img/logo.png';

export default class NavComponent extends Component{
    render() {
        return (
            <header>
                <div className="Logo">
                    <img src={logo} alt="123"/>
                    GrandGym
                </div>
                <ul className="NavBar">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Home</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Services</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">About us</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Contact</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Login</a></li>
                </ul>
            </header>
        );
    }
}