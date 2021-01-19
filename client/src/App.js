import './App.css';
import axios from 'axios';


const hitServer = () => {
  axios.get('/test')
  .then((res) => {
    console.log(res.data);
  });
}

function App() {
  return (
    <div className="App">
      <button onClick={hitServer}>Send Request</button>
    </div>
  );
}

export default App;
