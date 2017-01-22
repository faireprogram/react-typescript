import * as React from "react";
import {connect} from 'react-redux';
import {util} from "../lib/util"

class Tags extends React.Component<any, any> {

	shouldHighlight(tag) {
		return util.text.shouldHighlight(this.props.highlight, this.props.highlightString, tag);
	}


    render() {
       var tags = [],
       	   shouldHighlight = false;
       this.props.tags && this.props.tags.forEach((tag, index) => {
       		let className="tag badge";

       		if(this.shouldHighlight(tag)) {
       			shouldHighlight = true;
       			className += " highlight-text";
       		}
       		tags.push(<span key={index} className={className} >{tag}</span>);

       });
       return (
       		<span className={`tags-container badge-container ${shouldHighlight? 'highlight' : ''} `} >
       			{tags}
       		</span>
       	);
    }
}

export default Tags;