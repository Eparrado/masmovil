import React, { Component } from 'react';
import axios from 'axios';
import ItemList from './ItemList';
import Spinner from './Spinner';

const API = 'http://localhost:3001/phones'

class PhoneList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobilesCatalog: [],
            loading: true,
            hidden: true,
        }
    }

    componentDidMount = () => {
        axios.get(API)
            .then(response => {
                this.setState({
                    mobilesCatalog: response.data,
                    loading: false
                });
            })
    }

    onHandleClick = () => {
        this.setState({ hidden: !this.state.hidden })
    }

    render() {
        const mobilesData = this.state.mobilesCatalog;

        return (
            <main className="phone-list">
                <h1>List of phones, including item list</h1>
                {this.state.loading ? <Spinner /> : null}
                <ul> {
                    mobilesData.map((mobile, index) =>
                        <ItemList
                            key={index}
                            {...mobile}
                            hidden={this.state.hidden}
                            onClick={this.onHandleClick}
                        />
                    )}
                </ul>
            </main>
        );
    }
}

export default PhoneList;