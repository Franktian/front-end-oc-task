import React, { Component } from 'react';

import './Month.css';
import 'font-awesome/css/font-awesome.min.css';

class Month extends Component {
    render() {
        return (
            <div className="container">
                <div className="arrow left center-align"><i className="fa fa-angle-left"></i></div>
                <div className="center center-align">
                    <div>February</div>
                    <div>2018</div>
                </div>
                <div className="arrow right center-align"><i className="fa fa-angle-right"></i></div>
            </div>
        );
    }
}

export default Month;
