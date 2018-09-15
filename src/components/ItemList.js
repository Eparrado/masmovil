import React, { Component } from 'react';
import PhoneDetails from './PhoneDetails';

class ItemList extends Component {

    render() {
        return (
            <li className="page__main--list--item" onClick={this.props.onClick}>
                <h3 className="item--brand">{this.props.brand}</h3>
                <h2 className="item--title">{this.props.title}</h2>
                <img className="item--img" src={this.props.photo} alt={this.props.title} />
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