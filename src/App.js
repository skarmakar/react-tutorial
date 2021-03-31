import React from 'react';
import './App.css';
// import Table from './Table'
// import EmployeeForm from './EmployeeForm';

import Posts from './Posts';
import Users from './Users';

import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <header>
            <nav>
              <ul>
                <li><Link to={'/'} className="nav-link">Home</Link></li>
                <li><Link to={'/posts'} className="nav-link">Posts</Link></li>
                <li><Link to={'/users'} className="nav-link">Users</Link></li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
      <Switch>
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/users' component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
