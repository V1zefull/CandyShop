import React from 'react';
import NavComponent from "../component/NavComponent";
import FooterComponent from "../component/FooterComponent";
import ServicesComponentType from "../component/ServiceComponentType";

export default function Login() {
    return (
        <div className="App">
            <NavComponent/>
            <ServicesComponentType/>
            <FooterComponent/>
        </div>
    );
}