import React, {Component} from "react";
import "./productListItem.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from "@mui/material/Button";
import BuyProductDialog from "../appModals/buyProductDialog";

export default class ProductListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {...props,
            show: false};
    }

    showDialog = () => {
        this.setState({show: true})
    }

    hideDialog = () => {
        this.setState({show: false})
    }

    render() {
        const {id, title, category, owner, onDeleteItem, onUpdateItem, show} = this.state;
        return (
            <div className="product-item-container">
                <div className="product-item-content">
                    <div className="product-item-title">{title}</div>
                    <div className="product-item-category">{category}</div>
                </div>
                <div>
                    {/*<MtImageButton onclick={this.showDialog}/>*/}
                    <Button
                        className="item-btn"
                        size="medium"
                        variant="contained"
                        color="success"
                        onClick={this.showDialog}>
                            <ShoppingCartIcon sx={{ fontSize: 24 }}/>
                    </Button>
                    {/*<IconButton size="large">*/}
                    {/*    <ShoppingCartIcon />*/}
                    {/*</IconButton>*/}
                </div>
                {/* <AppModal
                    windowTitle='Buy product'
                    id={id}
                    title={title}
                    category={category}
                    owner={owner}
                    inputs={['price', 'delete']}
                    show={this.state.show}
                    handleClose={this.hideDialog}
                    handleDelete={(id) => onDeleteItem(id)}
                    handleConfirm={(product) => onUpdateItem(product)}/> */}
                    <BuyProductDialog 
                        open={show}
                        hideDialog={this.hideDialog}
                        id={id}
                        title={title}
                        category={category}
                        owner={owner}
                        handleDelete={(id) => onDeleteItem(id)}
                        handleConfirm={(product) => onUpdateItem(product)}/>
            </div>
        );
    }
}
