import React, {Component} from "react";
import "./mtTextButton.css"

export default class MtTextButton extends Component {
    constructor(props) {
        super(props);
        const {label} = props;
        this.state = {...props, ...{label: label}}
    }


    render() {
        let {onClick} = this.state;
        const {label} = this.props;
        return (
            <button
                className="text-btn"
                onClick={onClick}>
                {label}
            </button>
        );
    }
}
