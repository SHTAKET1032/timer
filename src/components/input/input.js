import {Component} from "react";
import Btn from "../btn/btn";
import "./input.scss"

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secondsInput: '',
            isSet: true,
        }
    }

    showInputValue = (e) => {
        this.setState({
            secondsInput: e.target.value
        })
        if (e.target.value === "") {
            this.setState({isSet: true})
        } else {
            this.setState({isSet: false})
        }
    }

    onSet = () => {
        this.props.onSetTime(this.state.secondsInput);
        this.setState({secondsInput: ''});
        this.setState({isSet: true});
        // this.props.onSetSuccess(false)
    }


    render() {
        return (
            <div className="inputBox">
                <input type="number"
                       placeholder="enter time"
                       onChange={this.showInputValue}
                       value={this.state.secondsInput}/>
                <Btn name="SET"
                     onClick={this.onSet}
                     disabled={this.state.isSet}/>
            </div>
        )
    }
}


export default Input;
