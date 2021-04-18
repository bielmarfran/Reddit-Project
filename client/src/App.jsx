import React from "react";
import {useState} from "react";
 
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './pages/login.jsx';
import Profile from './pages/profile.jsx';
import ProtectedRoute from './pages/protectedRoute';

 function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>{/*path="/login" component={Login}*/}
          <button onClick={() => { setIsAuth(true)}}>Login</button>
          <button onClick={() => { setIsAuth(false)}}>Logout</button>
          <Link to="/profile">Go to Profile</Link>
        </Route>
        {/*     <Route exact path="/profile" component={() => <Profile authorized = {true} />}/> */}
        <ProtectedRoute path="/profile" component= {Profile} isAuth={isAuth} /> 
      </Switch>

    </Router>
  
  );
}

export default App;