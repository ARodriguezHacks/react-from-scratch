import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./components/SignIn";

function Welcome() {
  return (
    <>
      <h1>Hello World from React boilerplate.</h1>
      <SignIn />
    </>
  );
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
