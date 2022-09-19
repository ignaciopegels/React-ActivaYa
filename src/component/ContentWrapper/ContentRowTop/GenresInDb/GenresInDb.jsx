import React, {Component} from "react"
import Genre from "./Genres"

class GenresInDb extends Component{
  constructor(){
    super()
    this.state ={
    genresList : [] 
    }
    }
    handleClick = () => {
      document.querySelector(".fondoCaja").classList.add("bg-secondary")
    }
    componentDidMount(){

      fetch('http://localhost:3001/api/genres')
      .then(respuesta =>{
      return respuesta.json()
      })
      .then(genres =>{
      this.setState({genresList: genres.data})
      })
      .catch(error => console.log(error))
      }
      render(){
        return (
          <React.Fragment>
            <div className="card-header py-3">
              <h5 onMouseOver={this.handleClick} className="m-0 font-weight-bold text-gray-800">
                Genres in Data Base
              </h5>
            </div>
            <div className="card-body fondoCaja">
              <div className="row">
                {this.state.genresList.map((genre, index) => {
                  return <Genre {...genre} key={index} />;
                })}
                
              </div>
            </div>
          </React.Fragment>
        );
      }}


export default GenresInDb