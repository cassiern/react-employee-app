import React, { Component } from 'react';
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
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;

