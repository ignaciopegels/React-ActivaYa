
import { element, object } from 'prop-types';
import React from 'react';
import {useState, useEffect} from "react"
import ContentoRowMovies from '../ContentRowTop/ContentRowMovies/ContentRowMovies';
import TableProducts from '../ContentRowTop/Tables/tabla';



function BuscarProducto(){
	const [products, setProducts] = useState([])
	const [category, setCategory] = useState([])
	const [users, setUsers] = useState([])
	const [ultimoProduct, setUltimoProduct] = useState([])


	useEffect(() => {
		fetch(`http://localhost:5000/api/products`)
		.then(response => response.json())
			.then(products => {
				setProducts(products.products)
				setCategory(products.countByCategory)
				setUltimoProduct(products.products)
			})},[])

			useEffect(() => {
				fetch(`http://localhost:5000/api/users`)
				.then(response => response.json())
					.then(users => {
						setUsers(users.users) 
					})},[])
					let valor = ""
					const categoryArray = Object.entries(category)
					const categoryPrint = (categoryArray.map((element) => {return  valor = <h6>{`${element[0]} ${element[1]}`}</h6>}))

	return(
		<React.Fragment>
			<div className="row">
			<ContentoRowMovies titulo={"Ultimo Producto creado"} icono={"fas fa-wine-bottle fa-2x text-gray-900"} > {ultimoProduct.map((element, index) => { return  index == (ultimoProduct.length -1)? <p class = "text-xs font-weight-bold text-">{element.name} <p>Precio ${element.price}</p>  </p>: "" })}</ContentoRowMovies>
			<ContentoRowMovies titulo={"total de productos"} cifra={products.length} icono={"fas fa-glass-cheers fa-2x text-gray-900"} />
           <ContentoRowMovies titulo={"total de Usuarios"} cifra={users.length} icono={"fas fas fa-users fa-2x text-gray-900"} />
		   <ContentoRowMovies titulo={"Total de productos por categoria"} icono={"fas fa-shopping-basket fa-2x text-gray-900"}>{categoryPrint.map(element => element)}</ContentoRowMovies>
			<TableProducts/>
		   </div>
		</React.Fragment>
	)
}
 
export default BuscarProducto;