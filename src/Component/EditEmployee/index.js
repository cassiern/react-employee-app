import React from 'react';

const EmployeeList = (props) => {
    const itemStyle = {
        border: "1px solid black",
        shadowBox: "0 0 2px black",
        listStyle: "none",
        padding: "1rem",
        width: "150px"
    }
    const displayEmployeeList = props.employeeList.map((employee) => {
        return (
            <li style={itemStyle} key={employee._id}>
                <h1>{employee.title} </h1>
                <span>
                    <strong><label>Employee Name:   </label></strong><br />{employee.name}<br /><br />
                    <strong><label> Department:   </label></strong><br />{employee.department}
                </span><br /><br />
                <span>
                    <button onClick={props.deleteEmployee.bind(null, employee)}>delete</button><br /><br />
                    <button onClick={props.showEmployee.bind(null, employee)}>View Employee</button>
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

