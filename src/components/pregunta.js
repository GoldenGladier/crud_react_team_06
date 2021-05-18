import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Pregunta = ({ id, pregunta }) => {

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
                
                <Link to={`/Crud_React/delete?id=${id}`} className="btn btn-danger M-6 CustomLink" >
                    Eliminar pregunta
                </Link>
            </td>
        </tr>
    );
}
export default Pregunta;