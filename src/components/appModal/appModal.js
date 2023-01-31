import React, {Component} from "react";
import "./appModal.css"
import MtInput from "../mtInput";
import MtButton from "../mtButton";
import MtSelect from "../mtSelect";

export default class AppModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handleConfirm: props.handleConfirm,
            handleClose: props.handleClose,
            handleDelete: props.handleDelete,
            windowTitle: props.windowTitle,
            inputs: props.inputs ? props.inputs : [],
            id: props.id ? props.id : '',
            title: props.title ? props.title : '',
            category: props.category ? props.category : '',
            price: props.price ? props.price : '',
            owner: props.owner ? props.owner : ''
        };
    }

    onTitleChange = (e) => {
        this.setState(() => ({title: e.target.value}));
    }

    onCategoryChange(text) {
        this.setState(() => ({category: text}));
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
        this.onCancel();
    }

    onCancel = () => {
        this.setState(() => ({
            id: this.props.id ? this.props.id : '',
            title: this.props.title ? this.props.title : '',
            category: this.props.category ? this.props.category : '',
            price: this.props.price ? this.props.price : ''
        }))
        this.state.handleClose();
    }

    onDelete = () => {
        const {id, handleDelete} = this.state;
        handleDelete(id);
        this.onCancel();
    }

    render() {
        const {windowTitle} = this.state;
        const {show, inputs} = this.props;
        const showClass = show ? "modal-container display-block" : "modal-container display-none";
        let titleField = inputs.includes('title') ? (
            <div>
                <MtInput
                    label='title'
                    onChange={(e) => this.onTitleChange(e)}
                    value={this.state.title}/>
            </div>) : null;

        let categoryField = inputs.includes('category') ? (
            <div>
                <MtSelect
                    onChange={(e) => this.onCategoryChange(e)}
                    value={this.state.category}/>
            </div>) : null;

        let priceField = inputs.includes('price') ? (
            <div>
                <MtInput
                    label='price'
                    onChange={(e) => this.onPriceChange(e)}
                    value={this.state.price}/>
            </div>
        ) : null;

        let deleteBtn = inputs.includes('delete') ? (
            <span className="st-margin">
                <MtButton type="button" label="Delete" onClick={this.onDelete}/>
            </span>
        ) : null;

        return (
            <div className={showClass}>
                <div className="modal-content">
                    <div>
                        <label className="modal-title">{windowTitle}</label>
                    </div>
                    {titleField}
                    {categoryField}
                    {priceField}
                    <div className="modal-button-container">
                        {deleteBtn}
                        <div className="right-align">
                            <span className="st-margin">
                                <MtButton type="button" label="Cancel" onClick={this.onCancel}/>
                            </span>
                            <span className="st-margin">
                                <MtButton type="button" label="Ok" onClick={this.onConfirm}/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
