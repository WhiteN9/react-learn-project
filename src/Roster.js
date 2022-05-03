import React from "react";
function ListItem(props) {
  return <li>{props.value}</li>;
}

function Roster({ detailed, roster }) {
  let rows;
  //if detailed is false, make simple table rows
  if (!detailed) {
    rows = roster.map(({ firstName }, index) => (
      <ListItem key={index} value={firstName} />
    ));
    return <ol>{rows}</ol>;
  } else {
    rows = roster.map(({ id, firstName, lastName, location }, index) => (
      <tr key={index}>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{location}</td>
      </tr>
    ));
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default Roster;
