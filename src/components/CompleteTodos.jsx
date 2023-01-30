import React from "react";

const style = {
  backgroundColor: "yellow",
  width: "400px",
  padding: "8px 20px",
  marginBottom: "8px",
  borderRadius: "8px",
  minHeight: "200px"
};

export const CompleteTodos = (props) => {
  const { todo, onClickBack } = props;
  return (
    <div style={style} class="div3">
      <div class="div4">完了したTodo</div>
      {todo.map((todo, index) => {
        return (
          <ul key={todo}>
            <li class="li">{todo}</li>
            <button onClick={() => onClickBack(index)}>戻す</button>
          </ul>
        );
      })}
    </div>
  );
};
