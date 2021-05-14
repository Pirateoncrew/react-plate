import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/homePageComponent";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          render={(props) => (
            // <Home props={...props}/>
            <Home />
          )}
        />
      </Switch>
    );
  }
}

export default App;
