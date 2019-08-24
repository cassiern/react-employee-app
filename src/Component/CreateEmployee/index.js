import React, { Component } from 'react';
import { Button } from 'reactstrap';


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
            padding: "1rem",
        }
        const colStyle = {
            padding: "1rem 4rem",
            display: "flex",
            flexDirection: "column",
        }
        const rowStyle = {
            display: "flex",
            justifyContent: "center",
        }
        return (
            <form style={formStyle} onSubmit={this.props.addEmployee.bind(null, this.state)}>
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
                <Button type="submit" outline color="warning" className="createButton">Create Employee</Button>
            </form >

        );
    }
}
export default CreateEmployee;