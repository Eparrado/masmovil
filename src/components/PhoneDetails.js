import React, { Component } from 'react';

class PhoneDetails extends Component {
    render() {
        const showComponent = this.props.hidden ? "hidden" : '';

        return (
            <div className={showComponent}>
                <p>{this.props.color}</p>
                <p>{this.props.description}</p>
                <p>{this.props.price}</p>
            </div>
        );
    }
}

export default PhoneDetails;