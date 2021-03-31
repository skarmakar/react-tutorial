import React from 'react';
import PropTypes from 'prop-types';

const TableBody = (props) => {
  const tableRows = props.employees.map((employee, index) => {
    return (
      <tr key={index}>
        <td>{employee.name}</td>
        <td>{employee.job}</td>
        <td><a className='button' onClick={() => props.deleteHandler(index)}>Delete</a></td>
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
  employees: PropTypes.array,
  deleteHandler: PropTypes.func
}

export default TableBody;
