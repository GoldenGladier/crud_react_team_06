import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css"
import Info from "./components/info";
import Create from "./components/create";
import Edit from "./components/edit";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/Crud_React/">
                    <Home />
                </Route>
                <Route exact path="/Crud_React/info">
                    <Info />
                </Route>
                <Route exact path="/Crud_React/crearPregunta">
                    <Create />
                </Route>   
                <Route exact path="/Crud_React/update">
                    <Edit />
                </Route>                               
                <Route path="*" render={() => <h1>ERROR 404: Recurso no encontrado.</h1>} />
            </Switch>
        </div>
    );
}
export default App;