import React, { Component } from 'react';

import './Days.css';

class Days extends Component {
    render() {
        return (
            <div className="days-container">
                { this.renderDays() }
            </div>
        );
    }

    renderDays() {
        let days = this.getCalendarDays(2, 2018);

        return days.map((day, key) => {
            return (
                <div
                    key={key}
                    className="days-item">
                    { day.getDate() }
                </div>
            );
        });
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

        return days;
    }
}

export default Days;
