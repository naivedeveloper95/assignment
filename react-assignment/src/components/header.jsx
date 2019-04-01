import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Highlights from './highlights';
import Activity from './activity';
import World from './world';
import '../App.css';

class Header extends Component {
	render() {
		return (
			<div>
				<Router>
					<nav className="navbar navbar-light bg-dark">
						<div className="offset-sm-8 col-sm-4 styleClass">
							<NavLink
								className="linkStyle"
								exact={true}
								activeClassName="is-active"
								to="/"
							>
								Highlights
							</NavLink>
							<NavLink
								className="linkStyle"
								exact={true}
								activeClassName="is-active"
								to="/activity"
							>
								Activity
							</NavLink>
							<NavLink
								className="linkStyle"
								exact={true}
								activeClassName="is-active"
								to="/world"
							>
								World-Map
							</NavLink>
						</div>
					</nav>
					<Route exact path="/" component={Highlights} />
					<Route path="/activity" component={Activity} />
					<Route path="/world" component={World} />
				</Router>
			</div>
		);
	}
}

export default Header;
