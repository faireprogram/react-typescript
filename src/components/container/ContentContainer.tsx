import * as React from "react";
import {connect} from "react-redux";

class ContentContainer extends React.Component<any, any>{
    currentLength: any;

    render() {
        return (
             <div className="content-container">
                {this.getContent && this.getContent()}
            </div>
        );
    }

    getContent(): any  {

    };
}

export default ContentContainer;