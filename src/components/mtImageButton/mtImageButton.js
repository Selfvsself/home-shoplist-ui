import React, {Component} from "react";
import "./mtImageButton.css"

export default class MtImageButton extends Component {
    render() {
        const {onclick} = this.props;
        return (
            <button onClick={onclick} className="mt-image-btn btn-ripple">
                Button
            </button>
        );
    }
}
