import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {addService, BrandGetAll, ServiceInfoOneUpdate, ServiceOneUpdate, TrainerUpdate} from "../../http/userAPI";
import {useParams} from "react-router-dom";
import {Autocomplete, TextField} from "@mui/material";
import {Context} from "../../index";

const ChangeTrainer = ({show,onHide}) => {
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const {trainer} = useContext(Context)
    const [brand,setBrand] = useState({})
    const {id} = useParams()

    const changeBrand = (event,brands) =>{
        setBrand(brands)
    }
    const changeTrainer = () =>{
        const formData = new FormData()
        formData.append('name',name)
        formData.append('number', number)
        formData.append('id', id)
        formData.append('brandId', brand.id)
        TrainerUpdate(formData.get('name'),formData.get('id'), formData.get('number'), formData.get('brandId'),).then((data) => onHide())
    }
    useEffect(() =>{
        BrandGetAll().then(data => trainer.setBrands(data))
    },[])
    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Изменение услуг</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Название тренажера"
                            autoFocus
                        />
                        <Form.Control
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                            placeholder="Номер тренажера"
                            style={{marginTop: 20}}
                            autoFocus
                        />
                    </Form.Group>
                    <div style={{marginTop:20}}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={trainer._brands}
                            value={brand.name}
                            getOptionLabel={(option) => option.name}
                            onChange={changeBrand}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Бренды" />}
                        />
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={changeTrainer}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ChangeTrainer;