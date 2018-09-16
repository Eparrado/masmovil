import React, { Component } from 'react';
import PhoneList from './PhonesList';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // mobilesCatalog: [],
            loading: true
        }
    }

    render() {
        return (
            <PhoneList
                loading={this.state.loading}
            />
        );
    }
}

export default Main;