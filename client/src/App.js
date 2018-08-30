import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

// Components
import Navbar from "./components/layout/Navbar";
import Landing from "./components/landing/Landing";

import "./App.css";
import CreateAthlete from "./components/createAthlete/CreateAthlete";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/createAthlete" component={CreateAthlete} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
