import React, { Component } from 'react';
import { connect } from "react-redux";
import ItemList from './ItemList';
import { fetchMobilesData } from '../actions/actions-index';
import Spinner from './Spinner';

class PhoneList extends Component {

    componentWillMount() {
        console.log(this.props.fetchMobilesData())
        this.props.fetchMobilesData()
    }

    render() {
        const mobilesData = this.props.phones;

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

const mapStateToProps = state => {
    return {
        phones: state.mobilesCatalog
    }
}

export default connect(mapStateToProps, { fetchMobilesData })(PhoneList);