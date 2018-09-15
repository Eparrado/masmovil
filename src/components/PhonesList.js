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
            <div className="page">
                <header className="page__header">
                    <h1 className="page__header--title">
                        Phone
                        <span className="page__header--title color-light">Catalog</span>
                    </h1>
                </header>
                <main className="page__main">
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
                <footer className="page__footer">
                    <p className="page__footer--text color-light"> by Eparrado</p>
                </footer>

            </div>

        );
    }
}

export default PhoneList;