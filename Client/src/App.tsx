import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import { Typography } from '@material-ui/core';

const App = () => {
  return (
    <div className="App">
      <header>
        <Typography variant="h2"> Nutriton Database Access</Typography>
      </header>
      <br />
      <body>
        <Index></Index>
      </body>
    </div>
  );
}

export default App;
