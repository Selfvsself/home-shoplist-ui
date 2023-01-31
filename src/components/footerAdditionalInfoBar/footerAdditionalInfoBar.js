import React, {Component} from "react";
import MtTextButton from "../mtTextButton";
import "./footerAdditionalInfoBar.css"

export default class FooterAdditionalInfoBar extends Component {
    constructor(props) {
        super(props);
        this.state ={...props};
    }

    render() {
        const {onChangeList} = this.state;
        const {counterAll, counterBuy, totalPrice} = this.props;
        const counterInfo = "Куплено " + counterBuy + " из " + counterAll;
        const priceLabel = totalPrice + " р";
        return (
            <React.Fragment>
                <div className="footer-additional-container">
                    <MtTextButton label={counterInfo}/>
                </div>
                <div className="footer-additional-container footer-price-container">
                    <MtTextButton
                        label={priceLabel}
                        onClick={onChangeList} />
                </div>
            </React.Fragment>
        );
    }
}
