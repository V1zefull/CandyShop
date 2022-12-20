import React from 'react';
import {TRAINER_ROUTES} from "../utils/const";
import {useNavigate, useParams} from "react-router-dom";

const TrainerBar = ({train})=> {
    const navigate = useNavigate()
    const {id} = useParams()
    const check = (id, name) => {
        if (name.toString() === id){
            return true
        }
        else {
            return false
        }
    }
    return (
        <div>
            {check(id, train.trainerTypeId) &&
                <div onClick={()=>navigate(TRAINER_ROUTES + '/' + train.id)} style={{color:"white", marginRight:15}}>{train.number}</div>
            }
        </div>
    );
};

export default TrainerBar;