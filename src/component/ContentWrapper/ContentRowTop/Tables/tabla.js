import React,{Component} from "react";
import Filas from "./Filas"

class TableProducts extends Component {
  constructor() {
  super()
  this.state ={
    dataTable: []
  }
}
componentDidMount(){
fetch("http://localhost:5000/api/products")
.then ((respuesta)=> {
  return respuesta.json()
})
.then((products)=> {
  this.setState({dataTable: products.products})
  console.log(products.products)
})
.catch(error => console.log(error))
}
render(){
    return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Titulo</th>
      <th scope="col">Precio</th>
      <th scope="col">Capacidad</th>
      <th scope="col">Detalle URL</th>
    </tr>
  </thead>
  <tbody>
    {this.state.dataTable.map((element,e) => {
      return  <Filas key={e+element}  titulo={element.name} duracion= {element.price} rating={element.capacity} genero={element.detail} premios= {element.awards}/>
    } ) }
  </tbody>
</table>
    )
}
}

export default TableProducts