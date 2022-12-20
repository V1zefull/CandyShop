import React from 'react';

const UserServiceBarAdmin = ({servAd})=> {
    return (
        <div className='serviceListBody'>{servAd.serviceType}: {servAd.serviceName},  Номер:{servAd.number}</div>
    );
};

export default UserServiceBarAdmin;