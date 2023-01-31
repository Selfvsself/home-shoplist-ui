import { Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField } from "@mui/material";
import React, {Component} from "react";
import "./addBuyProductDialog.css";

export default class AddBuyProductDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            hideDialog: props.hideDialog,
            handleConfirm: props.handleConfirm,
            title: props.title ? props.title : '',
            category: props.category ? props.category : '',
            price: props.price ? props.price : ''
        }
    }

    onConfirm = () => {
        const {title, category, price, handleConfirm} = this.state;
        const product = {
            title: title,
            category: category,
            price: price
        }
        console.log(product);
        handleConfirm(product);
        this.handleClose();
    }
    
    handleClose = () => {
        this.setState(() => ({
            title: this.props.title ? this.props.title : '',
            category: this.props.category ? this.props.category : '',
            price: this.props.price ? this.props.price : ''
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

    onPriceChange(e) {
        this.setState(() => ({price: e.target.value}));
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
                    <TextField
                        id="add_price"
                        variant="standard"
                        label="Price"
                        type="number"
                        margin="dense"
                        onChange={(e) => this.onPriceChange(e)}
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