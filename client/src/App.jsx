import React from "react";
import {useState} from "react";
 
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Profile from './pages/profile.jsx';
import ProtectedRoute from './pages/protectedRoute';

 function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/" isAuth={isAuth}>
          
          <Link to="/profile">Go to Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

        </ProtectedRoute>

        <ProtectedRoute path="/profile" component= {Profile} isAuth={isAuth} /> 
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>


      </Switch>

    </Router>
  
  );
}

export default App;