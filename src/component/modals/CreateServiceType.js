import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {addServiceType} from "../../http/userAPI";

const CreateService = ({show,onHide}) => {
    const [name,setName] = useState('')


    const createServiceType = () =>{
        const formData = new FormData()
        formData.append('name',name)
        addServiceType(formData.get('name')).then((data) => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавление типа услуги</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Название типа услуги"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={createServiceType}>
                    Сохранить изменения
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateService;