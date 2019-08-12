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
        console.log(employee, 'employee passsed to displayEmployee');
        return (
            <li style={itemStyle} key={employee._id}>
                <h1>{employee.title} </h1>
                <span>
                    <strong><label>Employee Name:   </label></strong>{employee.name}<br /><br />
                    <strong><label> Department:   </label></strong>{employee.department}
                </span><br /><br />
                <span>
                    <button onClick={props.deleteEmployee.bind(null, employee)}>delete</button>
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


//Unused Code
// const employeeObject = Object.entries(employee)
// console.log(employeeObject)
// const displayObject = employeeObject.map((item) => {
//     return (
//         < li key={item[0]}>
//             <label>{item[0]}</label>: {item[1]}
//         </li >
//     )
// });