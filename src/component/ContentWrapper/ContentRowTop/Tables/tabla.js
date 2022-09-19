import React,{Component} from "react";
import Filas from "./Filas"

class Movies extends Component {
  constructor() {
  super()
  this.state ={
    dataTable: []
  }
}
componentDidMount(){
fetch("http://localhost:3001/api/movies")
.then ((respuesta)=> {
  return respuesta.json()
})
.then((movies)=> {
  this.setState({dataTable: movies.data})
  console.log(movies.data)
})
.catch(error => console.log(error))
}
render(){
    return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Titulo</th>
      <th scope="col">Duración</th>
      <th scope="col">Rating</th>
      <th scope="col">Género</th>
      <th scope="col">Premios</th>
    </tr>
  </thead>
  <tbody>
    {this.state.dataTable.map((element,e) => {
      return  <Filas key={e+element}  titulo={element.title} duracion= {element.length} rating={element.rating} genero={element.genre?.name} premios= {element.awards}/>
    } ) }
  </tbody>
</table>
    )
}
}

export default Movies