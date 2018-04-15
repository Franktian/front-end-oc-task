import React, { Component } from 'react';
import { Button, Popover, PopoverBody } from 'reactstrap';

import '../Days/Days.css';

class Day extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    onChange(e) {
        console.log('changed', e.target.name, e.target.value);
    }

    render() {
        const activeDay = this.props.data.isActive ? " active" : "";
        const isToday = this.props.data.isToday ? " today" : "";

        return (
            <div className={"days-item" + activeDay + isToday}>
                <div className="text" id={'Popover-' + this.props.id} onClick={this.toggle}>{this.props.data.getDate()}</div>
                <Popover className="pop-over-container" placement="bottom" isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
                    <PopoverBody>
                        <form>
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
                                <Button color="secondary">Save</Button>
                            </div>
                        </form>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Day;
