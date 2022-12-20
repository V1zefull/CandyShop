import React from 'react';
import {useParams} from "react-router-dom";

const UserServiceBar = ({serv})=> {
    const id = localStorage.getItem('userId')
    const check = (id, userId) => {
        if (userId.toString() === id){
            return true
        }
        else {
            return false
        }
    }
    return (
        <div>
            {check(id, serv.userId) &&
                <div className='serviceListBody'>{serv.serviceType}: {serv.serviceName}</div>
            }
        </div>
    );
};

export default UserServiceBar;