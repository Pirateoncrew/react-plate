import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { renderRoutes } from "react-router-config";
import Routes from "./src/routes";

const fs = require( 'fs' );
const path = require( 'path' );

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("dist"));

app.get(["/*/:param", "*"], async (req, res) => {
  const content = ReactDomServer.renderToString(
  <StaticRouter>
       {renderRoutes(Routes)}
      </StaticRouter>
  );
      let indexHTML = fs.readFileSync( path.resolve( __dirname, './bundle/index.html' ), {
        encoding: 'utf8',
    } );
    indexHTML = indexHTML.replace( '<div id="root"></div>', `<div id="root">${ content }</div>` );
    res.send(indexHTML);
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
