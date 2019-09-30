import React from 'react'; 
// import FriendList from './components/FriendList1';
import FriendList from './components/FriendList2';
import friend1 from './data/friends1'
import friend2 from './data/friends2'


function App() {
  return (
    <div className='App'>
      <h1>React</h1>
      <hr />
      <FriendList data={friend1} />
      <hr />
      <FriendList data={friend2} />
    </div>
  );
}

export default App;
