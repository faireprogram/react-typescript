import {Store, createStore} from "redux";
import reducers from "./reducer"

const initialState = {questions: [], highlight: false, searchString: '', highlightString: ''};

//create store
const store = createStore(
	(state, action) => {
		var reducer = reducers[action.type];
		var nextState = reducer ? Object.assign({}, state, reducer(state, action)) : state;
		return nextState;
	},
	initialState
);

export default store;