import React from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";

class Create extends React.Component {

    // state = {
    //     id: "",
    //     pregunta: "",
    //     respuesta: "",
    //     drags: [],
    //     targets: []
    // }

    // componentDidMount() {
    //     const qId = new URLSearchParams(window.location.search).get("id");
    //     if (qId) {
    //         axios.get("http://localhost:8080/Crud_React/Preguntas?id="+qId).then(response => {
    //             const question = response.data[0];
    //             this.setState({ ...question });
    //         }).catch(error => {
    //             console.info(error);
    //             alert("Ha ocurrido un error");
    //         });
    //     }
    // }

    render() {
        // const { pregunta, respuesta, drags, targets } = this.state;
        return (
            <Container className="MarginContainer">
                <h1>Crear una nueva pregunta.</h1>

                <form method="POST" action="createQuestion" enctype = "multipart/form-data">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Pregunta</span>
                        <input type="text" class="form-control" placeholder="Ejemplo: ¿En qué se parece un cuervo a un escritorio?" aria-describedby="basic-addon1" name="qtn" required />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Respuesta</span>
                        <input type="text" class="form-control" placeholder="Ejemplo: OP1-3;OP2-4;OP3-1;OP4-2" aria-describedby="basic-addon1" name="answer" required />                       
                    </div> 
                    <hr />
                     {/* <!--DRAG OPTIONS-->  */}
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Drag Opción 1</span>
                        <input type="text" class="form-control" placeholder="Nombre del Drag" aria-describedby="basic-addon1" name="d_text_opt1" required />                       

                        <input type="file" class="form-control" id="inputGroupFile01" name="d_file_opt1" size = "45" required />
                    </div>                      
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Drag Opción 2</span>
                        <input type="text" class="form-control" placeholder="Nombre del Drag" aria-describedby="basic-addon1" name="d_text_opt2" required />                       

                        <input type="file" class="form-control" id="inputGroupFile01" name="d_file_opt2" required /> 
                    </div>   
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Drag Opción 3</span>
                        <input type="text" class="form-control" placeholder="Nombre del Drag" aria-describedby="basic-addon1" name="d_text_opt3" required />                       

                        <input type="file" class="form-control" id="inputGroupFile01" name="d_file_opt3" required />
                    </div>                     
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Drag Opción 4</span>
                        <input type="text" class="form-control" placeholder="Nombre del Drag" aria-describedby="basic-addon1" name="d_text_opt4" required />                       

                        <input type="file" class="form-control" id="inputGroupFile01" name="d_file_opt4" required />
                    </div>                     
                    <hr />
                     {/* <!--TARGET OPTIONS-->  */}
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Target Opción 1</span>
                        <input type="text" class="form-control" placeholder="Nombre del Target" aria-describedby="basic-addon1" name="t_text_opt1" required />                       

                        <input type="file" class="form-control" id="inputGroupFile01" name="t_file_opt1" required />
                    </div>                      
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Target Opción 2</span>
                        <input type="text" class="form-control" placeholder="Nombre del Target" aria-describedby="basic-addon1" name="t_text_opt2" required />                       

                        <input type="file" class="form-control" id="inputGroupFile01" name="t_file_opt2" required />
                    </div>   
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Target Opción 3</span>
                        <input type="text" class="form-control" placeholder="Nombre del Target" aria-describedby="basic-addon1" name="t_text_opt3" required />                       

                        <input type="file" class="form-control" id="inputGroupFile01" name="t_file_opt3" required />
                    </div>                     
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Target Opción 4</span>
                        <input type="text" class="form-control" placeholder="Nombre del Target" aria-describedby="basic-addon1" name="t_text_opt4" required />                       

                        <input type="file" class="form-control" id="inputGroupFile01"  name = "t_file_opt4" size = "45"  required />
                    </div>                     
                    
                    <button type="submit" class="btn btn-primary">Crear Pregunta</button>
                    <br /><br />
                </form>                 

            </Container>
        )
    }
}

export default Create;