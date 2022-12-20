import React from 'react';
import NavComponent from "../component/NavComponent";
import FooterComponent from "../component/FooterComponent";
import TrainerComponentType from "../component/TrainerComponentType";

export default function Trainer() {
    return (
        <div className="App">
            <NavComponent/>
            <TrainerComponentType/>
            <FooterComponent/>
        </div>
    );
}