import React from 'react';
import NavComponent from "../component/NavComponent";
import FooterComponent from "../component/FooterComponent";
import ServicesComponent from "../component/ServicesComponent";

export default function Login() {
    return (
        <div className="App">
            <NavComponent/>
            <ServicesComponent/>
            <FooterComponent/>
        </div>
    );
}