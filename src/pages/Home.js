import React from "react";
import '../App.css';
import NavComponent from "../component/NavComponent";
import JoinComponent from "../component/JoinComponent";
import FooterComponent from "../component/FooterComponent";
export default function Home(){
        return (
            <div className="App">
                <NavComponent/>
                <JoinComponent/>
                <FooterComponent/>
            </div>
        );
}