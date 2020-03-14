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
import Slider from "./components/MovieSlider";

// Style
import "./App.scss";
const movies = [
  {
    id: 1,
    image: '/images/slide7.jpg',
    imageBg: '/images/slide1b.webp',
    title: 'parasite'
  },
  {
    id: 2,
    image: '/images/slide8.jpg',
    imageBg: '/images/slide2b.webp',
    title: 'Uncut Gems'
  },
  {
    id: 3,
    image: '/images/slide9.jpg',
    imageBg: '/images/slide3b.webp',
    title: 'Queen & Slim',
  },
  {
    id: 4,
    image: '/images/slide10.jpg',
    imageBg: '/images/slide4b.webp',
    title: 'Sex education'
  },
  {
    id: 5,
    image: '/images/slide11.jpg',
    imageBg: '/images/slide5b.webp',
    title: 'Elite'
  },
  {
    id: 6,
    image: '/images/slide12.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror'
  },
  {
    id: 7,
    image: '/images/slide13.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror'
  },
  {
    id: 8,
    image: '/images/slide14.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror'
  },
  {
    id: 9,
    image: '/images/slide15.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror'
  },
  {
    id: 10,
    image: '/images/slide16.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror'
  },
  {
    id: 11,
    image: '/images/slide17.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror'
  },
  {
    id: 12,
    image: '/images/slide18.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror'
  }
];

const ranji = [
  {
    id: 1,
    image: '/images/slide19.jpg',
    imageBg: '/images/slide1b.webp',
    title: 'parasite'
  },
  {
    id: 2,
    image: '/images/slide20.jpg',
    imageBg: '/images/slide2b.webp',
    title: 'Uncut Gems'
  },
  {
    id: 3,
    image: '/images/slide21.jpg',
    imageBg: '/images/slide2b.webp',
    title: 'Uncut Gems'
  },
  {
    id: 4,
    image: '/images/slide22.jpg',
    imageBg: '/images/slide2b.webp',
    title: 'Uncut Gems'
  },
  {
    id: 5,
    image: '/images/slide23.jpg',
    imageBg: '/images/slide2b.webp',
    title: 'Uncut Gems'
  },
]
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
              <PrivateRoute exact path="/podcast" component={SearchContainer} />
              <PrivateRoute exact path="/omdb" component={OMDBComponent} />
              <Route
                component={localStorage.jwtTokenTeams ? Podcast : NotFound}
              />
            </Switch>
          </div>
          <p className= "sliderText">top movies to stream</p>
          <Slider>
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
        <p className= "sliderText"> Ranji's List</p>
        <Slider>
          {ranji.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
          <div>
          
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
