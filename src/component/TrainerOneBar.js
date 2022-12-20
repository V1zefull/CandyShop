import React, {useEffect, useState} from 'react';
import {TRAINER_ROUTES} from "../utils/const";
import {useNavigate, useParams} from "react-router-dom";
import {TrainerGetOne, TypeGet} from "../http/userAPI";

const TrainerOneBar = ({train},{Train})=> {
    const navigate = useNavigate()
    const check = (id, name) => {
        if (name.toString() === id){
            console.log(train.id)
            return true
        }
        else {
            return (
                console.log(train.id)
            )

        }
    }
    return (
        <div>
            {check(Train.trainerTypeId, train.id) &&
                <div onClick={()=>navigate(TRAINER_ROUTES + '/' + train.id)} style={{color:"white", marginRight:15}}>{train.name}</div>
            }
        </div>
    );
};

export default TrainerOneBar;