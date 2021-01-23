import { Component } from 'react';
import { postServerData } from '../services/serverCrud';

export default class AddBookForm extends Component {
  constructor() {
    super();

    this.state = {
      bookName: ''
    }
  }

  inputChange = (event) => {
    this.setState({
      bookName: event.target.value
    })
  }

  addNewBook = (event) => {
    event.preventDefault();
    postServerData(this.state.bookName);
  }

  render() {
    return(
      <div>
        <form>
          <label htmlFor="name">Book Name</label>
          <input type="text" onChange={this.inputChange} id="name" />
          <button type="button" onClick={this.addNewBook}>Add Book</button>
        </form>
      </div>
    );
  }
}
