import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {Autocomplete,TextField} from "@mui/material"
import {
    ADDServiceForUser,
    addTrainer,
    BrandGetAll,
    ServiceGetOne,
    ServiceInfoGet,
    ServiceTypeGetOne
} from "../../http/userAPI";
import {useParams} from "react-router-dom";

const AddServiceForUser = ({show,onHide}) => {
    const [number,setNumber] = useState('')
    const {id} = useParams()
    const [Service, setService] = useState({})
    const [ServiceType, setServiceType] = useState({})
    const userId = localStorage.getItem('userId');
    useEffect(()=> {
        ServiceGetOne(id).then(data => {
            setService(data)

            ServiceTypeGetOne(data.servicesTypeId).then(data =>{
                setServiceType(data)
                console.log(ServiceType.name)
            })
        })
    },[])
    const addServiceForUser = () =>{
        const formData = new FormData()
        formData.append('number',number)
        formData.append('user_id',userId)
        formData.append('service_name',Service.name)
        formData.append('services_type',ServiceType.name.toString())
        formData.append('service_id',Service.id)
        formData.append('services_type_id',Service.servicesTypeId)
        ADDServiceForUser(formData.get('number'),formData.get('user_id'),formData.get('service_name'),formData.get('services_type'),formData.get('service_id'),formData.get('services_type_id')).then((data) => onHide())
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Заполнение заявки на предоставление услуги</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                            placeholder="Номер телефона"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Отмена
                </Button>
                <Button variant="primary" onClick={addServiceForUser}>
                    Отправить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddServiceForUser;