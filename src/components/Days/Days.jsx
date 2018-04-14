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
        let days = this.getCalendarDays(1, 2018);

        return days.map((day, key) => {
            const activeDay = day.isActive ? " active" : "";

            return (
                <div
                    key={key}
                    className={"days-item" + activeDay}>
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
            copy.isActive = copy.getMonth() === month;
            days.push(copy);
            date.setDate(date.getDate() + 1);
        }

        return days;
    }
}

export default Days;
