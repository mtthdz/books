import React, { Component } from 'react';
import './App.css';
import { getServerData, postServerData } from './services/serverCrud';


class App extends Component {
  constructor() {
    super();

    this.state = {
      bookName: '',
      bookList: []
    }
  }

  // event handlers
  // calls server data pull fn
  printBooks = () => {
    getServerData()
    .then(data => console.log(data));
  }

  onFormChange = (event) => {
    this.setState({
      bookName: event.target.value,
    })
  }

  addBook = (event) => {
    event.preventDefault();
    postServerData(this.state.bookName);
    this.setState({
      bookName: ''
    });
    
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.printBooks}>Send Request</button>

        <form>
          <label>Book Name</label>
          <input type="text" onChange={this.onFormChange} />
          <button type="submit" onClick={this.addBook} />
        </form>
      </div>
    )
  };
}

export default App;
