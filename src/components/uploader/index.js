import React, { Component } from 'react';
import './style.css';
import axios from 'axios';

class fileUpload extends Component {
  constructor() {
    super();
    this.state = {
      file: null
    };
    this.submitFile = this.submitFile.bind(this);
  }

  onChangeOfFile = e => {
    const csvFile = e.target.files;
    this.setState((prevState, props) => {
      return {
        ...prevState,
        file: csvFile[0]
      };
    });
  };

  submitFile(e) {
    // console.log('submit clicked');

    console.log('file ==> ', this.state.file);
    const csvFile = this.state.file;

    if (!csvFile) {
      return alert('no file choose');
    }
    // convert the binary file into form data
    const formData = new FormData();
    formData.append('contacts', csvFile);

    axios({
      method: 'POST',
      url: 'http://localhost:4000/api/contacts',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="upload-btn-wrapper">
        <input
          type="file"
          style={{
            float: 'right',
            paddingRight: '50em',
            margin: '1em',
            color: '#3470d1'
          }}
          accept=".csv"
          onChange={this.onChangeOfFile}
        />
        <button onClick={this.submitFile}> Upload </button>
      </div>
    );
  }
}

export default fileUpload;
