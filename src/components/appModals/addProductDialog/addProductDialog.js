import { Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField } from "@mui/material";
import React, {Component} from "react";
import "./addProductDialog.css";

export default class AddProductDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            hideDialog: props.hideDialog,
            handleConfirm: props.handleConfirm,
        }
    }

    onConfirm = () => {
        const {title, category, handleConfirm} = this.state;
        const product = {
            title: title,
            category: category
        }
        handleConfirm(product);
        this.handleClose();
    }
    
    handleClose = () => {
        this.setState(() => ({
            title: this.props.title ? this.props.title : '',
            category: this.props.category ? this.props.category : ''
        }))
        const {hideDialog} = this.state;
        hideDialog();
    }

    onTitleChange = (e) => {
        this.setState(() => ({title: e.target.value}));
    }

    onCategoryChange(e) {
        this.setState(() => ({category: e.target.value}));
    }

    render() {
        const {open} = this.props;
        return <>
            <Dialog open={open} onClose={this.handleClose}>
                <DialogTitle>Add product</DialogTitle>
                <DialogContent>
                    <TextField
                        id="add_title"
                        variant="standard"
                        label="Title"
                        type="text"
                        margin="dense"
                        onChange={(e) => this.onTitleChange(e)}
                        fullWidth/>
                    <TextField
                        id="add_category"
                        variant="standard"
                        label="Category"
                        type="text"
                        margin="dense"
                        onChange={(e) => this.onCategoryChange(e)}
                        fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose}>Cancel</Button>
                    <Button onClick={this.onConfirm} color="success">Add</Button>
                </DialogActions>
            </Dialog>        
        </>
    }
};