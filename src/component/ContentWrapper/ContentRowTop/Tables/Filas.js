import React from "react";

function Filas (props) {
    const {titulo, duracion, rating, genero, premios} = props
    return (    
    <tr>
      <th scope="row">{titulo}</th>
      <td>{duracion}</td>
      <td>{rating}</td>
      <td>{genero}</td>
      <td>{premios}</td>
    </tr>
    )
}

export default Filas