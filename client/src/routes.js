/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import StatusSearch from './containers/StatusSearch';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="repo-search" component={StatusSearch}/>
		<Route path="about" component={AboutPage}/>
		<Route path="*" component={NotFoundPage}/>
	</Route>
);
