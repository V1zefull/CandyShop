import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Context} from "../index";
import {ServiceGetAll, ServiceTypeGetOne} from "../http/userAPI";
import ServiceBar from "./ServiceBar";
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";
import CreateService from "./modals/CreateService";
import ChangeServiceType from "./modals/ChangeServiceType";

const ServicesComponent = () => {
    const {service} = useContext(Context)
    const {id} = useParams()
    const [serviceType, setServiceType] = useState({})
    const [serviceVisible,setServiceVisible] = useState(false)
    const [ServiceTypeChangeVisible,setServiceTypeChangeVisible] = useState(false)
    const isAdmin = useSelector(state => state.user.isAdmin)
    useEffect(()=>{
        ServiceTypeGetOne(id).then(data => {
            setServiceType(data)
            console.log(data)
        })
        ServiceGetAll().then(data =>{
            service.setService(data)
            console.log(data)
        })
    }, [])
    return (
        <div className="services">
            <div className="serv-container">
                <h1>{serviceType.name}</h1>
                <div className="serv-in">
                    {service._services?.map(services =>
                        <ServiceBar key={services.id} services={services}/>
                    )}
                </div>
                {isAdmin &&  <Button
                    variant={"outline-light"}
                    style={{marginTop: 40}}
                    onClick={() => setServiceVisible(true)}
                >
                    Добавить новую услугу
                </Button>}
                {isAdmin &&  <Button
                    variant={"outline-light"}
                    style={{marginTop: 40}}
                    onClick={() => setServiceTypeChangeVisible(true)}
                >
                    Изменить тип услуги
                </Button>}

                <CreateService show={serviceVisible} onHide={() => setServiceVisible(false)}/>
                <ChangeServiceType show={ServiceTypeChangeVisible} onHide={() => setServiceTypeChangeVisible(false)}/>
            </div>
        </div>
    );
};

export default ServicesComponent;