import React, {Component} from "react";
import "./mtSelect.css"

export default class MtSelect extends Component{

    constructor(props) {
        super(props);
        const {onChange} = this.props;
        this.state = {
            onChange: onChange
        };
        this.selectRef = React.createRef();
    }

    onChangeValue = (e) => {
        const elem = e.target;
        const {onChange} = this.state;
        return onChange(elem.options[elem.selectedIndex].text);
    }

    onSetValue = (text) => {
        let value = "";
        if (this.selectRef && this.selectRef.current) {
            const options = [...this.selectRef.current.options];
            for (let i = 0; i < options.length; i++) {
                const option = options[i];
                if (option.text === text) {
                    value = option.value;
                    break;
                }
            }
        }
        return value;
    }

    render() {
        const {value} = this.props;
        return (
            <div>
                <select className="mt-select"
                        ref={this.selectRef}
                        required
                        onChange={(e) => this.onChangeValue(e)}
                        value={this.onSetValue(value)}>
                    <option value="other">Другая</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
            </div>
        );
    }
}
