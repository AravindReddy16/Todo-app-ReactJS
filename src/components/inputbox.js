import React, { useState } from "react";
import Item from "./item";

export default function InputBox() {
  let [item, setItem] = useState("");
  let [todo, setTodo] = useState([]);

  function handleInput(e) {
    setItem(e.target.value);
  }

  function addItem() {
    if (item !== "") {
      setTodo([...todo, `${item[0].toUpperCase()}${item.slice(1)}`]);
      setItem("");
    }
  }

  function deleteItem(index) {
    let newTodo = todo.filter((item, ind) => ind !== index);
    setTodo(newTodo);
  }

  function editItem(items, index) {
    setItem(items);
    deleteItem(index);
  }

  return (
    <div className="box">
      <div className="inputbox">
        <input
          type="text"
          onChange={handleInput}
          value={item}
          placeholder="Todo Here..."
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div className="textbox">
        {todo.map((items, index) => (
          <Item
            items={items}
            index={index}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))}
      </div>
    </div>
  );
}
