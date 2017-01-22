import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, hashHistory } from 'react-router';
import { Route, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import Main from './components/container/Main';
import {SearchViewContainer} from './components/container/SearchViewContainer';
import {QuestionDetailViewContainer} from './components/container/QuestionDetailViewContainer';

// import Question from './components/Question';

const router = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRedirect to="/search" />
			<Route path="search" component={SearchViewContainer} />
	        <Route path="question/:id" component={QuestionDetailViewContainer} />
	        <Redirect from='*' to='/search' />
	    </Route>
	</Router>
)



export default router;