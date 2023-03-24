import React, {Component} from "react";

class StateDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'blue',
            count: 0

        }
        this.updateState = this.updateState.bind(this)
       
    }

    static getDerivedStateFromProps(props){
        return { color: props.favColor }
    }


    updateState(){
        this.setState({
            color:'Green'
        })
    }

    render(){
       
        return(
           
            <div>
                <p>{this.state.color}</p>
                <p>{this.state.count}</p>
                <button onClick={this.updateState}>Click here to change the color</button>
            </div>
        )
    }
}

export default StateDemo;