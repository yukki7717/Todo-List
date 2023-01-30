import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

const li = document.createElement("li");
const text = document.querySelector(".text");
const div2 = document.querySelector(".div2");

const onClickbtn = () => {
  if (!text.value.length <= 0) {
    console.log(text.value);
    li.innerText = text.value;
    div2.appendChild(li);
  }
};

export default onClickbtn;

ReactDOM.render(<App />, document.querySelector("#root"));
