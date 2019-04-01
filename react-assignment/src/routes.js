import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Highlights from './components/highlights';
import Activity from './components/activity';
import World from './components/world';
const Routes = () => {
	return (
		<Router>
			<div className="container-fluid">
				<div className="row content">
					<ul>
						<li>
							<Link to="/">Highlights</Link>
						</li>
						<li>
							<Link to="/activity">Activity</Link>
						</li>
						<li>
							<Link to="/world">World Map</Link>
						</li>
					</ul>
					<Route exact path="/" component={Highlights} />
					<Route path="/activity" component={Activity} />
					<Route path="/world" component={World} />
				</div>
			</div>
		</Router>
	);
};
export default Routes;
