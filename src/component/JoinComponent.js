import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class JoinComponent extends Component{
    render() {
        return(
            <div className="join">
                <h2>Качественные и современные тренажёры</h2>
                <h1>В нашем фитнес-центре</h1>
                <h3>Присоединяйся к нашему клубу</h3>
                <NavLink to="/Register">Присоедениться</NavLink>
            </div>
        );
    }
}