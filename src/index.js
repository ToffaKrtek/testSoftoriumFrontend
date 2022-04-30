
import App from "./App";

import React from 'react';
import ReactDOM from 'react-dom';
require("babel-core/register");
require("babel-polyfill");
const reacter = document.getElementById('reacter') ? document.getElementById('reacter') : null;
console.log(reacter.dataset)

ReactDOM.render(
  <App  user={reacter.dataset.user} />,

  document.getElementById('root')
);
