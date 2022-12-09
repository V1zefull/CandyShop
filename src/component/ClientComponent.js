import React from 'react';
import {useSelector} from "react-redux";

const ClientComponent = () => {
    const isAdmin = useSelector(state => state.user.isAdmin)
    return (
        <div className="Client-card">
            <div className="Base-info">
                <img src={require('../img/User-icon.png')} alt="Hello"/>
                <div className="info">
                    <p className="Name">{localStorage.getItem('name')} {localStorage.getItem('surname')}</p>
                    {!isAdmin && <p className="Role">Client</p>}
                    {isAdmin && <p className="Role">Trainer</p>}
                </div>

            </div>

        </div>
    );
};

export default ClientComponent;