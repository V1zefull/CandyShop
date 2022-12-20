import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {addService} from "../../http/userAPI";
import {useParams} from "react-router-dom";

const CreateService = ({show,onHide}) => {
    const [name,setName] = useState('')
    const {id} = useParams()

    const createService = () =>{
        const formData = new FormData()
        formData.append('name',name)
        formData.append('service_type_id',id)
        addService(formData.get('name'), formData.get('service_type_id')).then((data) => onHide())
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавление услуги</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Название услуги"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={createService}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateService;