import React, { Component } from 'react';
import axios from 'axios';

class fileUpload extends Component {
  constructor() {
    super();
    this.submitFile = this.submitFile.bind(this);
  }
  submitFile(e) {
    const files = e.target.files;

    const baseUrl = 'http://localhost:4000/api';
    axios
      .post(`${baseUrl}/contacts`, files)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <input
          type="file"
          style={{ float: 'right', paddingRight: '20em', color: '#3470d1' }}
          name="upload"
          onChange={this.submitFile}
        />
      </div>
    );
  }
}

export default fileUpload;
