import React, {Component} from "react";
import "./mtButton.css"

export default class MtButton extends Component{
    constructor(props) {
        super(props);
        const {label} = props;
        this.state = {
            label: label ? label : "Button",
            onClick: props.onClick
        };
    }

    render() {
        const {label, onClick} = this.state;
        return (
            <button className="btn-mt btn-ripple" onClick={onClick}>{label}</button>
        );
    }
}
