import React, {Component} from "react";
import { styles } from "./Styles";
import styled from "styled-components";
class StateDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'blue',
            count: 0

        }
        this.updateState = this.updateState.bind(this)
       
    }

       // static getDerivedStateFromProps(props){
    //     return {color: props.favColor}
    // }

    updateState(){
        this.setState({
            color:'Green'
        })
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({color: 'Dark Blue'})
        }, 2000)
    }

    render(){
        const StyledButton = styled.button`
        background-color:black;
        color: white;
        font-size: 32px
        `;
       
        return(
           
            <>
                <p style={styles.Header}>{this.state.color}</p>
                <p style={styles.Main}>{this.state.count}</p>
                <button onClick={this.updateState}>Click here to change the color</button><br/><br/>
                <StyledButton>Sign Up</StyledButton>
            </>
        )
    }
}

export default StateDemo;