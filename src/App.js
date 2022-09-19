import React from "react"
import	"./assets/css/global.css"
import "./assets/css/app.css"
import SideBar from "./component/SideBar/SideBar.js"
import ContentRowTop from "./component/ContentWrapper/ContentRowTop/ContentRowTop"
import Footer from "./component/ContentWrapper/Footer/Footer"
import TopBar from "./component/ContentWrapper/TopBar/TopBar"
import Tabla from "../src/component/ContentWrapper/ContentRowTop/Tables/tabla"
import {Route} from "react-router-dom"
import EtiquetaMovie from "./component/ContentWrapper/ContentRowTop/ContentRowMovies/datosMovie"
import GenresInDb from "./component/ContentWrapper/ContentRowTop/GenresInDb/GenresInDb"
import SearchMovies from "./component/ContentWrapper/Search/SearchMovies"
function App() {
  return (
  <div id="wrapper">
		<Route path="/"component={SideBar} />


		<div id="content-wrapper" className="d-flex flex-column">

			<div id="content">
		<Route path="/" component={TopBar} />

		<Route path="/" exact={true} component={ContentRowTop}/>
		<Route path="/search" component={SearchMovies}/>

		<Route path="/genres" component= {GenresInDb}/>
    
		<div className="row">
		<Route path="/etiquetas" component={EtiquetaMovie}/>
		</div>

			</div>

			<Route path="/tabla" exact={true} component={Tabla}/>
			
			<Route path="/" component={Footer}/>

		</div>
		{/* <!-- End of Content Wrapper --> */}
	</div>
  )
}

export default App;
