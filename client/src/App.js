import React, { Component } from 'react';
import './App.css';
import { getServerData, postServerData } from './services/serverCrud';


class App extends Component {
  constructor() {
    super();

    this.state = {
      books: []
    }
  }

  // event handlers
  // calls server data pull fn
  printBooks = () => {
    getServerData()
      .then(data => console.log(data));
  }

  onFormChange = () => {
    console.log('nice');
  }

  addBook = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <button onClick={printBooks}>Send Request</button>

        <form>
          <label>Book Name</label>
          <input type="text" onChange={onFormChange} />
          <button type="submit" onClick={addBook} />
        </form>
      </div>
    )
  };
}

export default App;
