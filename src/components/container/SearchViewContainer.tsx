import * as React from "react";
import {connect} from "react-redux";
import MainAction from "../MainAction";
import ContentContainer from "./ContentContainer";
import Question from "../Question"

class SearchViewContainer extends  ContentContainer{
   
    componentWillMount() {
        var queryObj = this.props.location.query || {};
        this.props.search(MainAction.searchBoxAction.search, {searchString: queryObj.searchFor});
    }

    getContent() {
        var rows = [];

        this.props.questions && this.props.questions.forEach((question, index) => {
            rows.push(<Question key={index} index={index} question={question} {...this.props}/>);
        });


       return (
            <div className="search-view-container">
                {rows};
            </div>
        );
    }
}



@connect(
    (state) => (state), 
    (dispatch) => {return {
        search: (callBack, args) => {callBack && callBack(dispatch, args);}
    }}
)

class SearchViewContainerWrapper extends React.Component<any, any> {
    constructor(props?, context?) {
        super(props, context);
    }
    render() {
        return <SearchViewContainer {...this.props} />
    }
}


export {SearchViewContainerWrapper as SearchViewContainer}