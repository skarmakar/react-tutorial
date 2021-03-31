import React from 'react';
import './App.css';
// import Table from './Table'
// import EmployeeForm from './EmployeeForm';

import Posts from './Posts';
import Users from './Users';
import Home from './Home';

import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <header>
            <nav>
              <ul>
                <li><NavLink to={'/'} className="nav-link" exact>Home</NavLink></li>
                <li><NavLink to={'/posts'} className="nav-link">Posts</NavLink></li>
                <li><NavLink to={'/users'} className="nav-link">Users</NavLink></li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/users' component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
