import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {Autocomplete,TextField} from "@mui/material"
import {addTrainer, BrandGetAll} from "../../http/userAPI";
import {useParams} from "react-router-dom";

const CreateTrainin = ({show,onHide}) => {
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const {trainer} = useContext(Context)
    const [brand,setBrand] = useState({})
    const {id} = useParams()

    const changeBrand = (event,brands) =>{
        setBrand(brands)
    }

    const createTrainer = () =>{
        const formData = new FormData()
        formData.append('name',name)
        formData.append('number',number)
        formData.append('trainer_type_id',id)
        formData.append('brand_id',brand.id)
        addTrainer(formData.get('name'), formData.get('number'), formData.get('brand_id'), formData.get('trainer_type_id')).then((data) => onHide())
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
                <Modal.Title>Добавление тренажера</Modal.Title>
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
                <Button variant="primary" onClick={createTrainer}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTrainin;