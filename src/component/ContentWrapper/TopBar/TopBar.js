import React from "react"
import foto1 from "../../../assets/image/Pedro Dominguez.webp"

function TopBar () {


return (
	<nav className="navbar navbar-expand navbar-light bg-primary topbar mb-4 static-top shadow fondoCaja2">

					{/* <!-- Sidebar Toggle (Topbar) --> */}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					{/* <!-- Topbar Navbar --> */}
					<ul className="navbar-nav mx-auto">

						{/* <!-- Nav Item - Alerts --> */}
						<li className="nav-item dropdown no-arrow mx-4">
							<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
							<i className="fas fa-bell"></i>
								{/* <!-- Counter - Alerts --> */}
								<span className="badge badge-danger badge-counter">3+</span>
							</a>
						</li>

						{/* <!-- Nav Item - Messages --> */}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i className="fas fa-envelope fa-fw"></i>
								{/* <!-- Counter - Messages --> */}
								<span className="badge badge-danger badge-counter">7</span>
							</a>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

						{/* <!-- Nav Item - User Information --> */}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-4 d-none d-lg-inline text-gray-900">Pedro Dominguez</span>
								<img className="img-profile rounded-lg" src={foto1} alt="Jordan Walke - Creador de React" width="60"/>
							</a>
						</li>

					</ul>

				</nav>
)
}

export default TopBar