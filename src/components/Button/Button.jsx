import React from "react";
import classNames from 'classnames';
import stylesButton from "../Button/button.module.scss"




class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed:true
        }
    }
    static defaultProps = {
        name: 'Hello'
    }

    handleChange = () => {
        this.setState(
            {pressed: !this.state.pressed})
    }
    // const clickedButton =  classNames(className={this.state.pressed ?stylesButton.test: stylesButton.clicked})
    render(){
        const {name, ...props} = this.props
        return(
            <div className={stylesButton.container}>
            <button 
            {...props} onClick={this.handleChange} className={classNames([this.state.pressed ?stylesButton.test: stylesButton.clicked])}>
            {this.state.pressed ? "Click on me":"Clicked"} 
            </button>
            </div>
        )
    }
}

export default Button;