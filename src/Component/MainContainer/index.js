import React, { Component } from 'react';
import Login from '../Login/index';
import CreateEmployee from '../CreateEmployee/index';
import EmployeeList from '../EmployeeList/index';
import Header from '../Header/index';


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="employeeContainer">
                <Header />
                <Login />
                <CreateEmployee />
                <EmployeeList />
            </div>
        );
    }
}

export default MainContainer;