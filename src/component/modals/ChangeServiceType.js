import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {ServiceTypeUpdate} from "../../http/userAPI";
import {useParams} from "react-router-dom";

const ChangeServiceType = ({show,onHide}) => {
    const [name,setName] = useState('')
    const {id} = useParams()

    const changeServiceType = () =>{
        const formData = new FormData()
        formData.append('name',name)
        formData.append('service_type_id',id)
        ServiceTypeUpdate(formData.get('service_type_id'), formData.get('name')).then((data) => onHide())
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Изменение типа услуг</Modal.Title>
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
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={changeServiceType}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ChangeServiceType;