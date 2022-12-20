import React from 'react';
import NavComponent from "../component/NavComponent";
import FooterComponent from "../component/FooterComponent";
import ServiceOneComponent from "../component/ServiceOneComponent";

export default function Login() {
    return (
        <div className="App">
            <NavComponent/>
            <ServiceOneComponent/>
            <FooterComponent/>
        </div>
    );
}