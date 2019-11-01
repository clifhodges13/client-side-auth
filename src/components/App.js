import "./App.css"
import { Link, Route } from 'react-router-dom'
import React from "react"
import Signin from "./Signin"

function App() {
	return (
		<div className="wrapper">
			<nav>
				<Link to="/">Home</Link>
				<Link to="/signin">Sign In</Link>
			</nav>

			<Route exact path="/signin" component={Signin} />
		</div>
	)
}

export default App
