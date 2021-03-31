import React, { Fragment } from 'react';
import TableBody from './TableBody';
import PropTypes from 'prop-types';

const Table = (props) => {
  return(
    <Fragment>
      <h1>Employee Count: {props.employeeCount} </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th></th>
          </tr>
        </thead>
        <TableBody employees={props.employees} deleteHandler={props.deleteHandler} />
      </table>
    </Fragment>
  )
}

Table.propTypes = {
  employeeCount: PropTypes.number,
  employees: PropTypes.array,
  deleteHandler: PropTypes.func
}

export default Table;
