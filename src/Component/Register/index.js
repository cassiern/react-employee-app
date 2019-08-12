import React, {Component} from 'react';
import CreateEmployee from '../CreateEmployee';
import Login from '../Login';
class Register extends Component {
	constructor(){
		super();
		this.state ={
			username: '',
			password: '',
			admin: false,
      isLoggedIn: false
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
      console.log(this.state, 'this.state')
    }
    this.setState({
      isLoggedIn: true
    })
}
	render(){
          let isLoggedIn = this.state.isLoggedIn;
          let createUser;
          let showReg;
          let showLogin;
          
          if(isLoggedIn){

          return createUser = <CreateEmployee />

            } else{
              showLogin = <Login />
              showReg = <Register />
            }         
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
      			<select>
      				<option value='false'>No</option> 
      				<option value='true'>Yes</option>
      			</select>
      		</label>
     </form>
     {createUser}
     <Login />
</div>

			)
	}
}

export default Register;