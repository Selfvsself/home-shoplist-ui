import React, {Component} from "react";
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField } from "@mui/material";
import "./buyProductDialog.css";

export default class BuyProductDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            hideDialog: props.hideDialog,
            handleConfirm: props.handleConfirm,
            handleDelete: props.handleDelete,
            id: props.id ? props.id : '',
            title: props.title ? props.title : '',
            category: props.category ? props.category : '',
            price: props.price ? props.price : '',
            owner: props.owner ? props.owner : ''
        }
    }    

    onPriceChange(e) {
        this.setState(() => ({price: e.target.value}));
    }
    
    onConfirm = () => {
        const {id, title, category, owner, price, handleConfirm} = this.state;
        const product = {
            id: id,
            title: title,
            category: category,
            price: price,
            owner: owner
        }
        handleConfirm(product);
        this.handleClose();
    }    
    
    onDelete = () => {
        const {id, handleDelete} = this.state;
        handleDelete(id);
        this.handleClose();
    }
    
    handleClose = () => {
        this.setState(() => ({
            id: this.props.id ? this.props.id : '',
            title: this.props.title ? this.props.title : '',
            category: this.props.category ? this.props.category : '',
            price: this.props.price ? this.props.price : ''
        }))
        const {hideDialog} = this.state;
        hideDialog();
      };

    render() {
        const {open} = this.props;
        return <>
            <Dialog open={open} onClose={this.handleClose}>
                <DialogTitle>Buy product</DialogTitle>
                <DialogContent>
                    <TextField
                        id="buy_price"
                        variant="standard"
                        label="Price"
                        type="number"
                        margin="dense"
                        onChange={(e) => this.onPriceChange(e)}
                        fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose}>Cancel</Button>
                    <Button onClick={this.onDelete} color="error">Delete</Button>
                    <Button onClick={this.onConfirm} color="success">Buy</Button>
                </DialogActions>
            </Dialog>        
        </>
    }
}