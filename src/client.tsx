import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import store from "./store";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
// const store = createStore(rootReducer);

if (typeof window !== "undefined") {
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
    </Provider>,
    document.querySelector("#root")
  );
}
