import React, { Component } from "react";
import { Route, Switch } from "react-router";
import apartmentDetails from "./components/apartment-details/apartment-details";
import Aapartments from "./components/apartments/apartments";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Aapartments} exact />
          <Route path="/all/:apartmentId" component={apartmentDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
