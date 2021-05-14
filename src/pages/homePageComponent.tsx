import React from "react";
import { Helmet } from "react-helmet";
class Home extends React.Component {
  head() {
    return (
      <Helmet>
        <title>My Page title</title>
      </Helmet>
    );
  }
  render() {
    return (
      <div>
        {this.head()}
        <p>Hello123</p>
      </div>
    );
  }
}

export default Home;
