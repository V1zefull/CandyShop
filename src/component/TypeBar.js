import React from 'react';
import {TYPE_ROUTES} from "../utils/const";
import {useNavigate} from "react-router-dom";

const TypeBar = ({type})=> {
    const navigate = useNavigate()
    console.log(type.id)
    return (
       <div onClick={()=>navigate(TYPE_ROUTES + '/' + type.id)} style={{color:"white"}}>{type.name}</div>

    );
};

export default TypeBar;