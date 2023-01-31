import React, {Component} from "react";
import "./appProductList.css"
import ProductListItem from "../productListItem";

export default class AppProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {...props};
    }

    render() {
        const {onDeleteItem, onUpdateItem} = this.state;
        const itemList = this.props.data.map((item) => {
            return (
                <ProductListItem
                    key={item.id}
                    {...item}
                    onDeleteItem={(id) => onDeleteItem(id)}
                    onUpdateItem={(product) => onUpdateItem(product)}/>
            );
        })
        return (
            <div className="product-list-content">
                {itemList}
            </div>
        );
    }
}
