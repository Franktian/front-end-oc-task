import React, { Component } from 'react';

import './Month.css';
import 'font-awesome/css/font-awesome.min.css';

class Month extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: new Date()
        };

        this.onClickLeft = this.onClickLeft.bind(this);
        this.onClickRight = this.onClickRight.bind(this);
    }

    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        return (
            <div className="container">
                <div className="arrow left center-align" onClick={this.onClickLeft}><i className="fa fa-angle-left"></i></div>
                <div className="center center-align">
                    <div>{monthNames[this.state.current.getMonth()]}</div>
                    <div>{ this.state.current.getFullYear()}</div>
                </div>
                <div className="arrow right center-align" onClick={this.onClickRight}><i className="fa fa-angle-right"></i></div>
            </div>
        );
    }

    onClickLeft() {
        const previousMonth = new Date(
            this.state.current.getFullYear(),
            this.state.current.getMonth() - 1,
            1
        );

        this.setState({
            current: previousMonth
        });
    }

    onClickRight() {
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

export default Month;
