import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class Login extends Component{
    render() {
        return(
            <div className="Form">
                <p className="RegLog">Register</p>
                <form className="InputForm">
                    <input type="text" name="Email" placeholder=" Email"/>
                    <input type="text" name="Password" placeholder=" Password"/>
                    <input type="text" name="Confirm password" placeholder=" Confirm password"/>
                </form>
                <p className="log">if you already have account <NavLink to="/Login">LOGIN</NavLink></p>
                <button>Register</button>
            </div>
        );
    }
}