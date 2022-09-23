import React from "react"
import Logo from "../../assets/image/ActivaYAAAAA___1_-removebg-preview-removebg-preview.png"
import {Link} from "react-router-dom"

function SideBar() {
    return (
<ul className="navbar-nav bg-success sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/" exact="true">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={Logo} alt="Digital House"/>
				</div>
			</Link>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0"/>

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item active">
				<Link className="nav-link" to="/" exact="true">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - DH movies</span></Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider"/>

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Actions</div>

			{/* <!-- Nav Item - Pages --> */}
			<li className="nav-item">
				<Link className="nav-link collapsed" to="/genres">
				<i className="fas fa-user"></i>
					<span>Usuarios</span>
				</Link>
				
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/etiquetas">
				<i className="fas fa-store"></i>
					<span>Productos</span></Link>
			</li>

			{/* <!-- Nav Item - Tables --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/tabla">
				<i className="fas fa-tags"></i>
					<span>Categoria</span></Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/search">
					<i className="fas fa-fw fa-search"></i>
					<span>Search</span></Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
    )
}

export default SideBar