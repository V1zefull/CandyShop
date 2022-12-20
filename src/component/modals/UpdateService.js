import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {addService, ServiceInfoOneUpdate, ServiceOneUpdate} from "../../http/userAPI";
import {useParams} from "react-router-dom";

const CreateService = ({show,onHide}) => {
    const [name,setName] = useState('')
    const [titleOld,setTitleOld] = useState('')
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const {id} = useParams()

    const createService = () =>{
        const formData = new FormData()
        formData.append('name',name)
        formData.append('service_id',id)
        formData.append('titleOld',titleOld)
        formData.append('title', title)
        formData.append('description', description)
        ServiceOneUpdate(formData.get('service_id'), formData.get('name')).then((data) => onHide())
        ServiceInfoOneUpdate(formData.get('service_id'), formData.get('titleOld'), formData.get('title'), formData.get('description')).then((data) => onHide())
    }
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
                            placeholder="Новое название"
                            autoFocus
                        />
                        <Form.Control
                            value={titleOld}
                            onChange={e => setTitleOld(e.target.value)}
                            placeholder="Старый заголовок описания"
                            autoFocus
                        />
                        <Form.Control
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Новый заголовок описания"
                            autoFocus
                        />
                        <Form.Control
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Новое описание"
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