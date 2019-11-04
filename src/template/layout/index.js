import React, { Component } from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Layout extends Component {
    render() {
        let Component = this.props.component;        
        let route = this.props.route;
        
        return (
            <div>
                <Header />
                <Menu />
                <Component route={route} />
                <Footer />
            </div>
        );
    }
}