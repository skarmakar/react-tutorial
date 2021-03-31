import React, { useState } from 'react';
import './App.css';
import Table from './Table'

function App() {
  const arr = [
    { name: 'Santanu', job: 'QI' },
    { name: 'Jayanta', job: 'QI' },
    { name: 'Abhiskek', job: 'QI' },
    { name: 'Bikram', job: 'QI' }
  ];

  const [employees, setEmployees] = useState(arr);

  const deleteEmployee = (index) => {
    const prevEmployees = [...employees];
    let filteredEmployees = prevEmployees.filter((employee, i) => {
      return i !== index; 
    });

    setEmployees(filteredEmployees);
  }

  return (
    <div className="App">
      <div className="container">
        <Table employees={employees} employeeCount={employees.length} deleteHandler={deleteEmployee} />
      </div>
    </div>
  );
}

export default App;
