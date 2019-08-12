<<<<<<< HEAD
import React, { Component } from 'react';
import CreationEmployee from '../CreateEmployee';
=======
import React, {Component} from 'react';
>>>>>>> 9f33c127dbdeb7d6883fdfe32800ab67947d0765
import Login from '../Login/index';
import Register from '../Register/index';
class Header extends Component {
<<<<<<< HEAD
    constructor() {
        super();
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        }
    }
    handleLoginClick = (e) => {
        this.setState({
            isLoggedIn: true
        })
    }
    handleLogoutClick = (e) => {
        this.setState({
            isLoggedIn: false
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const login = await fetch('http://localhost:9000/auth/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedlogin = await login.json();
        console.log(parsedlogin, ' response from login');
        if (parsedlogin.status.message === 'User Logged In') {
            console.log('logged in')
        }
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        let show;
        let loginForm;
        if (this.state.isLoggedIn) {
            button = <button action='/' onClick={this.handleLogoutClick}> Logout</button>
            show = <CreationEmployee />
        } else {
            button = <button action='/login' onClick={this.handleLoginClick}> Login</button>
            show = <Register />
            loginForm = <Login />
        }
        return (
            <div>
            </div>
        )
    }
=======
	constructor(){
		super();
		this.state={}
	}

login =(props)=>{
	this.props.setState({
		isLoggedIn: true
	})
}






render(){

	return(
	<div>
		
	</div>
	)
}
>>>>>>> 9f33c127dbdeb7d6883fdfe32800ab67947d0765
}
export default Header;