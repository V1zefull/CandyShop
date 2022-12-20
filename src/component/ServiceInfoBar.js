import React from 'react';

const ServiceTypeBar = ({services})=> {
    console.log(services.id)
    return (
        <div className="servicesInfo">{services.title}:{services.description}</div>

    );
};

export default ServiceTypeBar;