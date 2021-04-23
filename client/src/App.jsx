import React from "react";
import { useState } from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Profile from "./pages/profile.jsx";
import Feed from "./pages/feed.jsx";
import Post from "./pages/post.jsx";
import ProtectedRoute from "./pages/protectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          Lading Page<br></br>
          <Link to="/profile">Go to Profile</Link>
          <br></br>
          <Link to="/login">Go to Login</Link>
          <br></br>
          <Link to="/register">Go to Register</Link>
          <br></br>
        </Route>
        {/*     <Route exact path="/profile" component={() => <Profile authorized = {true} />}/> */}
        <ProtectedRoute path="/profile" component={Profile} isAuth={isAuth} />
      </Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/feed" component={Feed} exact />
      <Route path="/post/:id" component={Post} exact />
    </Router>
  );
}

export default App;
