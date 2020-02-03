import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";

function Root() {
  return (<Hello testProp="World" />);
}

ReactDOM.render(<Root />, document.getElementById("root"));
