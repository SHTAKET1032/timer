import {Component} from "react";
import "./btn.scss"


class Btn extends Component {
    render() {
        const {name, onClick, disabled} = this.props
        return (
            <button onClick={onClick} disabled={disabled}>{name}</button>
        )
    }
}


export default Btn;
