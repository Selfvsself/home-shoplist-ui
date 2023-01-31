import React, {Component} from "react";
import "./appBuyProductList.css"
import ProductListItem from "../productListItem";
import BuyProductListItem from "../buyProductListItem";

export default class appBuyProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {...props};
    }

    render() {
        const itemList = this.props.data.map((item) => {
            return (
                <BuyProductListItem
                    key={item.id}
                    {...item}/>
            );
        })
        return (
            <div className="product-list-content">
                {itemList}
            </div>
        );
    }
}
