import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

import '../Days/Days.css';

class Day extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        const activeDay = this.props.data.isActive ? " active" : "";
        const isToday = this.props.data.isToday ? " today" : "";
        const isoString = this.props.data.toISOString();

        return (
            <div className={"days-item" + activeDay + isToday}>
                <div className="text" id={'Popover-' + this.props.id} onClick={this.toggle}>{this.props.data.getDate()}</div>
                <Popover className="pop-over-container" placement="bottom" isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Day;
