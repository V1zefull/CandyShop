import React from 'react';
import {SERVICE_TYPE_ROUTES} from "../utils/const";
import {useNavigate} from "react-router-dom";

const ServiceTypeBar = ({type})=> {
    const navigate = useNavigate()
    console.log(type.id)
    return (
        <div onClick={()=>navigate(SERVICE_TYPE_ROUTES + '/' + type.id)} style={{color:"white"}} className="servicesType">{type.name}</div>

    );
};

export default ServiceTypeBar;