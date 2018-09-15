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
            <div>
                <header>
                    <h1>PhoneCatalog</h1>
                </header>
                <main className="phone-list">
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
                <footer>
                    <p> by Eparrado</p>
                </footer>

            </div>

        );
    }
}

export default PhoneList;