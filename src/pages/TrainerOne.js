import React from 'react';
import NavComponent from "../component/NavComponent";
import FooterComponent from "../component/FooterComponent";
import TrainerOneComponent from "../component/TrainerOneComponent";

export default function TrainerOne() {
    return (
        <div className="App">
            <NavComponent/>
            <TrainerOneComponent/>
            <FooterComponent/>
        </div>
    );
}