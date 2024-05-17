import React from "react";
import {Link} from 'react-router-dom'
import '../styles/styles.css' 
export const Navegation = () => {
    const estilo = {
        color : 'white'
    };
    return (
        <nav>
            <ul className="enlaces">
                <Link style = {estilo} to='/'>
                    <li>Pagina Principal</li>
                </Link>
                <Link style = {estilo} to='/producto'>
                    <li>Productos</li>
                </Link>
                <Link style = {estilo} to='/pedido'>
                    <li>Pedidos</li>
                </Link>
                <Link style = {estilo} to='/proveedores'>
                    <li>Proveedores</li>
                </Link>
            </ul>
        </nav>
    );
}