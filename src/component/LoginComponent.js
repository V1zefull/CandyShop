import React, {Component} from 'react';

export default class Login extends Component{
    render() {
        return(
            <div className="Form">
                <p className="RegLog">Login</p>
                <form className="InputForm">
                    <input type="text" name="Email" placeholder=" Email"/>
                    <input type="text" name="Password" placeholder=" Password"/>
                </form>
                <button>Login</button>
            </div>
        );
    }
}