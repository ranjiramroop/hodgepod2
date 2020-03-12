// React
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Utils
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
//import Layout from "./components/dashboard/Layout";
import NotFound from "./components/404/404";
import Podcast from "./components/PCAPITEST";
import OMDBComponent from "./components/OMDB/OMDBTEST";
import PODCAST from "./components/PODCAST";
import HeaderMain from "./components/HeaderMain";
import SearchContainer from "./components/SearchContainer";
import TopNav from "./components/TopNav";
import "./components/main.css";

// Style
import "./App.scss";

// Check for token to keep user logged in
const loggedIn = () => {
  console.log("check logged in");
  // Set auth token header auth
  const token = JSON.parse(localStorage.jwtTokenTeams);
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    return true;
  }
  return false;
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <TopNav />
            <HeaderMain />

            <Switch>
              <Route exact path="/" component={SearchContainer} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/podcast" component={PODCAST} />
              <PrivateRoute exact path="/omdb" component={OMDBComponent} />
              <Route
                component={localStorage.jwtTokenTeams ? Podcast : NotFound}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
