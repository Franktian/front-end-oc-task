import React, { Component } from 'react';

import './Days.css';
import Day from '../Day'

class Days extends Component {
    render() {
        return (
            <div className="days-container">
                { this.renderDays() }
            </div>
        );
    }

    renderDays() {
        const currentDate = this.props.currentDate;
        const days = this.getCalendarDays(currentDate.getMonth(), currentDate.getFullYear());

        return days.map((day, key) => {
            return (
                <Day key={key} data={day} id={key}/>
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
            let today = new Date();
            copy.isActive = copy.getMonth() === month;
            copy.isToday = copy.toDateString() === today.toDateString();
            days.push(copy);
            date.setDate(date.getDate() + 1);
        }

        return days;
    }
}

export default Days;
