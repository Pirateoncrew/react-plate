import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { Helmet } from "react-helmet";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import store from "./src/store/index";
import Routes from "./src/routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("build/public"));

app.get("/*", (req, res) => {
  const context = {};
  const content = ReactDomServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic();
  const html = `
    <html>
        <head>
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
        <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div id="root">
            ${content}
            </div>
            <script src="app.bundle.js"></script>
        </body>
    </html>`;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
