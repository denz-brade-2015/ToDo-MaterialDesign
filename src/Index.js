/**
 * Author: Denzil Brade
 */

import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import About from './components/About';

// Alternate ways of basic routing

// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App} />
//     <Route path="about" component={About}/> 
//   </Router>
//   ), document.getElementById('content')
// );

var routes = (
	// history allows you to clean up URL and still keep state without the extra generated IDs by Router
	<Router history={ hashHistory }>
		<Route path="/" component={ App } />
    <Route path="/about" component={ About } />
	</Router>
)

render(routes, document.querySelector('#content'));
