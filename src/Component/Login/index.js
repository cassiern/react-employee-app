import React, { Component } from 'react';
import '../../App.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            admin: false,
            userId: "",
            isLoggedIn: false
        }
    }
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
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
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                <input type='text' name='username' value={this.state.username} placeholder="username" onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                <input type='password' name='password' value={this.state.password} placeholder="password" onChange={this.handleChange} />
                    </label>
                </form>
            </div>
        );
    }
}

export default Login;

