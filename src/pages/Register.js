import React from 'react';
import NavComponent from "../component/NavComponent";
import FooterComponent from "../component/FooterComponent";
import RegisterComponent from "../component/RegisterComponent";


export default function Register() {
        return (
            <div className="App">
                <NavComponent/>
                <RegisterComponent/>
                <FooterComponent/>
            </div>
        );
}