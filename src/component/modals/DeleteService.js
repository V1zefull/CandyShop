import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {ServiceOneDelete} from "../../http/userAPI";
import {useParams} from "react-router-dom";

const DeleteService = ({show,onHide}) => {
    const {id} = useParams()

    const deleteService = () =>{
        const formData = new FormData()
        formData.append('id', id)
        ServiceOneDelete(formData.get('id')).then((data) => onHide())
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Вы действительно хотите удалить?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Отмена
                </Button>
                <Button variant="primary" onClick={deleteService}>
                    Удалить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteService;