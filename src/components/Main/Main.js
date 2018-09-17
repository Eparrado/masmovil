import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMobilesData } from '../../actions/actions-index';
import { showPhoneDetails } from '../../actions/actions-index';
import PhoneDetails from './PhoneDetails/PhoneDetails';
import PhoneList from './PhoneList/PhonesList';

class Main extends Component {

    componentWillMount() {
        this.props.fetchMobilesData()
    }

    onHandleClick = (e) => {
        e.preventDefault()
        this.props.showPhoneDetails(e.currentTarget, PhoneDetails)
    }

    render() {
        return (
            <PhoneList
                mobilesData={this.props.phones}
                loading={this.props.loading}
                onHandleClick={this.onHandleClick}

            />
        );
    }
}

const mapStateToProps = state => {
    return {
        phones: state.mobilesCatalog,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { fetchMobilesData, showPhoneDetails })(Main);
// export default Main;