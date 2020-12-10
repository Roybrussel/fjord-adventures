import React, { Component } from "react";
import "./App.css";
import Index from "../Index/Index";
import Agentportal from "../Agentportal/Agentportal";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/agentportal" component={Agentportal} />
          <Index />
        </Switch>
      </div>
    );
  }
}

export default App;
