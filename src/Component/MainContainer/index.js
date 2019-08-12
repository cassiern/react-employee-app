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
    addUser = async (user, e) => {
        e.preventDefault();
        try {
            console.log('need to add user to state');
        }
        catch (err) {
            console.log(err, 'Err from addEmployee');
            return err;
        }
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
        console.log(this.state.currentUser);
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
                console.log(this.state.employees, 'after push')
            }
        } catch (err) {
            console.log(err, 'getEmployees Error');
            // isLoggedIn: false
        }
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        // if(this.state.isLoggedIn){
        //     <button action='/' onClick={this.handleLogoutClick}> Logout</button>
        //     show = <CreationEmployee />
        // } else {
        //     button = <button action='/login' onClick={this.handleLoginClick}> Login</button>
        //     show = <Register /> 
        //     loginForm = <Login />
        // }
        return (
            <div className="employeeContainer">
                <Header />
                <EmployeeList deleteEmployee={this.deleteEmployee} employeeList={this.state.employees} />
                {isLoggedIn ? <CreateEmployee addEmployee={this.addEmployee} /> : <Register />}
            </div>
        );
    }
}

export default MainContainer;
//getEmployees={this.getEmployees()}