import React, { Component } from 'react';
import Uploader from './components/uploader';
import Contacts from './components/contacts';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:4000/api/contacts')
      .then(response => {
        console.log('------', response.data.data);
        this.setState({
          contacts: response.data.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    console.log('contactsss283e', this.state.contacts);
    return (
      <div className="App">
        <header className="App-header">
          <h1
            style={{
              textAlign: 'center',
              color: '#3470d1',
              fontSize: '3em'
            }}
          >
            Your Contacts
          </h1>
        </header>
        <Uploader />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
