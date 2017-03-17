import React, { Component } from "react";

class PersonTable extends Component {
  
  render() {
    const rows = this.props.factory.persons.map((person)=>(
      <tr key={person._id}><td>{person.age}</td><td>{person.name}</td>
          <td>{person.gender}</td><td>{person.email}</td>
      <td>{person.friends.length}</td></tr>)
      );
    return (
      <table className="table">
        <thead>
          <tr><th>Age</th><th>name</th><th>Gender</th><th>Email</th><th>Friends</th></tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default PersonTable;