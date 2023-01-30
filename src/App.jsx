import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = (prop) => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComp = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);

    const newTodos2 = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newTodos2);
  };

  const onClickBack = (index) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);

    const newTodos2 = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodos2);
  };

  return (
    <>
      <h1>Todoリスト</h1>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTodoは5個までです。消化してください。
        </p>
      )}

      <IncompleteTodos
        todo={incompleteTodos}
        onClickComp={onClickComp}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todo={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
