import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../styles/styles.css';
import {Navegation} from "../components/Navegation";
import {Home} from "../components/Home";
import {Producto} from "../components/Producto";
import {Pedido} from "../components/Pedido";
import {Proveedores} from "../components/Proveedores";

export const Overview = () =>{

    return (
        <Router>
            <div>
            <Navegation />
                <Routes>
                    <Route path="/" exact Component= {Home} />
                    <Route path="/producto" exact Component={Producto} />
                    <Route path="/pedido" exact Component={Pedido} />
                    <Route path="/proveedores" exact Component={Proveedores} />
                </Routes>
            </div>

        </Router>

    );
};
 

