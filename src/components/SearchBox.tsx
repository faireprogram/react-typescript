import * as React from "react";
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
class SearchBox extends React.Component<any, any> {

	textInput: any;
	checkBox: any;

	init() {
		if(this.textInput) {
			this.textInput.value = this.props.searchString;
		}
	}

    render() {
    	this.init();

		var inputOpts: any = {
	   			type: 'text',
	   			ref: function (input: React.ReactInstance) {
	   				this.textInput = input;
	   			}.bind(this)
	   		},
	   		buttonOpts = {
	   			onClick: function (event) { 
	   				hashHistory.push('/search?searchFor=' + this.textInput.value);
	   				this.props.baseClick(this.props.click, {domEvent: event, searchString: this.textInput.value});
	   			}.bind(this),
	   			onKeyDown:  this.props.baseKeydown(this.props.keydown),
	   			onKeyUp: this.props.baseKeyUp(this.props.keyup)
	   		},
	   		highlighCheckboxOpts = {
	   			type: 'checkbox',
	   			onChange: function (event) {
	   				this.props.baseClick(this.props.checkedHighlight, {highlight: this.checkBox.checked, highlightString: this.textInput.value});
	   			}.bind(this),
	   			ref: function(checkbox: React.ReactInstance) {
	   				this.checkBox = checkbox;
	   			}.bind(this)
	   		};

	   		if(this.props.defaultValue) {
	   			inputOpts.value = this.props.defaultValue;
	   		}


    return (
       		<div className="search-container">
       			<label htmlFor={`${this.props.id}_input`}>
       				{this.props.label}

	       			<input {...inputOpts}/>
				</label>
				<button className="search-button" {...buttonOpts}>{this.props.buttonLabel}</button>


				<label htmlFor={`${this.props.id}_checkbox`}>
	       			<input {...highlighCheckboxOpts}/>
	       			highlight
				</label>
       		</div>
       	);
    }
}

@connect(
    (state) => ( {searchString: state.searchString} ),
    (dispatch) => ({
    	baseClick: (callBack, context) => {callBack && callBack(dispatch, context);},
		baseKeydown: (callBack, context) => {callBack && callBack(dispatch, context);},
		baseKeyUp: (callBack, context) => {callBack && callBack(dispatch, context);},
    })
)
class SearchBoxWrapper extends React.Component<any, any>{
	render() {
		return (<SearchBox {...this.props} />);
	}
}

export  {SearchBoxWrapper as SearchBox};