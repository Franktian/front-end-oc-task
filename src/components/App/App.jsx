import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Month from '../Month';
import Week from '../Week';
import Days from '../Days';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: new Date()
        };

        this.setPreviousMonth = this.setPreviousMonth.bind(this);
        this.setNextMonth = this.setNextMonth.bind(this);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Calendar App</h1>
                </header>

                <div className="App-container">
                    <Month setPreviousMonth={this.setPreviousMonth} setNextMonth={this.setNextMonth} currentDate={this.state.current}/>
                    <Week />
                    <Days currentDate={this.state.current}/>
                </div>
            </div>
        );
    }

    setPreviousMonth() {
        const previousMonth = new Date(
            this.state.current.getFullYear(),
            this.state.current.getMonth() - 1,
            1
        );

        this.setState({
            current: previousMonth
        });
    }

    setNextMonth() {
        const nextMonth = new Date(
            this.state.current.getFullYear(),
            this.state.current.getMonth() + 1,
            1
        );

        this.setState({
            current: nextMonth
        });
    }
}

export default App;
