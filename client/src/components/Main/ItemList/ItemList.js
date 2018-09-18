import React, { Component } from 'react';
import PhoneDetails from '../PhoneDetails/PhoneDetails';
import './ItemList.css'

class ItemList extends Component {
    render() {
        return (
            <li className="page__main--list--item" onClick={this.props.onHandleClick}>
                <h3 className="item--brand">{this.props.brand}</h3>
                <h2 className="item--title">{this.props.title}</h2>
                <img className="item--img" src={this.props.photo} alt={this.props.title} />
                <PhoneDetails
                    color={this.props.color}
                    description={this.props.description}
                    price={this.props.price}
                />
            </li>
        );
    }
}

export default ItemList