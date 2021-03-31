import React from 'react';
import './App.css';
import Table from './Table'

function App() {
  const employees = [
    { name: 'Santanu', job: 'QI' },
    { name: 'Jayanta', job: 'QI' },
    { name: 'Abhiskek', job: 'QI' },
    { name: 'Bikram', job: 'QI' }
  ];


  return (
    <div className="App">
      <div className="container">
        <Table employees={employees} employeeCount={100} />
      </div>
    </div>
  );
}

export default App;
