import * as React from "react";
import {connect} from "react-redux";

import {SearchBox} from "../SearchBox";
import MainAction from "../MainAction";

@connect(
    (state) => {
        return {questions: state && state.questions || []};
    },
    (dispatch) => (
    	{}
    )
)

class Main extends React.Component<any, any> {

	constructor(props?, context?) {
        super(props, context);
    }

    render() {
       return (
	       	<main>
	       		<section className="search-box">
	       			<SearchBox click={MainAction.searchBoxAction.search} checkedHighlight={MainAction.searchBoxAction.highlight} label="search" id="searchbox" buttonLabel="go!"/>
	       		</section>

	       		<section className="content">
            		{this.props.children}
	       		</section>

	       	</main>
       	);
    }

}

export default Main;