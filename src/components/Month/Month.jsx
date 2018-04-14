import React, { Component } from 'react';

import './Month.css';
import 'font-awesome/css/font-awesome.min.css';

class Month extends Component {
    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        return (
            <div className="container">
                <div className="arrow left center-align" onClick={() => {
                    this.props.setPreviousMonth()
                }}><i className="fa fa-angle-left"></i></div>

                <div className="center center-align">
                    <div>{monthNames[this.props.currentDate.getMonth()]}</div>
                    <div>{ this.props.currentDate.getFullYear()}</div>
                </div>

                <div className="arrow right center-align" onClick={() => {
                    this.props.setNextMonth()
                }}><i className="fa fa-angle-right"></i></div>
            </div>
        );
    }
}

export default Month;
