import React, { Component } from 'react';

class EditEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const displayEmployeeList = props.employeeList.map((employee) => {
            const employeeObject = Object.entries(employee)
            console.log(employeeObject)
            const displayObject = employeeObject.map((item) => {
                return (
                    < li key={item[0]}>
                        <label>{item[0]}</label>: {item[1]}
                    </li >
                )
            });
            // console.log(employee, 'employee passsed to displayEmployee');
        })
        return (
            <div>
                <h1>Employee List</h1>
                <div className="row">{displayEmployeeList}</div>
                <div className="row">{displayObject}</div>
            </div>
        )
    }
}
export default EditEmployee;

{/* <li style={itemStyle} key={employee._id}>
                    <h1>{employee.title} </h1>
                    <span>
                        <strong><label>Employee Name:   </label></strong>{employee.name}<br /><br />
                        <strong><label> Department:   </label></strong>{employee.department}
                    </span><br /><br />
                    <span>
                        <button onClick={props.deleteEmployee.bind(null, employee)}>delete</button>
                        <button >edit</button>
                    </span>

                </li> */}

                // const displayObject = employeeObject.map((item) => {
                //     return (
                //         < li key={item[0]}>
                //             <label>{item[0]}</label>: {item[1]}
                //         </li >
                //     )
                // });
