import React, { Component } from 'react';
// import axios from 'axios';
import actions from '../actions/actions-index';
import PhoneList from './PhonesList';

// const API = 'http://localhost:3001/phones'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // mobilesCatalog: [],
            loading: true
        }
    }

    // componentDidMount = () => {
    //     axios.get(API)
    //         .then(response => {
    //             this.setState({
    //                 mobilesCatalog: response.data,
    //                 loading: false
    //             });
    //         })
    // }


    render() {
        // const mobilesData = this.state.mobilesCatalog;

        return (
            <PhoneList
                // mobilesCatalog={mobilesData}
                loading={this.state.loading}
            />
        );
    }
}

export default Main;