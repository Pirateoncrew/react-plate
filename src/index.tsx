import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { renderRoutes } from 'react-router-config';
import Routes from './routes';

ReactDOM.hydrate(
  <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
