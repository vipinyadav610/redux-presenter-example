import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import Posts from "./components/posts";

render(
  <Provider store={store}>
    <Posts />
  </Provider>,
  document.getElementById("app")
);
