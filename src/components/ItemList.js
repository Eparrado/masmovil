import React, { Component } from 'react';
import PhoneDetails from './PhoneDetails';

class ItemList extends Component {

    render() {
        return (
            <li className="item-list" onClick={this.props.onClick}>
                <h3>{this.props.brand}</h3>
                <h2>{this.props.title}</h2>
                <img src={this.props.photo} alt={this.props.title} />
                <PhoneDetails
                    color={this.props.color}
                    description={this.props.description}
                    price={this.props.price}
                    hidden={this.props.hidden}
                />
            </li>
        );
    }
}

export default ItemList;