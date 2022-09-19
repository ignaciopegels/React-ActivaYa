import React from "react"
import ContentoRowMovies from "./ContentRowMovies"

const dataMovies = [{
    titulo:"Movies in Data Base",
    cifra: "21",
    color:"primary", 
    icono:"fas fa-film fa-2x text-gray-300" 
  },
  {
    titulo:"Total awards",
    cifra: "10",
    color:"success", 
    icono:"fas fa-film fa-2x text-gray-300" 
  },
  {
    titulo:"Actors quantity",
    cifra: 43,
    color:"warning", 
    icono:"fas fa-film fa-2x text-gray-300" 
  }
  ] 

function EtiquetaMovie(){
    return (
        <React.Fragment>
        {dataMovies.map((element,e)=> {
            return <ContentoRowMovies key={e} titulo={element.titulo} cifra={element.cifra} color={element.color} icono={element.icono} />
          })
        }
        </React.Fragment>
    )
    }

    export default EtiquetaMovie

    