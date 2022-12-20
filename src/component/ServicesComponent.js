import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {ServiceTypeGetAll} from "../http/userAPI";
import ServiceTypeBar from "./ServiceTypeBar";
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";
import CreateTrainertype from "./modals/CreateTrainertype";
import CreateServiceType from "./modals/CreateServiceType";

const ServicesComponent = () => {
    const {service} = useContext(Context)
    const [ServiceType, SetServiceType] = useState({})
    const [serviceVisible,setServiceVisible] = useState(false)
    const isAdmin = useSelector(state => state.user.isAdmin)
    useEffect(()=>{
        ServiceTypeGetAll().then(data => {
            service.setServiceType(data)
            console.log(data)
        })
    }, [])
    return (
        <div className="services">
            <div className="serv-container">
                <h1>Услуги</h1>
                <div className="serv-container-in">
                    <div className="serv-in">
                        {service._types?.map(type =>
                            <div><ServiceTypeBar key={type.id} type={type}/></div>
                        )}
                    </div>
                </div>
                {isAdmin &&  <Button
                    variant={"outline-light"}
                    style={{marginTop: 40}}
                    onClick={() => setServiceVisible(true)}
                >
                    Добавить новый тип услуги
                </Button>}
                <CreateServiceType show={serviceVisible} onHide={() => setServiceVisible(false)}/>
            </div>
        </div>
    );
};
export default ServicesComponent;