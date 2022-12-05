import React from 'react';
import {useSelector} from "react-redux";

const ClientComponent = () => {
    const isClient = useSelector(state => state.user.isClient)
    const isAdmin = useSelector(state => state.user.isAdmin)
    return (
        <div className="Client-card">
            <div className="Base-info">
                <img src={require('../img/User-icon.png')} alt="Hello"/>
                <div className="info">
                    <p className="Name">Боровлев Егор Андреевич</p>
                    <p className="Role">Клиент/Тренер</p>
                    {isClient && <p className="Role">Клиент</p>}
                    {isAdmin && <p className="Role">Тренер</p>}
                </div>

            </div>

        </div>
    );
};

export default ClientComponent;