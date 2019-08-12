import React, { Component } from 'react';
import Login from '../Login/index';
import Register from '../Register/index';
class Header extends Component {
    constructor() {
        super();
        this.state = {}
    }

    login = (props) => {
        this.props.setState({
            isLoggedIn: true
        })
    }






    render() {

        return (
            <div>

            </div>
        )
    }
}
export default Header;