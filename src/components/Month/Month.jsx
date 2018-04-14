import React, { Component } from 'react';

import './Month.css';

class Month extends Component {
    render() {
        return (
            <div class="container">
                <div class="arrow left center-align">a</div>
                <div class="center center-align">
                    <div>February</div>
                    <div>2018</div>
                </div>
                <div class="arrow right center-align">b</div>
            </div>
        );
    }
}

export default Month;
