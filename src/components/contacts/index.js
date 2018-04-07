import React, { Component } from 'react';
import './style.css';

class ContactList extends Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(data, index) {
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{data.name}</td>
        <td>{data.mobile}</td>
        <td>
          <button>send</button>
        </td>
        <td>
          <button>history</button>
        </td>
      </tr>
    );
  }
  render() {
    const { contacts } = this.props;
    return (
      <div style={{ float: 'left', marginBottom: '70px' }}>
        <table id="contacts">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>OTP</th>
              <th>History</th>
            </tr>
          </thead>

          <tbody>{contacts.map(this.renderRow)}</tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
