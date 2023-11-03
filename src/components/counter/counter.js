import {Component} from "react";
import "./counter.scss"


class Counter extends Component {


    render() {
        const {seconds} = this.props
        return (
            <span>{seconds}</span>
        )
    }
}



export default Counter;
