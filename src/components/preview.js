import React, {Component} from "react";
class Preview extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>{this.props.markdown}</div>
        );
    }
}
export default Preview;