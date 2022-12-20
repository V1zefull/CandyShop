import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {addTrainerBrand} from "../../http/userAPI";


const CreateTrainin = ({show,onHide}) => {
    const [name,setName] = useState('')

    const createTrainerType = () =>{
        const formData = new FormData()
        formData.append('name',name)
        addTrainerBrand(formData.get('name')).then((data) => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавление бренда тренажёра</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Название бренда"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={createTrainerType}>
                    Созранить изменения
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTrainin;