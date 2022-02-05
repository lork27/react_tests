import { useState } from "react";
import { TodoItem } from "./TodoItem";

/*
when working with a list on react.js you will use these 3 methods 
...(spread operator) or concat to ADD
filter() to DELETE
map() to MODIFY
*/

/*
useState() => ¡¡¡¡¡very important!!!!! This is 90% of react to do its DOM manipulation shenanigans
useState returns a list of two, "default state" and a function to update/overwrite said state
*/

/*
HTML NOOB EPYPHANI!!!!!!
think in UI not in logic when I want to know when or where I want to modify shit in my code
*/

export function TodoList() {
  const [todos, setTodos] = useState([
    { text: "initialState", done: false, id: 1 },
  ]);

  const [text, setText] = useState("type todo here");
  //   setTodos([{ text: "ojo", done: false }]);
  const deleteHandler = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <>
      <ul>
        {todos.map((element) => {
          return (
            <TodoItem
              text={element.text}
              completed={element.done}
              del={() => deleteHandler(element.id)}
            />
          );
        })}
        {/* <TodoItem text="lmao" />
      <TodoItem text="puto" />
      <TodoItem text="xD" /> */}
      </ul>
      <button
        onClick={function () {
          setTodos(
            todos.concat({ text: text, done: false, id: todos.length + 1 })
          );
          setText("add anotha one");
        }}
      >
        add todo
      </button>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
        type="text"
        value={text}
      />
    </>
  );
}
