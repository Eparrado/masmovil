import React, { Component } from 'react';
import axios from 'axios';
import PhoneList from './PhonesList';
import ItemList from './ItemList';
import Spinner from './Spinner';

const API = 'http://localhost:3001/phones'

class Main extends Component {
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
            <PhoneList
                mobilesCatalog={mobilesData}
                loading={this.state.loading}
                hidden={this.state.hidden}
                onHandleClick={this.onHandleClick}
            />
        );
    }
}

export default Main;