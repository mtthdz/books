import './App.css';
import { useState } from 'react';
import axios from 'axios';

// axios method
// const getServerData = () => {
//   axios.get('/api/books')
//   .then((res) => {
//     console.log(res.data);
//     // 2. store data into state via hooks
//   });
// }

// pull data from server via fetch
async function getServerData() {
  const response = await fetch('/api/books');
  return await response.json();
}

// event handler
// calls server data pull fn
// "stores" server data
const storeData = () => {
  getServerData()
  .then(data => console.log(data));
}


function App() {
  return (
    <div className="App">
      <button onClick={storeData}>Send Request</button>
      {/* 3. display state here */}
    </div>
  );
}

export default App;
