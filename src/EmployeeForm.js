import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EmployeeForm = (props) => {
  const defaultEmployee = {name: '', job: ''};
  const [employee, addEmployee] = useState(defaultEmployee);

  const handleChange = (event) => {
    let newEmployee = {...employee};
    newEmployee[event.target.name] = event.target.value;
    addEmployee(newEmployee);
  };

  const submitForm = () => {
    props.handleSubmit(employee);
    addEmployee(defaultEmployee);
  };

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input 
        type="text"
        name="name"
        id="name"
        value={employee.name}
        onChange={handleChange} />

      <label htmlFor="job">Job</label>
      <input 
        type="text"
        name="job"
        id="job"
        value={employee.job}
        onChange={handleChange} />
      
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  )
};

EmployeeForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default EmployeeForm;
