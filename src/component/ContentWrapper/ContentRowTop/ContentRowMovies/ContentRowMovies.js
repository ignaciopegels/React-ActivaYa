import React from "react"
import PropTypes from 'prop-types'

function ContentoRowMovies (props){
  const {titulo,color,icono,cifra} = props
    return (
      
      <div className="col-md-4 mb-4">
        <div className={`card border-left-${color} shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>
                <p>{titulo}</p>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.children}</div>
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{cifra}</div>
              </div>
              <div className="col-auto">
                <i className={icono}></i>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  ContentoRowMovies.defaultProps = {
    titulo : "No tiene titulo",
    color: "border-left-warning",
    
  }
  ContentoRowMovies.propTypes = {
    titulo: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default ContentoRowMovies