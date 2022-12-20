import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {addService, addServiceInfo} from "../../http/userAPI";
import {useParams} from "react-router-dom";

const CreateServiceInfo = ({show,onHide}) => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const {id} = useParams()

    const createServiceInfo = () =>{
        const formData = new FormData()
        formData.append('name',title)
        formData.append('description',description)
        formData.append('service_id',id)
        addServiceInfo(formData.get('name'),formData.get('description'), formData.get('service_id')).then((data) => onHide())
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавление Описания услуги</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Заголовок"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Описание"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={createServiceInfo}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateServiceInfo;