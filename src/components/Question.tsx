import * as React from "react";
import {connect} from 'react-redux';
import Tags from "./Tags";
import {util} from "../lib/util"
import {Link} from "react-router";

class Question extends React.Component<any, any> {

	shouldHighlight(title?) {
		return util.text.shouldHighlight(this.props.highlight, this.props.highlightString, title || this.props.question.title);
	}

	render() {
		var titleClass = "title",
			highlightTitle = this.props.question.title,
			questionId = this.props.question.question_id;
		if(this.shouldHighlight()) {
			titleClass += " highlight"; 

			highlightTitle = this.props.question.title && this.props.question.title.split(' ').map((subTitleText, index) => {
				if(this.shouldHighlight(subTitleText)) {
					return (<span key={index} className="highlight-text">{subTitleText}</span>);
				}
				return " " + subTitleText + " ";
			});
		} 	

       return (
       		<div className="question " key={this.props.index}>
       			<div className="profile-info">
       				<span>
	       				<img src={this.props.question.owner.profile_image}/>
       				</span>
       			</div>
       			<div className="question-info">
       				<div className={titleClass}>
       					<Link to={`/question/${questionId}`} className="question-header h2">	{highlightTitle} </Link>
	       			</div>
	       			<Tags tags={this.props.question.tags} {...this.props}/>
	       			<span className="label-text">score {this.props.question.score} | </span>
	       			<span className="label-text">answer count {this.props.question.answer_count}</span>
       			</div>
       		</div>
       	);
    }	
}
export default Question;