import 'whatwg-fetch';
import {util} from "../lib/util"

class Service {

	protected http(request, successCallback, errorCallBack) {
		let httpStatus = {
			method: request.type || 'GET'
		}

		fetch(request.url, httpStatus).then((response) => (response.text()))
									  .then((data) => (JSON.parse(data)))
									  .then(successCallback)
									  .catch(errorCallBack);
	}
}

class MainAction extends Service{
	private static instance: MainAction;

	constructor() {
		super();
		if(MainAction.instance) {
			return MainAction.instance;
		}

		MainAction.instance = this;
	}

	public searchBoxAction: any = {
		/* Need manually to change the context, can't use fat arrow function here*/
		search: function (dispatch, context) {
			let request = {
				url: '/data/questions.json'
			},
			_self = this;
			dispatch({type: 'SEARCH_REQUEST', searchString: context.searchString});

			this.http(request, 
					  (data) => {
					  	let filterData = util.questions.filterByTitleOrTags(context.searchString, data.items);
					  	dispatch({type: 'SEARCH_RECEIVE', state: {status: 'ok', data: filterData} });
					  	console.log('success', data);
					  },
					  (error) => {
					  	dispatch({type: 'SEARCH_RECEIVE', state: {status: 'error', error: error} });
					  	console.log('fail', error);
					  });
		}.bind(this),

		highlight: function(dispatch, context) {
			dispatch({type: 'HIGHLIGHT_CHANGED', highlight: context.highlight, highlightString: context.highlightString});
		}
	}
	
}

export default new MainAction;