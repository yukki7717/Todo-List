import React from "react";

const style = {
  backgroundColor: "aquamarine",
  width: "400px",
  padding: "8px 20px",
  marginBottom: "8px",
  borderRadius: "8px",
  minHeight: "200px"
};

export const IncompleteTodos = (props) => {
  const { todo, onClickComp, onClickDelete } = props;
  return (
    <div style={style} class="div2">
      <div class="div4">未完了のTodo</div>
      {todo.map((todo, index) => {
        return (
          <ul key={todo}>
            <li class="li">{todo}</li>
            <button onClick={() => onClickComp(index)}>完了</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </ul>
        );
      })}
    </div>
  );
};
