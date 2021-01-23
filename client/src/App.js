import React, { Component } from 'react';
import './App.css';
import AddBookForm from './components/AddBookForm';
import { getServerData } from './services/serverCrud';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      bookName: '',
      bookList: []
    }
  }

  printBooks = () => {
    getServerData()
    .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.printBooks}>Send Request</button>
        <AddBookForm />
      </div>
    )
  };
}
