import React, { Component } from 'react';

class Days extends Component {
    render() {
        return (
            <div>
                <div>
                { this.getCalendarDays(7, 2018) }
                </div>
            </div>
        );
    }

    getSundayOfCalendarMonth(month, year) {
        let d = new Date(year, month, 1);

        let day = d.getDay(),
            diff = d.getDate() - day;
        return new Date(d.setDate(diff));
    }

    getCalendarDays(month, year) {
        let days = [];
        let date = this.getSundayOfCalendarMonth(month, year);

        for (let i = 0; i < 42; i++) {
            let copy = new Date(date.getTime());
            days.push(copy);
            date.setDate(date.getDate() + 1);
        }

        return "Frank";
    }
}

export default Days;
