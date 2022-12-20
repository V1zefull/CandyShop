import React, {useContext, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Context} from "../index";
import {getUserServ, getUserServAll} from "../http/userAPI";
import TrainerBar from "./TrainerBar";
import UserServiceBar from "./UserServiceBar";
import UserServiceBarAdmin from "./UserServiceBarAdmin";

const ClientComponent = () => {
    const isAdmin = useSelector(state => state.user.isAdmin)
    const [Service, setService] = useState([])
    useEffect(()=>{
        getUserServAll().then(data=>{
            setService(data)
            console.log(data)
        })
    }, [])
    return (
        <div className="Client-card">
            <div className="Base-info">
                <img src={require('../img/User-icon.png')} alt="Hello"/>
                <div className="info">
                    <p className="Name">{localStorage.getItem('name')} {localStorage.getItem('surname')}</p>
                    {!isAdmin && <p className="Role">Клиент</p>}
                    {isAdmin && <p className="Role">Админ</p>}
                </div>
            </div>
            {!isAdmin &&
                <div className='serviceList'>
                    <div className='serviceListHead'>
                        <p>Мои заявки</p>
                    </div>
                    <div className='serviceListBody'>
                        {Service?.map(serv =>
                            <UserServiceBar key={serv.id} serv={serv}/>
                        )}
                    </div>
                </div>}
            {isAdmin &&
                <div className='serviceList'>
                    <div className='serviceListHead'>
                        <p>Заявки</p>
                    </div>
                    <div className='serviceListBody'>
                        {Service?.map(serv =>
                            <UserServiceBarAdmin key={serv.id} servAd={serv}/>
                        )}
                    </div>
                </div>}
        </div>
    );
};

export default ClientComponent;