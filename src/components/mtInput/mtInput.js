import React, {Component} from "react";
import "./mtInput.css"

export default class MtInput extends Component {
    constructor(props) {
        super(props);
        const {onChange} = props;
        this.state = {
            onChange: onChange,
            label: props.label ? props.label : 'input'
        };
    }


    render() {
        const {value} = this.props;
        const {onChange, label} = this.state;
        return (
            <input
                className="mt-input"
                placeholder={label}
                onChange={(e) => onChange(e)}
                value={value}/>
        );
    }

}
