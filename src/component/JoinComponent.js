import React, {Component} from "react";

export default class JoinComponent extends Component{
    render() {
        return(
            <div className="join">
                <h2>Качественные и современные тренажёры</h2>
                <h1>В нашем фитнес-центре</h1>
                <h3>Присоединяйся к нашему клубу</h3>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">Присоедениться</a>
            </div>
        );
    }
}