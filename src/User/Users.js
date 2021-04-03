// useEffect to cause side effects
import React, { useState, useEffect, Fragment } from 'react';
import { getItems } from '../services/get_list';

const Users = () => {
  const [users, setUsers] = useState([]);

  const fullAddress = (address) => {
    return `${address.city}, ${address.suite}, ${address.city}, ${address.zipcode}`;
  };

  const userTableRows = users.map((user) =>{
    return(
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{fullAddress(user.address)}</td>
      </tr>
    )
  });


  useEffect(() => {
    let mounted = true;
    getItems('users').then(items => {
      if(mounted){
        setUsers(items);
      }
    })
    
    return () => mounted = false;
  }, []);

  return (
    <Fragment>
      <h1>Users</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {userTableRows}
        </tbody>
      </table>
    </Fragment>
  )
}

export default Users;
