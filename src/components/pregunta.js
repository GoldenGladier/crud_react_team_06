import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Pregunta = ({ id, pregunta }) => {

    const handleClickEliminar = (event) => {
        //Eliminar
        axios.post(`/Crud_React/Eliminar?id=${id}`).then(response => {
            console.info(response.data);
            if (response.data.message) {
                alert(response.data.message);
            } else {
                alert(response.data.error);
            }
        }).catch(error => {
            console.info(error);
            alert(response.data.message);
        }).finally(() => {
            window.location.href = "/Crud_React/";
        });
    }

    return (
        <tr>
            <td>{pregunta}</td>
            <td className="AlignCenter">
                <Link to={`/Crud_React/info?id=${id}`} className="btn btn-success M-6 CustomLink">
                    Ver pregunta
                </Link>

                <Link to={`/Crud_React/update?id=${id}`} className="btn btn-warning M-6 CustomLink" >
                    Editar pregunta
                </Link>
                
                <Button
                    variant="danger"
                    className="M-6"
                    onClick={handleClickEliminar}>
                    Eliminar pregunta
                </Button>
            </td>
        </tr>
    )
}
export default Pregunta;