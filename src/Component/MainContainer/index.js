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
    const isLoggedIn = this.state.isLoggedIn;
    // if(this.state.isLoggedIn){
    //     <button action='/' onClick={this.handleLogoutClick}> Logout</button>
    //     show = <CreationEmployee />
    // } else {
    //     button = <button action='/login' onClick={this.handleLoginClick}> Login</button>
    //     show = <Register /> 
    //     loginForm = <Login />
    // }
        return (
            <div className="employeeContainer">
                <Header />
                <EmployeeList />
                {isLoggedIn ?<CreateEmployee /> : <Register />}
                
            </div>
        );
    }
}

export default MainContainer;