import React from 'react'
import Demo from './compoents/Demo'
import Dialog from './compoents/Dialog'

function App() {
  return (
    <div className="App">
      <Demo username="joey">
        <p>I am Joey</p>
      </Demo>
      <Dialog title="warning" content="please enter username" />
    </div>
  );
}

export default App;
