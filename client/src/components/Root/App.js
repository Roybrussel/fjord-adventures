import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Index from "../Index/Index";
import Agentportal from "../Agentportal/Agentportal";
import Activities from "../Agentportal/Activities/Activities";
import Addagent from "../Agentportal/Addagent/Addagent";
// import Protectedroute from "../Protectedroute/Protectedroute";
// import AuthService from "../../services/auth-service";

// const service = new AuthService();

class App extends Component {
  // state = {
  //   loggedInUser: {},
  // };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/agentportal" component={Agentportal} />
          <Route path="/activities" component={Activities} />
          <Route path="/activities/:id" />
          <Route path="/add-agent" component={Addagent} />
          <Index />
        </Switch>
      </div>
    );
  }
}

export default App;
