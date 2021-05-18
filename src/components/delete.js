import React from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';

class Delete extends React.Component {

    state = {
        id: "",
        modalDelete: true
    }

    componentDidMount(){
        const qId = new URLSearchParams(window.location.search).get("id");
        this.setState({id: qId});
    }

    handleClose = () => {
        this.setState({modalDelete: false});
        window.location.href = "/Crud_React/";
    };

    handleClickDelete = (event) => {
        //Eliminar       

        axios.get(`/Crud_React/deleteQuestion?id=${this.state.id}`).then(response => {
            console.info(response.data);
            /*if (response.data.message) {
                alert(response.data.message);
            } else {
                //alert(response.data.error);
            }*/
        }).catch(error => {
            console.info(error);
            alert(response.data.message);
        }).finally(() => {

            window.location.href = "/Crud_React/";
        });

    }

    render() {
        console.log(this.state);
        return (
            <Container className="MarginContainer">
                <Modal show={this.state.modalDelete} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmacion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Esta seguro que desea eliminar la pregunta?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={this.handleClickDelete}>
                            Aceptar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}

export default Delete;