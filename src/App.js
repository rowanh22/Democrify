import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import * as spotify from "./SpotifyFunctions.js";

//Components
import LoginPage from "./components/LoginPage";
import Callback from "./Callback";
import NavigationBar from "./components/NavigationBar";
import PlaylistsPage from "./components/PlaylistsPage";
import TracksPage from "./components/TracksPage";
import WebPlayer from "./components/WebPlayer";
import WelcomeScreen from "./components/WelcomeScreen";
import PlayerControls from "./components/PlayerControls";
import SessionPage from "./components/SessionPage";

window.onSpotifyWebPlaybackSDKReady = () => {};

class App extends Component {
  // Things to do before unloading/closing the tab (CURRENTLY NOTHING)
  unloadCurrentlyPlaying = () => {
    console.log("goodbye");
  };

  //Set up listener to run code when window unmounts
  setupBeforeUnloadListener = () => {
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      return this.unloadCurrentlyPlaying();
    });
  };

  componentDidMount() {
    // Activate the event listener
    this.setupBeforeUnloadListener();
  }

  render() {
    //When app is refreshed, reload access token from persist (will update)
    spotify.setAccessToken(this.props.accessToken);

    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <header>
            <img
              className="App-logo"
              src={require("./assets/logo.svg")}
              alt="logo"
            />
            <h2 className="slogan">Music for the people</h2>
            {this.props.loggedIn && <WebPlayer />}{" "}
            {/* At the moment the whole app gets a web player, but in the future only load if they are hosting */}
          </header>
          <main>
            <div style={{ marginBottom: 110 }}>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/login" />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/callback">
                  <Callback />
                </Route>
                <Route path="/me">
                  <WelcomeScreen />
                </Route>
                <Route path="/playlists">
                  <PlaylistsPage />
                </Route>
                <Route path="/playlist">
                  <TracksPage />
                </Route>
                <Route path="/session">
                  <SessionPage />
                </Route>
                <Route path="*">
                  <p>404 Not Found!!</p>
                </Route>
              </Switch>
              <PlayerControls />
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

// State is entire state tree
function mapStateToProps(state) {
  return {
    accessToken: state.user.accessToken,
    loggedIn: state.user.loggedIn,
  };
}
// Connect to redux store
export default connect(mapStateToProps)(App);
