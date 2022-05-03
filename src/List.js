import React from "react";

const todos = [
  "Finish the Lists & Tables checkpoint",
  "Clean my desk",
  "Make lunch",
];

const todos2 = [
  { completed: false, description: "Finish the Lists & Tables checkpoint" },
  { completed: false, description: "Clean my desk" },
  { completed: false, description: "Make lunch" },
];

function ListItem(props) {
  return <li>{props.value}</li>;
}
function MakeList() {
  const listItems = todos.map((todo, index) => (
    <ListItem key={index} value={todo} />
  ));
  return <ul>{listItems}</ul>;
}

// https://reactjs.org/docs/lists-and-keys.html
// It's recommended to use stable IDs for rendered items instead of item index.
// Keys only make sense in the context of the surrounding array?
// You should keep the key on the <ListItem /> elements in the array rather than on the <li> elements in the ListItem itself

// https://reactjs.org/docs/reconciliation.html#recursing-on-children
// https://dev.to/titungdup/you-no-longer-need-to-import-react-from-react-3pbj

function MakeToDoTable() {
  const rows = todos2.map(({ completed, description }, index) => (
    <tr key={index}>
      <td> {completed} </td>
      <td> {description} </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Completed</th>
          <th>Item</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export { MakeList };
export { MakeToDoTable };
