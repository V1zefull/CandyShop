import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {ServiceGetOne, ServiceInfoGet} from "../http/userAPI";
import {useSelector} from "react-redux";
import ServiceInfoBar from "./ServiceInfoBar";
import Button from "react-bootstrap/Button";
import CreateServiceType from "./modals/CreateServiceType";
import CreateServiceInfo from "./modals/CreateServiceInfo";
import DeleteService from "./modals/DeleteService";
import UpdateService from "./modals/UpdateService";
import AddServiceForUser from "./modals/AddServiceForUser";

const ServiceOneComponent = () => {
    const {id} = useParams()
    const [Service, setService] = useState({})
    const [ServiceInfo, setServiceInfo] = useState([])
    const [serviceVisible,setServiceVisible] = useState(false)
    const [serviceChangeVisible,setServiceChangeVisible] = useState(false)
    const [serviceDeleteVisible,setServiceDeleteVisible] = useState(false)
    const [serviceUserVisible,setServiceUserVisible] = useState(false)
    const isAdmin = useSelector(state => state.user.isAdmin)
    useEffect(()=> {
        ServiceGetOne(id).then(data => {
            setService(data)
            ServiceInfoGet(data.id).then(data => {
                setServiceInfo(data)
            })
        })
    },[])
    return (
        <div className="Service">
            <div className="Service-container">
                <div className="ServiceCardInfo">
                    <h1>{Service.name}</h1>
                    <p>Информация об услуге: </p>
                </div>
                <div className="ServiceInfo">
                    {ServiceInfo?.map(services =>
                        <div><ServiceInfoBar key={services.id} services={services}/></div>
                    )}
                </div>
                {isAdmin &&  <Button
                    variant={"outline-light"}
                    style={{marginTop: 40}}
                    onClick={() => setServiceDeleteVisible(true)}
                >
                    Удалить услугу
                </Button>}
                {isAdmin &&  <Button
                    variant={"outline-light"}
                    style={{marginTop: 40, marginLeft:15}}
                    onClick={() => setServiceChangeVisible(true)}
                >
                    Изменить услугу
                </Button>}
                {isAdmin &&  <Button
                    variant={"outline-light"}
                    style={{marginTop: 40, marginLeft:15}}
                    onClick={() => setServiceVisible(true)}
                >
                    Добавить описание услуги
                </Button>}
                <DeleteService show={serviceDeleteVisible} onHide={() => setServiceDeleteVisible(false)}/>
                <UpdateService show={serviceChangeVisible} onHide={() => setServiceChangeVisible(false)}/>
                <CreateServiceInfo show={serviceVisible} onHide={() => setServiceVisible(false)}/>
                {!isAdmin && <Button
                    variant={"outline-light"}
                    style={{marginTop: 40, marginLeft:15}}
                    onClick={() => setServiceUserVisible(true)}
                >
                    Оставить заявку
                </Button>}
                <AddServiceForUser show={serviceUserVisible} onHide={() => setServiceUserVisible(false)}/>
            </div>
        </div>
    );
};

export default ServiceOneComponent;