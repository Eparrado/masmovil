import React, { Component } from 'react';

class PhoneDetails extends Component {
    render() {
        return (
            <div className="item--details hidden">
                <p className="details--title">Color:
                    <span className="details--text"> {this.props.color}</span>
                </p>
                <p className="details--title">Feautures:
                    <span className="details--text"> {this.props.description}</span>
                </p>
                <p className="details--title">Price:
                    <span className="details--text"> {this.props.price}</span>
                </p>
            </div >
        );


    }
}

export default PhoneDetails;