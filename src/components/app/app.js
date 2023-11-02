import {Component} from "react";
import './app.scss';


class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secondsInput: '',
            isSet: true
        }
    }

    showInputValue = (e) => {
        this.setState({
            secondsInput: e.target.value
        })
        if(e.target.value === ""){
            this.setState({isSet: true})
        } else {
            this.setState({isSet: false})
        }
    }

    onSet = () => {
        this.props.onSetTime(this.state.secondsInput);
        this.setState({secondsInput: ''});
        this.setState({isSet: true})
    }


    render() {
        return (
            <div className="inputBox">
                <input type="number"
                       placeholder="enter time"
                       onChange={this.showInputValue}
                       value={this.state.secondsInput}/>
                <Btn name="SET" onClick={this.onSet} disabled={this.state.isSet}/>
            </div>
        )
    }
}


class Counter extends Component {


    render() {
        const {seconds} = this.props
        return (
            <span>{seconds}</span>
        )
    }
}


class Btn extends Component {
    render() {
        const {name, onClick, disabled} = this.props
        return (
            <button onClick={onClick} disabled={disabled}>{name}</button>
        )
    }
}


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 60,
            isRunning: false,
            isStop: true,
            isReset: true
        }
    }

    handleStart = () => {
        this.intervalId = setInterval(() => {
            if (this.state.seconds > 0) {
                this.setState(() => ({
                    seconds: this.state.seconds - 1
                }))
            } else {
                clearInterval(this.intervalId);
                this.setState({isStop: true})
                this.setState({
                    seconds: "время истекло"
                })
            }
        }, 1000)
        this.setState({isRunning: true})
        this.setState({isStop: false})
        this.setState({isReset: false})
    }

    handlePause = () => {
        clearInterval(this.intervalId);
        this.setState({isRunning: false})
        this.setState({isStop: true})
    }


    handleReset = () => {
        clearInterval(this.intervalId);
        this.setState({isRunning: false})
        this.setState({isStop: true})
        this.setState({isReset: true})
        this.setState({seconds: 60})
    }


    handleSetTime = (newTime) => {
        this.setState({
            seconds: newTime
        })
    }


    render() {
        return (
            <div className="app">
                <h1>TIMER</h1>
                <Input onSetTime={this.handleSetTime}/>
                <Counter seconds={this.state.seconds}/>
                <div className="btns">
                    <Btn name="START" onClick={this.handleStart} disabled={this.state.isRunning}/>
                    <Btn name="PAUSE" onClick={this.handlePause} disabled={this.state.isStop}/>
                    <Btn name="RESET" onClick={this.handleReset} disabled={this.state.isReset}/>
                </div>
            </div>
        )
    }
}

export default App;
