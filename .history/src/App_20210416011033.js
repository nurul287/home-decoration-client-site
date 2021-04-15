import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";
import Home from "./components/HomePage/Home/Home";
import PrivateRoute from "./components/LoginPage/PrivateRoute/PrivateRoute";
import SignUp from "./components/LoginPage/SignUp/SignUp";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/dashBoard">
            <DashBoard />
          </PrivateRoute>
          <Route path="/login">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
