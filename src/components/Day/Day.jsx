import React, { Component } from 'react';

import '../Days/Days.css';

class Day extends Component {
    render() {
        const activeDay = this.props.data.isActive ? " active" : "";
        const isToday = this.props.data.isToday ? " today" : "";
        const isoString = this.props.data.toISOString();

        return (
            <div className={"days-item" + activeDay + isToday}>
                <div className="text" id={isoString}>{this.props.data.getDate()}</div>
            </div>
        );
    }
}

export default Day;
