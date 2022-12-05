import React from 'react';
import NavComponent from "../component/NavComponent";
import FooterComponent from "../component/FooterComponent";
import ClientComponent from "../component/ClientComponent";

export default function Client() {
    return (
        <div className="App">
            <NavComponent/>
            <ClientComponent/>
            <FooterComponent/>
        </div>
    );
}