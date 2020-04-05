import React, { Component } from "react";
import { connect } from 'react-redux';
import { loadPlaylists } from './redux/actions/thunk';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from "axios";
import "./App.css";

//Components
import UserInfo from './components/UserInfo';
import Playlists from './components/Playlists/Playlists';
import LoginPage from "./components/LoginPage";


class App extends Component {
  constructor(props) {
    super(props);
    // this.state = { 
    //   loggedIn : false,
    // };
    // this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(){
    // this.setState({ 
    //   loggedIn: true,
    //   userInfo: userInfo
    //  });
     //Load user playlists
     this.props.loadPlaylists();
  }

  componentDidMount() {}

  render() {
    return (
      <Router>
         <div className="App">
          <header>
            <h1>Democrify.me</h1>
          </header>
          <main>
            <Switch>
              <Route path="/login">
                <LoginPage/>
              </Route>
              <Route path="/me">
                <UserInfo/>
              </Route>
              <Route path="/playlists">
                {/* { <UserInfo userInfo = {this.state.userInfo}></UserInfo>,
                <Playlists userId = {this.state.userInfo.id}/> } */}
                <p>Playlists</p>
              </Route>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              <Route path="/callback">
                <Callback/>
              </Route>
              <Route path="*">
                <p>404 Not Found!!</p>
              </Route>
              {/* {this.state.loggedIn
                ? 
                [ 
                <UserInfo key={0} userInfo = {this.state.userInfo}></UserInfo>,
                <Playlists key={1} userId = {this.state.userInfo.id}/>
                ]
                : <Login userInfo = {this.state.userInfo} handleLogin = {this.handleLogin}></Login>
              }    */}
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {state};
}

const mapDispatchToProps = {
  loadPlaylists
}

// Applies the config using the "connect" higher-order component provided by Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
// -------------------------------------------------------------


// class Callback extends Component {
  
//   componentWillUnmount() {
//     //Retrieve auth code from URL
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get('code');
//     console.log("AHHH" + code);
//     if (code) {
//         console.log(code);
//     }
//     window.location.href = ""
//   }

//   render() {
//     return <Redirect to='/playlists'/>
//   }
// }

const Callback = () => {
  //Retrieve auth code from URL
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  if (code){
    //If code exists, tell server to go grab access tokens
    console.log(code);
    axios({
      method: "post",
      url: "/api/login",
      timeout: 8000,
      data: {
          code: code
      }
    })
    return <Redirect to='/me'/>
  }
 return <Redirect to='/login'/>
 }