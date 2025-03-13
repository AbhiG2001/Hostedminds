import React, { useState } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
const App = () => {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") 
      setListTodo([...listTodo, inputText]);
  };

  const deleteLisItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteLisItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
