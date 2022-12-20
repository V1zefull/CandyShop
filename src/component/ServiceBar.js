import React from 'react';
import {SERVICE_ROUTES} from "../utils/const";
import {useNavigate, useParams} from "react-router-dom";

const TrainerBar = ({services})=> {
    const navigate = useNavigate()
    const {id} = useParams()
    const check = (id, typeId) => {
        if (typeId.toString() === id){
            return true
        }
        else {
            return false
        }
    }
    return (
        <div>
            {check(id, services.servicesTypeId) &&
                <div onClick={()=>navigate(SERVICE_ROUTES + '/' + services.id)} style={{color:"white", marginRight:15}} className='servicesType'>{services.name}</div>
            }
        </div>
    );
};

export default TrainerBar;