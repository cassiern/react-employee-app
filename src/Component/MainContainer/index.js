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
            employees: [],
            currentUser: {
                username: '',
                password: '',
                admin: false,
                userId: "",
                isLoggedIn: false,
            }

        }
    }
    
    componentDidMount() {
        this.getEmployees();
    }
    addEmployee = async (employee, e) => {
        e.preventDefault();
        try {
            const createEmployee = await fetch('http://localhost:9000/api/v1/employee', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(employee),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log('Created User Response>>>', createEmployee);
            if (createEmployee.status !== 200) {
                throw Error('resource not found')
            } else {
                const createEmployeeResponse = await createEmployee.json();
                console.log(createEmployeeResponse, '<<<response to new Employee Route')

                this.setState({
                    employees: [...this.state.employees, createEmployeeResponse.data]
                })
                console.log(this.state.employees, 'Employees array')
            }
        } catch (err) {
            console.log(err, 'Err from addEmployee');
            return err;
        }
    }
    deleteEmployee = async (deletedEmployee, e) => {
        // e.preventDefault();
        console.log('deleted employee', deletedEmployee);
        try {
            const deleteEmployee = await fetch('http://localhost:9000/api/v1/employee/' + deletedEmployee._id, {
                method: 'DELETE',
                credentials: 'include',
                body: JSON.stringify(deletedEmployee),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log('deleted User Response>>>', deleteEmployee);
            if (deleteEmployee.status !== 200) {
                throw Error('resource not found')
            } else {
                const deleteEmployeeResponse = await deleteEmployee.json();
                console.log(deleteEmployeeResponse, '<<<response to delete Employee Route')

                this.setState({
                    movies: this.state.employees.filter((employee) => employee._id !== deletedEmployee._id)
                })
                console.log(this.state.employees, 'Employees array')
            }

        } catch (err) {
            console.log(err, 'Err from deleteEmployee');
            return err;
        }
    }
    getEmployees = async () => {
        try {
            const responseGetEmployees = await fetch('http://localhost:9000/api/v1/employee', {
                method: "GET",
                credentials: 'include',
            });
            console.log(responseGetEmployees, 'pinging database for all employees')
            if (responseGetEmployees.status !== 200) {
                throw Error("Error 404 from Server")
            } else {
                const employeesResponse = await responseGetEmployees.json();
                console.log(employeesResponse, 'Employees Index response')
                this.setState({
                    employees: [...employeesResponse.data]  //spread operator - takes the array and empties the contents into movies
                })
                console.log(this.state.employees, 'after push');
            }
        } catch (err) {
            console.log(err, 'getEmployees Error');
        }
    }
    afterLogin = () =>  { return(
        <div>
        <EmployeeList deleteEmployee={this.deleteEmployee} employeeList={this.state.employees} />
        <CreateEmployee addEmployee={this.addEmployee} />
        </div>
        )}
handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }
  handleLogoutClick = () =>{
    this.setState({
        isLoggedIn: false
    })
  }
  handleLoginClick = () => {
    this.setState({
        isLoggedIn: true
    })
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
    render() {
    const isLoggedIn = this.state.currentUser.isLoggedIn;
    let loginButton;
    let show;
    let loginForm;
    let addEmployee;
    let registerButton;
    let employeeList;

    //if logged in, should take you to 'edit'(create employee)
    //as well as a logout button
    if(this.state.isLoggedIn){
        loginButton = <button action='/' onClick={this.handleLogoutClick}> Logout</button>
        show = <CreateEmployee addEmployee={this.addEmployee}/>
        employeeList = <EmployeeList deleteEmployee={this.deleteEmployee} employeeList={this.state.employees}/>
        
    //if logged out, should see reg and login forms    
    } else {
        registerButton = <button action='/login' onClick={this.handleLoginClick}>Register</button>
        loginButton = <button action='/login' onClick={this.handleLoginClick}> Login</button>
        show = <Register /> 
    }
        return (
            <div className="employeeContainer">
            {registerButton}
            {loginButton}
            {show}
            {employeeList}
            </div>
        );
    }
}

export default MainContainer;
                
