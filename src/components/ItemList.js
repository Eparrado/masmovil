import React, { Component } from 'react';
import { connect } from "react-redux";
import { showPhoneDetails } from '../actions/actions-index';
import PhoneDetails from './PhoneDetails';

class ItemList extends Component {

    onHandleClick = (e) => {
        e.preventDefault()
        this.props.showPhoneDetails(e.currentTarget, PhoneDetails)
    }

    render() {
        return (
            <li className="page__main--list--item" onClick={this.onHandleClick}>
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

const visibilityStateToProps = state => {
    return {}
}

export default connect(visibilityStateToProps, { showPhoneDetails })(ItemList); 
