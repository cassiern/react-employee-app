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
                <form onSubmit={this.props.handleLoginSubmit.bind(null, this.state)}>   
                <input type='text' name='username' value={this.state.username} placeholder="username" onChange={this.handleChange} />
                <input type='password' name='password' value={this.state.password} placeholder="password" onChange={this.handleChange} />
                    <Button type="submit" color="warning" className="loginButton">Login</Button>
                </form>
            </div>
        );
    }
}

export default Login;

