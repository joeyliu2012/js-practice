import React from 'react'
import Demo from './compoents/Demo'
import Dialog from './compoents/Dialog'
import LifecycleDemo from './compoents/LifecycleDemo'
import Mail from './compoents/Mail'

function App() {
  return (
    <div className="App">
      <Demo username="joey">
        <p>I am Joey</p>
      </Demo>
      {/* <Dialog title="warning" content="please enter username" /> */}
      {/* <Dialog title="log in">
        <form>
          <p>username: <input type='text' /></p>
        </form>
      </Dialog>  */}

      {/* <LifecycleDemo /> */}
      <Mail />
    </div>
  );
}

export default App;
