import React from 'react';

const InventoryComponent = () => {
    return (
        <div className="services">
            <div className="serv-container">
                <h1>Спорт инвентарь</h1>
                <div className="serv-in">
                    <div className="inv-div"><img src={require("../img/Elips.png")} alt=""/></div>
                    <div className="inv-div"><img src={require("../img/RunRoad.png")} alt=""/></div>
                    <div className="inv-div"><img src={require("../img/Jim.png")} alt=""/></div>
                </div>
                <div className="serv-in">
                    <div className="inv-div"><img src={require("../img/StrenghFit.png")} alt="Картинка тренажёра"/></div>
                    <div className="inv-div"><img src={require("../img/BackFit.png")} alt="Картинка тренажёра"/></div>
                    <div className="inv-div"><img src={require("../img/ArmFit.png")} alt="Картинка тренажёра"/></div>
                </div>
            </div>
        </div>
    );
};

export default InventoryComponent;