import React, { useState } from 'react';
import './App.css';
import Table from './Table'
import EmployeeForm from './EmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);

  const deleteEmployee = (index) => {
    const prevEmployees = [...employees];
    let filteredEmployees = prevEmployees.filter((employee, i) => {
      return i !== index; 
    });

    setEmployees(filteredEmployees);
  }

  const handleSubmit = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  }

  return (
    <div className="App">
      <div className="container">
        <Table employees={employees} employeeCount={employees.length} deleteHandler={deleteEmployee} />
        <EmployeeForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
