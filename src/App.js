import React from 'react';
import './App.css';
// import Table from './Table'
// import EmployeeForm from './EmployeeForm';

import Posts from './Post/Posts';
import Users from './User/Users';
import Home from './Home';

import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import PostForm from './Post/PostForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <nav className="navbar">
          <ul className="list-unstyled">
            <li><NavLink to={'/'} className="nav-link" exact>Home</NavLink></li>
            <li><NavLink to={'/posts'} className="nav-link">Posts</NavLink></li>
            <li><NavLink to={'/users'} className="nav-link">Users</NavLink></li>
          </ul>
        </nav>
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/posts/new' component={PostForm} />
      </Switch>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
