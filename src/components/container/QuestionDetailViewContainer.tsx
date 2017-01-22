import * as React from "react";
import {connect} from "react-redux";
import MainAction from "../MainAction";
import ContentContainer from "./ContentContainer"

class QuestionDetailViewContainer extends ContentContainer{
    getContent() {
        return (<div>Question View!!!</div>);
    }
}


@connect(
    (state) => {return {questions: state && state.questions || []}}, 
    (dispatch) => {return {
        search: (callBack, ...args: any[]) => {callBack && callBack(dispatch, args);}
    }}
)

class QuestionDetailViewContainerWrapper extends React.Component<any, any> {
    constructor(props?, context?) {
        super(props, context);
    }
    render() {
        return (<QuestionDetailViewContainer {...this.props} />);
    }
}


export {QuestionDetailViewContainerWrapper as QuestionDetailViewContainer}