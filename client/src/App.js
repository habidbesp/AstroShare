import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PictureOfTheDay from "./components/PictureOfTheDay";
import PicturesLastYear from "./components/PicturesLastYear";
import PictureDetails from "./components/PictureDetails";
import Profile from "./components/Profile";
import Home from "./components/Home";
import ProfileChild from "./components/ProfileChild";

class App extends Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} setUser={this.setUser} />

        <Route exact path="/" component={Home} />

        <Route exact path="/pictureOfTheDay" component={PictureOfTheDay} />

        <Route
          exact
          path="/collection"
          render={(props) => (
            <PicturesLastYear user={this.state.user} {...props} />
          )}
        />

        <Route
          exact
          path="/collection/:date"
          render={(props) => (
            <PictureDetails user={this.state.user} {...props} />
          )}
        />

        <Route
          exact
          path="/profile"
          render={(props) => (
            <Profile
              user={this.state.user}
              // setUser={this.setUser}
              {...props}
            />
          )}
        />

        <Route exact path="/profile/:id" component={ProfileChild} />

        <Route
          exact
          path="/signup"
          render={(props) => <Signup setUser={this.setUser} {...props} />}
        />

        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}

export default App;
