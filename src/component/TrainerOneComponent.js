import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {BrandGet, TrainerGetOne, TypeGetOne} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import Button from "react-bootstrap/Button";
import CreateServiceInfo from "./modals/CreateServiceInfo";
import {useSelector} from "react-redux";
import DeleteTrainer from "./modals/DeleteTrainer";
import ChangeTrainer from "./modals/ChangeTrainer";
import {Context} from "../index";

const TrainerOneComponent = observer( () => {
    const {id} = useParams()
    const {trainer} = useContext(Context)
    const [Trainer, setTrainer] = useState({})
    const [brand, setBrand] = useState({})
    const [serviceVisible,setServiceVisible] = useState(false)
    const [trainerChangeVisible,setTrainerChangeVisible] = useState(false)
    const isAdmin = useSelector(state => state.user.isAdmin)
    useEffect(()=>{
        TrainerGetOne(id).then(data => {
            setTrainer(data)
            console.log(data)
            BrandGet(data.brandId).then(data => {
                setBrand(data)
            })
        })

    }, [])

    return (
        <div className="Trainer">
            <div className="Trainer-Container">
                <div className="TrainerCardInfo">
                    <p>{Trainer.name}</p>
                    <div className="TrainerIMG"><img src={require("../img/Elips.png")} alt=""/></div>
                    <p>Информация о тренажёре</p>
                </div>
                <div className="TrainerIndividualOne">
                    <p>Индивидуальный номер: {Trainer.number}</p>
                    <p>Тип тренажёра: {Trainer.name}</p>
                    <p>Бренд тренажёра:
                        {brand.name}
                    </p>
                </div>
                {isAdmin &&  <Button
                    variant={"outline-light"}
                    style={{marginTop: 40}}
                    onClick={() => setServiceVisible(true)}
                >
                    Удалить тренажёр
                </Button>}
                {isAdmin &&  <Button
                    variant={"outline-light"}
                    style={{marginTop: 40, marginLeft:15}}
                    onClick={() => setTrainerChangeVisible(true)}
                >
                    Изменить тренажёр
                </Button>}
                <DeleteTrainer show={serviceVisible} onHide={() => setServiceVisible(false)}/>
                <ChangeTrainer show={trainerChangeVisible} onHide={() => setTrainerChangeVisible(false)}/>
            </div>
        </div>
    );
});

export default TrainerOneComponent;