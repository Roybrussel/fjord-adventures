import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Index from "../Index/Index";
import Agentportal from "../Agentportal/Agentportal";
import Activities from "../Agentportal/Activities/Activities";
import Addagent from "../Agentportal/Addagent/Addagent";
import Protectedroute from "../Protectedroute/Protectedroute";

class App extends Component {
  state = {
    loggedInUser: null,
  };

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj,
    });
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/activities" component={Activities} />
          <Route path="/activities/:id" />
          <Protectedroute exact path="/agentportal" component={Agentportal} />
          <Protectedroute path="/add-agent" component={Addagent} />
          <Index />
        </Switch>
      </div>
    );
  }
}

export default App;
