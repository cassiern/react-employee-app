import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../../App.css';

class Login extends Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        Username:
                <input type='text' name='username' value={this.state.username} placeholder="username" onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                <input type='password' name='password' value={this.state.password} placeholder="password" onChange={this.handleChange} />
                    </label>
                    <Button type="submit" color="warning">Login</Button>
                </form>
            </div>
        );
    }
}

export default Login;

