import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react";
import {Context} from "../index";
import {TypeGet} from "../http/userAPI";
import TypeBar from "./TypeBar";
import Button from "react-bootstrap/Button";
import CreateTrainertype from "./modals/CreateTrainertype";
import CreateTrainerBrand from "./modals/CreateTrainerBrand";
import {useSelector} from "react-redux";

const InventoryComponent = observer(() => {
    const {trainer} = useContext(Context)
    const [typeVisible,setTypeVisible] = useState(false)
    const [brandVisible,setBrandVisible] = useState(false)
    const isAdmin = useSelector(state => state.user.isAdmin)
    useEffect(()=>{
        TypeGet().then(data => {
            trainer.setTypes(data)
            console.log(data)
        })
    }, [])
    return (
        <div className="services">
            <div className="serv-container">
                <h1>Спорт инвентарь</h1>
                <div className="serv-in">
                    {trainer._types?.map(type =>
                        <div className="servicesType"><TypeBar key={type.id} type={type}/></div>
                    )}
                </div>
            </div>
            {isAdmin &&  <Button
                variant={"outline-light"}
                style={{marginTop: 40}}
                onClick={() => setTypeVisible(true)}
            >
                Добавить новый тип
            </Button>}
            {isAdmin && <Button
                style={{marginTop: 40, marginLeft: 20}}
                variant={"outline-light"}
                onClick={() => setBrandVisible(true)}
            >
                Добавить новый бренд
            </Button>}
            <CreateTrainertype show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateTrainerBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
        </div>
    );
});

export default InventoryComponent;