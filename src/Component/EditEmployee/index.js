import React from 'react';
import { Button } from 'reactstrap';

const EditEmployee = (props) => {
<<<<<<< HEAD
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
       <div>
           <h4> View Employee Information</h4>
           <form onSubmit={props.editEmployee} style={formStyle}>
               <h1>This is Employee Edit Form</h1>
               <div className="row" style={rowStyle}>
                   <div className="col" style={colStyle}>
                       <label>Employee Name:</label>
                       <label>Position: </label>
                       <label>Birthdate: </label>
                       <label>Department: </label>
                       <label>Annual Salary: </label>
                   </div>
                   <div className="col" style={colStyle}>
                       <div> <input type="text" name="name" value={props.employeeToEdit.name} onChange={props.handleFormChange} /></div>
                       <div><input type="text" name="position" value={props.employeeToEdit.position} onChange={props.handleFormChange} /></div>
                       <div><input type="text" name="birthDate" value={props.employeeToEdit.birthDate} onChange={props.handleFormChange} /></div>
                       <div><input type="text" name="department" value={props.employeeToEdit.department} onChange={props.handleFormChange} /></div>
                       <div><input type="text" name="annualSalary" value={props.employeeToEdit.annualSalary} onChange={props.handleFormChange} /></div>
                   </div>
               </div>
               <Button outline color="warning" type='Submit'>Submit</Button>
           </form>
       </div>
   )
}
export default EditEmployee;

=======
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
        <div>
            <h4> View Employee Information</h4>
            <form onSubmit={props.editEmployee} style={formStyle}>
                <h1>This is Employee Edit Form</h1>
                <div className="row" style={rowStyle}>
                    <div className="col" style={colStyle}>
                        <label>Employee Name:</label>
                        <label>Position: </label>
                        <label>Birthdate: </label>
                        <label>Department: </label>
                        <label>Annual Salary: </label>
                    </div>
                    <div className="col" style={colStyle}>
                        <div> <input type="text" name="name" value={props.employeeToEdit.name} onChange={props.handleFormChange} /></div>
                        <div><input type="text" name="position" value={props.employeeToEdit.position} onChange={props.handleFormChange} /></div>
                        <div><input type="text" name="birthDate" value={props.employeeToEdit.birthDate} onChange={props.handleFormChange} /></div>
                        <div><input type="text" name="department" value={props.employeeToEdit.department} onChange={props.handleFormChange} /></div>
                        <div><input type="text" name="annualSalary" value={props.employeeToEdit.annualSalary} onChange={props.handleFormChange} /></div>
                    </div>
                </div>
                <input type='Submit' />
            </form>
        </div>
    )
}
export default EditEmployee;
>>>>>>> master
