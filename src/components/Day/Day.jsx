import React, { Component } from 'react';
import { Button, Popover, PopoverBody } from 'reactstrap';

import '../Days/Days.css';

class Day extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.renderActiveEvents = this.renderActiveEvents.bind(this);

        this.state = {
            popoverOpen: false,
            hour: 0,
            minute: 0,
            eventName: '',
            events: []
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    onChange(e) {
        let data = {};
        data[e.target.name] = e.target.value;

        this.setState(data);
    }

    saveEvent() {
        const data = this.props.data;
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const day = data.getDate();
        const month = monthNames[data.getMonth()];
        const year = data.getFullYear();
        const dateTime = new Date(year, data.getMonth(), day, this.state.hour, this.state.minute, 0, 0);

        const recordDescription = `${day} ${month} ${year} ${this.state.hour}-${this.state.minute} : ${this.state.eventName}`;

        // Save all events
        this.props.saveEventRecord({
            month: data.getMonth(),
            year: data.getFullYear(),
            dateTime: dateTime,
            description: recordDescription
        });

        // Save todays events
        const daysDescription = `${this.state.hour}-${this.state.minute} : ${this.state.eventName}`;
        const dayEvent = {
            description: daysDescription,
            dateTime: dateTime,
        };

        this.setState({
            events: [...this.state.events, dayEvent]
        });

        this.toggle();
    }

    render() {
        const activeDay = this.props.data.isActive ? " active" : "";
        const isToday = this.props.data.isToday ? " today" : "";

        return (
            <div className={"days-item" + activeDay + isToday}  id={'Popover-' + this.props.id} onClick={this.toggle}>
                <div className="text">{this.props.data.getDate()}</div>
                { this.renderActiveEvents() }
                <Popover className="pop-over-container" placement="bottom" isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
                    <PopoverBody>
                        <div className="input-row">
                            <div className="row-item-1">
                                <input size="10" placeholder="Hour" name="hour" onChange={this.onChange}/>
                            </div>
                            <div className="row-item-1 right">
                                <input size="10" placeholder="Minute" name="minute" onChange={this.onChange}/>
                            </div>
                        </div>

                        <div className="input-row">
                            <div className="row-item-1">
                                <input size="23"  placeholder="Event Name" name="eventName" onChange={this.onChange}/>
                            </div>
                        </div>

                        <div className="btn-container">
                            <Button color="secondary" onClick={this.saveEvent}>Save</Button>
                        </div>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }

    renderActiveEvents() {
        let events = this.state.events;
        let self = this;

        let filtered = events.filter((event) => {
            return event.dateTime.getFullYear() === self.props.data.getFullYear()
                && event.dateTime.getMonth() === self.props.data.getMonth()
                && event.dateTime.getDate() === self.props.data.getDate()
        });

        filtered.sort((e1, e2) => {
            return e1.dateTime - e2.dateTime;
        });

        return filtered.map((event, key) => {
            return (<div className="event" key={key}>{event.description}</div>);
        });
    }
}

export default Day;
