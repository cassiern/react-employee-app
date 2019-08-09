import React, { Component } from 'react';

class CreateEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            position: "",
            birthDate: "",
            department: "",
            annualSalary: ""

        }
    }
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }
    render() {
        return (
            <form>
                <h1>This is Register Form</h1>
                <label>Employee Name:</label> <input type="text" name="name" value={this.state.name} placeholder="FirstName MI LastName" onChange={this.handleChange} />
                <label>Position: </label> <input type="text" name="position" value={this.state.position} placeholder="Enter Title / Position" onChange={this.handleChange} />
                <label>Birthdate: </label> <input type="text" name="birthDate" value={this.state.birthDate} placeholder="Birthday (00/00/0000)" onChange={this.handleChange} />
                <label>Department: </label> <input type="text" name="department" value={this.state.department} placeholder="Enter Department" onChange={this.handleChange} />
                <label>Annual Salary: </label> <input type="text" name="annualSalary" value={this.state.annualSalary} placeholder="Employee Salary " onChange={this.handleChange} />
                <button type="submit">Create Employee</button>
            </form>

        );
    }
}

export default CreateEmployee;