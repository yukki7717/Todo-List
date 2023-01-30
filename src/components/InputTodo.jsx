import React from "react";

const style = {
  backgroundColor: "aqua",
  width: "400px",
  padding: "8px",
  margin: "none",
  marginBottom: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style} class="div1">
      <input
        type="text"
        class="text"
        placeholder="何か入力してください"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button disabled={disabled} class="btn1" onClick={onClick}>
        決定
      </button>
    </div>
  );
};
