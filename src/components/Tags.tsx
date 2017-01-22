import * as React from "react";
import {connect} from 'react-redux';

class Tags extends React.Component<any, any> {

	shouldHighlight(tag) {
		return util.text.shouldHighlight(this.props.highlight, this.props.searchString, tag);
	}


    render() {
       var tags = [];
       this.props.tags && this.props.tags.forEach((tag, index) => {
       		tags.push(<span key={index} className="tag badge">{tag}</span>);
       });
       return (
       		<span className="tags-container badge-container">
       			{tags}
       		</span>
       	);
    }
}

export default Tags;