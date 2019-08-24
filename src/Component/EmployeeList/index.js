
import React, { Component } from 'react';
import { Button } from 'reactstrap';


const EmployeeList = (props) => {
    const itemStyle = {
        border: "1px solid black",
        shadowBox: "0 0 2px black",
        listStyle: "none",
        padding: "1rem",
        width: "150px",
        height: "375px"
    }
    const displayEmployeeList = props.employeeList.map((employee) => {
        console.log(employee, 'employee passsed to displayEmployee');
        return (
            <li className='employeeList' style={itemStyle} key={employee._id}>
                <h1>{employee.title} </h1>
                <span>
                    <strong><label>Employee Name:   </label></strong>{employee.name}<br /><br />
                    <strong><label> Department:   </label></strong>{employee.department}
                </span><br /><br />
                <span>
                    <Button outline color="warning listButton" onClick={props.deleteEmployee.bind(null, employee)}>delete</Button>
                    <Button outline color="warning listButton" onClick={props.showEmployee.bind(null, employee)}>View Employee</Button>
                </span>

            </li>
        )
    })

    return (
        <div >
            <h1>Employee List</h1>
            <div className="row">{displayEmployeeList}</div>
        </div>
    )
}

export default EmployeeList;