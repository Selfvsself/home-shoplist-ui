import React, {Component} from "react";
import "./buyProductListItem.css"

export default class BuyProductListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {...props};
    }

    render() {
        const {title, category, price} = this.state;
        return (
            <div className="product-item-container">
                <div className="product-item-content">
                    <div className="product-item-title">{title}</div>
                    <div className="product-item-category">{category}</div>
                </div>
                <div className="product-item-price-container">
                    <div className="product-item-price">{price} р</div>
                </div>
            </div>
        );
    }

}
