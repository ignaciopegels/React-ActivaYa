
import React from 'react';
import {useState, useEffect} from "react"
import ContentoRowMovies from '../ContentRowTop/ContentRowMovies/ContentRowMovies';


function BuscarProducto(){
	const [products, setProducts] = useState([])
	const [category, setCategory] = useState([])
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch(`http://localhost:5000/api/products`)
		.then(response => response.json())
			.then(products => {
				setProducts(products.products)
				setCategory(products.countByCategory)
			})},[])

			useEffect(() => {
				fetch(`http://localhost:5000/api/users`)
				.then(response => response.json())
					.then(users => {
						setUsers(users.users) 
					})},[])

					console.log(users)

	return(
		<React.Fragment>
			<div className="row">
           <ContentoRowMovies titulo={"total de productos"} cifra={products.length} icono={"fas fa-glass-cheers fa-2x text-gray-900"} />
		   <ContentoRowMovies titulo={"total de Usuarios"} cifra={users.length} icono={"fas fa-users fa-2x text-gray-900"} />
		   <ContentoRowMovies titutlo={category.Cerveza} cifra={category.Cerveza}/>
		   </div>
		</React.Fragment>
	)
}
 
export default BuscarProducto;