import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Events from '../pages/events';
import AnnualReport from '../pages/annual';
import Teams from '../pages/teams';
import Blogs from '../pages/blogs';
import SignUp from '../pages/signup';


const Navi = () => {
	return (
		<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/About' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} />
	</Routes>
	</Router>
	)
}

export default Navi;
