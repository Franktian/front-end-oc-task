import React, { Component } from 'react';

import './Week.css';

class Week extends Component {
    render() {
        return (
            <div className="week-container">
                <div className="week-item">Su</div>
                <div className="week-item">Mo</div>
                <div className="week-item">Tu</div>
                <div className="week-item">We</div>
                <div className="week-item">Th</div>
                <div className="week-item">Fr</div>
                <div className="week-item">Sa</div>>
            </div>
        );
    }
}

export default Week;
