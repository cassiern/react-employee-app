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
        console.log(this.state.annualSalary);
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }
    render() {
        const formStyle = {
            // listStyle: "none",
            padding: "1rem",
        }
        const colStyle = {
            // listStyle: "none",
            padding: "1rem 4rem",
            display: "flex",
            flexDirection: "column",
        }
        const rowStyle = {
            // listStyle: "none",
            display: "flex",
            justifyContent: "center",
        }
        return (
            <form style={formStyle} onSubmit={this.props.addEmployee.bind(null, this.state)}>
                <h1>This is Employee Creation Form</h1>

                <div className="row" style={rowStyle}>
                    <div className="col" style={colStyle}>
                        <label>Employee Name:</label>
                        <label>Position: </label>
                        <label>Birthdate: </label>
                        <label>Department: </label>
                        <label>Annual Salary: </label>
                    </div>
                    <div className="col" style={colStyle}>
                        <div> <input type="text" name="name" value={this.state.name} placeholder="FirstName MI LastName" onChange={this.handleChange} /></div>
                        <div><input type="text" name="position" value={this.state.position} placeholder="Enter Title / Position" onChange={this.handleChange} /></div>
                        <div><input type="text" name="birthDate" value={this.state.birthDate} placeholder="Birthday (00/00/0000)" onChange={this.handleChange} /></div>
                        <div><input type="text" name="department" value={this.state.department} placeholder="Enter Department" onChange={this.handleChange} /></div>
                        <div><input type="text" name="annualSalary" value={this.state.annualSalary} placeholder="Employee Salary " onChange={this.handleChange} /></div>
                    </div>
                </div>

                <button type="submit">Create Employee</button>
            </form >

        );
    }
}
export default CreateEmployee;