import React, { Component } from 'react';
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
      <form onSubmit={this.props.handleRegisterSubmit.bind(null, this.state)}>
        <h1>Form::Register A New User</h1>
        <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
        <label>Admin:</label><input type="boolean" name="admin" placeholder="false" value={this.state.admin} onChange={this.handleChange} />
        {/* <select name="admin" onChange={this.handleChange}>
          <option value='false'>Yes</option>
          <option value='true'>No</option>
        </select> */}
        <button type='submit'>Submit</button>
      </form>);
  }
}

export default Register;