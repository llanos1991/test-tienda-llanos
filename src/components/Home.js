import React from "react";
import { Herramienta } from '../img/data';
import { useState, useEffect } from "react";


const Timer=() =>{
  const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
        setCount((count) => count + 1);
        }, 60000);
    });

    return <h1 className="header-text"> Oferta de 1 hora en Tienda Llanos! Lleva {count} minutos</h1>;
}

    const Header = () => {
            return (
                <header className="header">
                    <h1 className="header-text"> Bienvenido al Sistema de Inventario</h1>
                    <h3 className="header-text"> TIENDA LLANOS</h3>
                </header>
    );}

    const ListItems = Herramienta.map(herramienta =>
        <div class="grid-item">              
                <img
                    src={herramienta.image}
                    alt={herramienta.name}
                />
                <p>{herramienta.name}</p>
        </div>);

    const Body = () =>{
        return(
            <body>
                <div className="content">
                    <h3>IMAGENES DE LOS PRODUCTOS QUE TENEMOS</h3>
                    <div class="grid-container">
                       {ListItems}
                    </div>      
                    <p>Esta tienda cuenta con todas las categorias de herramientas para jardineria, construccion, gasfiteria, vidirieria, cerrajeria</p>
                </div>
                <div>{Timer()}</div>
            </body>
        );
    }    

    const Footer = () => {
        return (
            <footer className="header-footer">
                <p>© 2024 Application</p>
            </footer>
    );}

    export const Home = () => {

            return (
                <div>
                    <div>{Header()}</div>
                    <div>{Body()}</div>    
                    <div>{Footer()}</div>
                </div>
            );
    }