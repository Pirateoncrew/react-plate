import React, { Fragment } from "react";
import { Switch, Route } from "react-router";
import "./style.scss";
import { renderRoutes } from "react-router-config";

class App extends React.Component<any> {
  constructor(props) {
    super(props);
  }
  render() {
    return <Fragment>{renderRoutes(this.props.route.routes)}</Fragment>;
  }
}

export default App;
