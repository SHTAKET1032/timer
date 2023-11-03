import {Component} from "react";
import Input from "../input/input";
import Btn from "../btn/btn";
import Counter from "../counter/counter";
import './app.scss';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 60,
            isRunning: false,
            isStop: true,
            isReset: true,
            // isSetSuccess: false
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

    // handleSetSuccess = () => {
    //     this.setState({
    //         isSetSuccess: true
    //     })
    // }




    render() {
        return (
            <div className="app">
                <h1>TIMER</h1>
                <Input onSetTime={this.handleSetTime}
                       onSetSuccess={this.handleSetSuccess}/>
                <Counter seconds={this.state.seconds}/>
                <div className="btns">
                    <Btn name="START"
                         onClick={this.handleStart}
                         disabled={this.state.isRunning /*|| this.state.isSetSuccess*/}/>
                    <Btn name="PAUSE"
                         onClick={this.handlePause}
                         disabled={this.state.isStop}/>
                    <Btn name="RESET"
                         onClick={this.handleReset}
                         disabled={this.state.isReset}/>
                </div>
            </div>
        )
    }
}

export default App;
