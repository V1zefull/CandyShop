import React from 'react';
import NavComponent from "../component/NavComponent";
import FooterComponent from "../component/FooterComponent";
import LoginComponent from "../component/LoginComponent";

export default function Login() {
    return (
        <div className="App">
            <NavComponent/>
            <LoginComponent/>
            <FooterComponent/>
        </div>
    );
}