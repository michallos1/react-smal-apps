import "../App.css"
import React from 'react'

export default function ToDoList() {
  const [todos, setTodos] = React.useState( [
    {id:1 , text: "opcja 1", done: false},
    {id:2 , text: "opcja 2", done: false},
    {id:3 , text: "opcja 3", done: false}
  ])
    return (
        <div className = "ToDoList" >
          <h1 > To do list < /h1>
          <ListItem todos={todos}/>
          <AddToList setTodos={setTodos}/>
       </div>
    );
}

function ListItem(item) {
  return (
    <ul>
      {item.todos.map(todos => (
        <li key={todos.id}>{todos.text}</li>
      ))}
    </ul>
  );
}

function AddToList({setTodos}) {
  const inputRef = React.useRef();

    function handleAddToList(event) {
      event.preventDefault();
      console.log(event.target.elements)
      const text = event.target.elements.addToList.value;
      const todo = {
        id: 4,
        text,
        done: false
      };
      setTodos((prevTodos) => {
        return prevTodos.concat(todo);
      });
    }

  return (
    <form onSubmit={handleAddToList}>
      <input name="addToList" placeholder="Add to the list" ref={inputRef}/>
      <button type="submit">Submit</button>
    </form>
  );
}
