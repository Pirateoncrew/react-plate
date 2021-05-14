import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { Helmet } from "react-helmet";
import App from "./src/app";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const context = {};
  const content = ReactDomServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
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
  console.log(`App running ${PORT}`);
});
