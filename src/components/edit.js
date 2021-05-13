import React from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
// import useState from 'react';

class Edit extends React.Component {

    state = {
        id: "",
        pregunta: "",
        respuesta: "",
        drags: [],
        targets: [],
        // contador: 0
    }

    componentDidMount() {
        const qId = new URLSearchParams(window.location.search).get("id");
        if (qId) {
            axios.get("/Crud_React/Preguntas?id="+qId).then(response => {
                const question = response.data[0];
                this.setState({ ...question });
            }).catch(error => {
                console.info(error);
                alert("Ha ocurrido un error");
            });
        }
    }

    // actualizarCampo = (e, { name, value}) => {
    //     this.setState({ [name]: value });
    // };  

    render() {
        const { pregunta, respuesta, drags, targets } = this.state;

        return (
            <Container className="MarginContainer">
                <h3>Editar pregunta.</h3>

                <form method="POST" action={"updateQuestion?idList=" + this.state.id} enctype = "multipart/form-data">
                    
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Pregunta</span>
                        <input type="text" class="form-control" name="qtn" defaultValue={this.state.pregunta} placeholder="Ejemplo: ¿En qué se parece un cuervo a un escritorio?" aria-describedby="basic-addon1" required />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Respuesta</span>
                        <input type="text" class="form-control" name="answer" defaultValue={this.state.respuesta} placeholder="Ejemplo: OP1-3;OP2-4;OP3-1;OP4-2" aria-describedby="basic-addon1" required />                       
                    </div>                 
                    <hr />                

                    <p>Drag Opciones</p>
                    {
                        drags.map((option, index) => {
                            return (
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Drag Opción {index+1}</span>
                                    <input type="text" class="form-control" placeholder="Nombre del Drag" aria-describedby="basic-addon1" name={"d_text_opt" + (index+1)} defaultValue={option.valor} />

                                    <span class="input-group-text">Imagen actual: <a href={option.imagen} target='_blank'> {option.imagen}</a> </span>                                               
                                    <input type="file" class="form-control" name={"d_file_opt" + (index+1)} size = "45" />
                                </div>                                                                  
                            );
                        })
                    }
                    <hr />                
                    <p>Target Opciones</p>
                    {
                        targets.map((option, index) => {
                            return (
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Target Opción {index+1}</span>
                                    <input type="text" class="form-control" placeholder="Nombre del Target" aria-describedby="basic-addon1" name={"t_text_opt" + (index+1)} defaultValue={option.valor} />

                                    <span class="input-group-text">Imagen actual: <a href={option.imagen} target='_blank'> {option.imagen}</a> </span>                                               
                                    <input type="file" class="form-control" name={"t_file_opt" + (index+1)} size = "45" />
                                </div>  
                            );
                        })
                    }
                    <button type="submit" class="btn btn-primary">Actualizar Pregunta</button>
                    <br/><br/>
                </form>                
            </Container>
        )
    }
}

export default Edit;