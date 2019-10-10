import React from 'react';
import BaseApp from './BaseApp'
import { HashRouter, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Hello React router</h1>
      <BrowserRouter>
        <BaseApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
