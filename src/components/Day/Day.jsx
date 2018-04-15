import React, { Component } from 'react';
import { Button, Popover, PopoverBody } from 'reactstrap';

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

        return (
            <div className={"days-item" + activeDay + isToday}>
                <div className="text" id={'Popover-' + this.props.id} onClick={this.toggle}>{this.props.data.getDate()}</div>
                <Popover className="pop-over-container" placement="bottom" isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
                    <PopoverBody>
                        <div className="input-row">
                            <div className="row-item-1">
                                <input size="10" placeholder="Hour"/>
                            </div>
                            <div className="row-item-1 right">
                                <input size="10" placeholder="Minute"/>
                            </div>
                        </div>

                        <div className="input-row">
                            <div className="row-item-1">
                                <input size="23"  placeholder="Event Name"/>
                            </div>
                        </div>

                        <div className="btn-container">
                            <Button color="secondary">Save</Button>
                        </div>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Day;
