import React, { Component } from 'react';

class Days extends Component {
    render() {
        return (
            <div>
                <div>
                { this.getSundayOfCalendarMonth(8, 2018) }
                </div>
            </div>
        );
    }

    getFirstDayOfMonth(month, year) {
        return new Date(year, month, 1);
    }

    getSundayOfCalendarMonth(month, year) {
        let d = new Date(year, month, 1);

        let day = d.getDay(),
            diff = d.getDate() - day;
        return new Date(d.setDate(diff)).toString();
    }
}

export default Days;
