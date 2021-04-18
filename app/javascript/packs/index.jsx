import React from "react";
import ReactDOM from "react-dom";
import configureStore from "../store/store";
import Root from "../components/Root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    let user = Object.values(window.currentUser)[0];
    const preloadedState = {
      session: {
        id: user.id,
        email: user.email,
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
});
