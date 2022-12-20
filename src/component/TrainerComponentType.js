import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {Context} from "../index";
import {TrainerGetAll, TypeGetOne} from "../http/userAPI";
import TrainerBar from "./TrainerBar";
import Button from "react-bootstrap/Button";
import CreateTrainin from "./modals/CreateTrainin";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";

const TrainerComponentType = () => {
    const {trainer} = useContext(Context)
    const {id} = useParams()
    const [trainerVisible,setTrainerVisible] = useState(false)
    const [type, setType] = useState({})
    const isAdmin = useSelector(state => state.user.isAdmin)
    useEffect(()=>{
        TypeGetOne(id).then(data =>{
            setType(data)
        })
        TrainerGetAll().then(data => {
            trainer.setTrainer(data)
        })
    }, [])

    return (
        <div className="Trainer">
            <div className="Trainer-Container">
                <div className="TrainerCardInfo">
                    <p>{type.name}</p>
                    <div className="TrainerIMG"><img src={require("../img/Elips.png")} alt=""/></div>
                    <p>Индивидуальные номера</p>
                </div>
                <div className="TrainerIndividual">
                    {trainer._trainers?.map(train =>
                       <TrainerBar key={train.id} train={train}/>
                    )}
                </div>
                {isAdmin && <Button variant={"outline-light"} onClick={() => setTrainerVisible(true)}> Добавить </Button>}
            </div>
            <CreateTrainin show={trainerVisible} onHide={() => setTrainerVisible(false)}/>
        </div>
    );
};

export default TrainerComponentType;