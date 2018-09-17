import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import './PhoneList.css'

class PhoneList extends Component {
    render() {
        const mobilesData = this.props.mobilesData;

        return (
            <main className="page__main">
                {this.props.loading ? <Spinner /> : null}
                <ul className="page__main--list"> {
                    mobilesData.map((mobile, index) =>
                        <ItemList
                            key={index}
                            {...mobile}
                            onHandleClick={this.props.onHandleClick}
                        />
                    )}
                </ul>
            </main>
        );
    }
}

export default PhoneList;
