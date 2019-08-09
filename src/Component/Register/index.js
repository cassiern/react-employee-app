import React, {Component} from 'react';

class Register extends Component {
	constructor(){
		super();
		this.state ={
			username: '',
			password: '',
			admin: false
		}
	}
 handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const register = await fetch('http://localhost:9000/auth/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedRegister = await register.json();

    console.log(parsedRegister, ' response from register');

    if(parsedRegister.status.message === 'User Logged In'){
      console.log('==== logged in ======')
    }
}
	render(){
		return(
<div>
		<h1>Register Form</h1>
     	<form onSubmit={this.handleSubmit}>
      		<label>
        	Username:
        	<input type='text' placeholder='username' name='username' onChange={this.handleChange} value={this.state.username}/>
      		</label>
     		 <label>
        		Password:
        		<input type='password' placeholder='password' name='password' onChange={this.handleChange}/>
      		</label>

      		<label>
      			Admin:
      			<select value='admin'>
      				<option value=''></option>
      				<option value='false'>No</option> 
      				<option value='true'>Yes</option>
      			</select>
      		</label>

      <button type='Submit'>
        Register
      </button>
     </form>
</div>

			)
	}
}

export default Register;