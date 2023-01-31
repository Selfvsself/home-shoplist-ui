import React, {Component} from "react";
import AppProductList from "../appProductList";
import AppBuyProductList from "../appBuyProductList"
import AppFooter from "../appFooter";
import ProductClient from "../../clients/productClient";
import SockJsClient from "react-stomp";
import AppHeader from "../appHeader";

export default class AppProductPage extends Component {
    constructor(props) {
        super(props);
        const {token, roomId} = props;
        this.state = {
            productClient: new ProductClient(token),
            data: [],
            roomId: roomId,
            isBuyList: false,
            onLogout: props.onLogout
        };
        this.getAllProduct();
    }

    onAddItem = (item) => {
        let addMessage = {
            type: "ADD",
            payload: item
        };
        const {productClient} = this.state;
        productClient.addProduct(addMessage);
    }

    onDelete = (id) => {
        let deleteMessage = {
            type: "DELETE",
            payload: {
                id: id
            }
        };
        const {productClient} = this.state;
        productClient.deleteProduct(deleteMessage);
    }

    onUpdate = (item) => {
        let updateMessage = {
            type: "UPDATE",
            payload: item
        }
        const {productClient} = this.state;
        productClient.updateProduct(updateMessage);
    }

    getAllProduct = () => {
        const {productClient} = this.state;
        productClient.getAllProducts()
            .then(items => this.setState(() => ({data: [...items]})));
    }

    onMessage = (msg) => {
        const {type, payload} = msg;
        if (type === "ADD") {
            const arr = [...this.state.data, payload];
            this.setState(() => ({
                data: arr
            }))
        } else if (type === "DELETE") {
            const arr = [];
            const {data} = this.state;
            for (let i = 0; i < data.length; i++) {
                if (payload.id !== data[i].id) {
                    arr.push(data[i]);
                }
            }
            this.setState(() => ({
                data: arr
            }));
        } else if (type === "UPDATE") {
            const arr = [];
            const {data} = this.state;
            for (let i = 0; i < data.length; i++) {
                if (payload.id === data[i].id) {
                    arr.push(payload)
                } else {
                    arr.push(data[i])
                }
            }
            this.setState(() => ({
                data: arr
            }));
        }
    }

    changeListView = () => {
        const {isBuyList} = this.state;
        this.setState(() => ({
            isBuyList: !isBuyList
        }));
    }

    render() {
        const {data, roomId, isBuyList} = this.state;
        const {onLogout} = this.props;
        const label = isBuyList ? "В корзине" : "Не забыть купить";
        const productArray = [...data].filter(i => i.price === 0);
        const buyArray = [...data].filter(i => i.price > 0);
        let totalPrice = 0;
        for (let i = 0; i < buyArray.length; i++) {
            totalPrice = totalPrice + buyArray[i].price;
        }
        const productList = isBuyList ? (
            <AppBuyProductList
                data={buyArray}/>
                ) : (
            <AppProductList
                data={productArray}
                onDeleteItem={(id) => this.onDelete(id)}
                onUpdateItem={(item) => this.onUpdate(item)}/>);
        return (
            <>
                <AppHeader
                    label={label}
                    onLogout={onLogout}/>
                {productList}
                <AppFooter
                    onAddItem={(item) => this.onAddItem(item)}
                    onChangeListView={this.changeListView}
                    isBuyList={isBuyList}
                    counterAll={data.length}
                    counterBuy={buyArray.length}
                    totalPrice={totalPrice}/>
                <SockJsClient
                    url={"/ws-message"}
                    topics={[`/topic/message/${roomId}`]}
                    onConnect={() => console.log("Connect")}
                    onDisconnect={() => console.log("Disconnected!")}
                    onMessage={this.onMessage}
                    debug={false}
                    // ref={(client) => {clientRef = client;}}
                />
            </>
        );
    }
}
