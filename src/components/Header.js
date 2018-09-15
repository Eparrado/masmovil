import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="page__header">
                <h1 className="page__header--title">
                    Phone
                        <span className="page__header--title color-light">Catalog</span>
                </h1>
            </header>
        );
    }
}

export default Header;