import React, {Component} from "react";
import MtFab from "../mtFab";
import "./appFooter.css"
import FooterAdditionalInfoBar from "../footerAdditionalInfoBar";
import AppModal from "../appModal";
import AddProductDialog from "../appModals/addProductDialog";
import AddBuyProductDialog from "../appModals/addBuyProductDialog";

export default class AppFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onAddItem: props.onAddItem,
            show: false,
            onChangeListView: props.onChangeListView,
            isBuyList: props.isBuyList
        };
    }

    showDialog = () => {
        this.setState({show: true})
    }

    hideDialog = () => {
        this.setState({show: false})
    }

    addProduct(product) {
        const {onAddItem} = this.state;
        onAddItem(product);
    }

    render() {
        const {onChangeListView, show} = this.state;
        const {isBuyList, counterAll, counterBuy, totalPrice} = this.props;
        const modalFields = isBuyList ? ['title', 'category', 'price'] : ['title', 'category'];
        const modalDialog = isBuyList ? 
            (<AddBuyProductDialog 
                open={show}
                hideDialog={this.hideDialog}
                handleConfirm={(product) => this.addProduct(product)}/>) :
            (<AddProductDialog
                open={show}
                hideDialog={this.hideDialog}
                handleConfirm={(product) => this.addProduct(product)}/>);
        return (
            <footer>
                <div className="footer-container">
                    <FooterAdditionalInfoBar
                        onChangeList={onChangeListView}
                        counterAll={counterAll}
                        counterBuy={counterBuy}
                        totalPrice={totalPrice}/>
                    <div className="footer-flat-container">
                        <MtFab type="button" onclick={this.showDialog}/>
                    </div>
                    {modalDialog}
                    {/* <AppModal
                        windowTitle='Add product'
                        inputs={modalFields}
                        show={this.state.show}
                        handleClose={this.hideDialog}
                        handleConfirm={(product) => this.addProduct(product)}/> */}
                </div>
            </footer>
        );
    }
}
