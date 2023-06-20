import React from "react";
import classNames from 'classnames';
import stylesButton from "../Button/button.module.scss"




class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed:false
        }
    }
    static defaultProps = {
        name: 'Hello'
    }

    handleChange = () => {
        this.setState(
            {pressed: !this.state.pressed})
    }
    render(){
        const {name, ...props} = this.props
        return(
            <div className={stylesButton.container}>
            <button 
            {...props} onClick={this.handleChange}>
               {this.state.pressed ? "Click on me":"Clicked"}
            </button>
            </div>
        )
    }
}

export default Button;