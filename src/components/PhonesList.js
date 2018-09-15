import React, { Component } from 'react';
import ItemList from './ItemList';

class PhoneList extends Component {
    render() {
        return (
            <main className="phone-list">
                <ul>
                    <p>List of phones, including item list</p>
                    <ItemList />
                </ul>
            </main>
        );
    }
}

export default PhoneList;