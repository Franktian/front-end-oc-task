import React, { Component } from 'react';

import './Events.css';

class Events extends Component {
    constructor(props) {
        super(props);

        this.renderActiveEvents = this.renderActiveEvents.bind(this);
    }

    render() {
        return (
            <div className="events-container">
                { this.renderActiveEvents() }
            </div>
        );
    }

    renderActiveEvents() {
        let events = this.props.events;
        let self = this;

        // Show events for active month only
        let filtered = events.filter((event) => {
            return event.month === self.props.currentDate.getMonth() && event.year === self.props.currentDate.getFullYear();
        });

        // Sort by date
        filtered.sort((e1, e2) => {
            return e1.dateTime - e2.dateTime;
        });

        return filtered.map((event, key) => {
            return (
                <div key={key}>{event.description}</div>
            );
        });
    }
}

export default Events;
