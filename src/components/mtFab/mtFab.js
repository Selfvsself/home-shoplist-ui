import React, {Component} from "react";
import "./mtFab.css"

export default class MtFab extends Component {
    constructor(props) {
        super(props);
        this.state = {...props}
    }

    render() {
        const {onclick} = this.state;
        return (
            <button onClick={onclick} className="btn-fab btn-ripple">+</button>
        );
    }
}
