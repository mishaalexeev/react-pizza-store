// отображает App.js

import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';

import { BrowserRouter as Router} from 'react-router-dom';
//import Header from './сomponents/Header';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

