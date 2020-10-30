import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import '../src/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter, HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
  , document.getElementById("root"));