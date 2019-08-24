import React, { Component } from 'react';
import { Button } from 'reactstrap';



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      admin: false,
      isLoggedIn: false,
    }
  }
  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    console.log(this.state);
  }

  render() {
    return (
      <form className="registerForm" onSubmit={this.props.handleRegisterSubmit.bind(null, this.state)}>
        <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
        <label>Admin:</label><input type="boolean" name="admin" placeholder="false" value={this.state.admin} onChange={this.handleChange} />
        <Button type='submit' color="warning" className="registerButton">Register</Button>
      </form>);
  }
}

export default Register;