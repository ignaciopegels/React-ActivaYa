import React from "react";
import { Link, NavLink } from "react-router-dom";

const redireccion = (genero) =>{
  window.location.replace(genero)
}

function Filas (props) {
    const {titulo, duracion, rating, genero, premios} = props
    return (    
    <tr>
      <th scope="row">{titulo}</th>
      <td>{duracion}</td>
      <td>{rating}</td>
      <Link onClick={ () => redireccion(genero)}><td>"Descripción del producto URL"</td></Link>
      <td>{premios}</td>
    </tr>
    )
}

export default Filas