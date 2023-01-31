import React, {Component} from "react";
import "./appHeader.css"
import MtButton from "../mtButton";
import Button from '@mui/material/Button';

export default class AppHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            onLogout: props.onLogout,
            label: props.label
        }
    }

    onLogout = () => {
        this.state.onLogout();
    }

    render = () => {
        const {label} = this.props;
        return (
            <header className="app-header">
                <label>{label}</label>
                <div>
                    <Button
                        size="large"
                        variant="text"
                        onClick={this.onLogout}>Logout</Button>
                </div>
            </header>
        );
    }
}
