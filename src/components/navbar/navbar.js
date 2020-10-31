import React from 'react';
import './navbar.scss'
export class NavBar extends React.Component{
	render(){
		return(
			<nav className="navbar navbar-expand-lg static-top">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"><img src="./asset/hamburgersvg.svg" alt=""/></span>
				</button>
				<div className="logo navbar-brand">
					<img src="./asset/logo.svg" alt="Watermelon Logo"/>
					<b className="homepage-link ml-1">
						Watermelon
					</b>
				</div>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item current">
							<a className="nav-link" href="#">Product
								<div className="underline"></div>
							</a>
						
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Pricing
								<div className="underline"></div>
							</a>
						
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">Success Stories
								<div className="underline"></div></a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">Service
								<div className="underline"></div>
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">About Us
								<div className="underline"></div>
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">Resources
								<div className="underline"></div>
							</a>
						</li>
					</ul>
					<div className="sign-up-sign-in pull-right">
						<button className="sign-in btn btn-outline-dark pull-right mr-1">
							Log In
						</button>
						<button className="sign-up btn btn-primary btn-dark">
							Create a free account
						</button>
					</div>
				</div>
			
			
			</nav>
		)
	}
}
