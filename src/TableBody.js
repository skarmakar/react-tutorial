import React from 'react';
import PropTypes from 'prop-types';

const TableBody = (props) => {
  const { employees } = props;

  const tableRows = employees.map((employee, index) => {
    return (
      <tr key={index}>
        <td>{employee.name}</td>
        <td>{employee.job}</td>
      </tr>
    )
  });

  return(
    <tbody>
      {tableRows}
    </tbody>
  )
}

TableBody.propTypes = {
  employees: PropTypes.array
}

export default TableBody;
