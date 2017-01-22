
/* begin the request*/
const search_request = (state, action) => {
	console.log('SEARCH_REQUEST', state, action);
	return Object.assign({}, state, {searchString: action.searchString});
}

/* done the request */
const search_receive = (state, action) => {
	console.log('SEARCH_RECEIVE', state, action);

	if(action.state.status === 'ok') {
		return Object.assign({}, state, {questions: action.state.data});
	} else {
		return Object.assign({}, state, {error: action.state.error, status: 'error'});
	}
}

const highlight_changed = (state, action) => {
	return Object.assign({}, state, {highlight: action.highlight});
}

const navigate_to = (state, action) => {
	// return 
}

export default {
	SEARCH_REQUEST: search_request,
	SEARCH_RECEIVE: search_receive,
	HIGHLIGHT_CHANGED: highlight_changed,
	NAVIGATE_TO: navigate_to
};