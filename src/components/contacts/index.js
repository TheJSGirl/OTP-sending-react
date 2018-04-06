import React, { Component } from 'react';
// import axios from 'axios';

class ContactList extends Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(data, index) {
    return (
      <tr>
        <hr />
        <td>{index}</td>
        <td>{data.name}</td>
        <td>{data.mobile}</td>
      </tr>
    );
  }
  render() {
    console.log('propssss', this.props);
    const { contacts } = this.props;
    console.log('contacts-----', contacts);
    return (
      <div style={{ padding: '5em', float: 'left' }}>
        <table>
          <thead>
            <tr>
              <th style={{ color: 'blue' }}>
                <span>Id</span>
              </th>
              <th style={{ color: 'blue' }}>
                <span>Name</span>
              </th>
              <th style={{ color: 'blue' }}>
                <span>Mobile</span>
              </th>
            </tr>
          </thead>

          <tbody>{contacts.map(this.renderRow)}</tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
