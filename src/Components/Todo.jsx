import React, { useState, useEffect } from "react";
// import "./NewTodo.css";
export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const captureTodos = (e) => {
    e.preventDefault();
    if (text === "") alert("Please enter any query");
    setTodos([
      ...todos,
      {
        text: text,
        completed: false,
        id: Math.floor(Math.random() * 10000),
      },
    ]);
    setText("");
  };
  const OnComplete = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: true,
          };
        }
        return item;
      })
    );
  };
  const OnDelete = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: false,
          };
        }
        return item;
      })
    );
    setTodos(todos.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="input_div">
        <input
          type="text"
          id="text"
          placeholder="Enter your Query"
          autoFocus={true}
          spellCheck={true}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit" id="btn" onClick={captureTodos}>
          Submit
        </button>
      </div>

      <div className="container">
        <div className="left_div">
          <div className="todo-container">
            <ul className="todo-list">
              {todos.map((e) => {
                return (
                  <div
                    className="todo"
                    key={e.id}
                    style={{
                      display: !e.completed && e.text ? "flex" : "none",
                    }}
                  >
                    <li className="todo-item">{e.text}</li>
                    <button
                      className="complete-btn"
                      onClick={() => OnComplete(e.id)}
                    >
                      Complete
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="right_div">
          <div className="todo-container">
            <ul className="todo-list">
              {todos.map((e) => {
                return (
                  <div
                    className="todo"
                    key={e.id}
                    style={{ display: e.completed ? "flex" : "none" }}
                  >
                    <li className="todo-item">{e.text}</li>
                    <button
                      className="trash-btn"
                      onClick={() => OnDelete(e.id)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
