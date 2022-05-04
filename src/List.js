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

//Basic List Component
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }
// const numbers = [1, 2, 3, 4, 5];

//Embedding map() in JSX
//INLINE 2 FUNCTIONS RETURN, BETTER BECAUSE INDEX KEYS ARE IN LISTITEM ELEMENTS INSTEAD OF LI ELEMENTS
// function NumberList(props) {
//   const numbers = props.numbers;
//   return (
//     <ul>
//       {numbers.map((number) =>
//         <ListItem key={number.toString()}
//                   value={number} />
//       )}
//     </ul>
//   );
// }

//Embedding map() in JSX
//IN-LINE 1 FUNCTION RETURN, NOT GOOD BECAUSE INDEX KEYS IS INSIDE LI ELEMENTS
// function HobbyList({hobbies}) {
//   if (hobbies.length ===0) return null;
//   return (
//     <div className="hobbies">
//       <h4>Hobbies</h4>
//       <ul>
//         {hobbies.map((hobby,index) => <li key={index}>{hobby}</li>
//         )}
//       </ul>
//     </div>

//   )
//   // You must use this heading for this component
// }

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
