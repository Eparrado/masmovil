import React, { Component } from 'react';
import ItemList from './ItemList';
import Spinner from './Spinner';

class PhoneList extends Component {
    render() {
        const mobilesData = this.props.mobilesCatalog;

        return (
            <main className="page__main">
                {this.props.loading ? <Spinner /> : null}
                <ul className="page__main--list"> {
                    mobilesData.map((mobile, index) =>
                        <ItemList
                            key={index}
                            {...mobile}
                        />
                    )}
                </ul>
            </main>
        );
    }
}

export default PhoneList;