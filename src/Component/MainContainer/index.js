import React, { Component } from 'react';
import Login from '../Login/index';
import CreateEmployee from '../CreateEmployee/index';
import EmployeeList from '../EmployeeList/index';
import Header from '../Header/index';
import Register from '../Register/index';


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return (
            <div className="employeeContainer">
                <Header />

            </div>
        );
    }
}

export default MainContainer;