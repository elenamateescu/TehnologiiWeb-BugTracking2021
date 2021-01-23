import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { getCurrentUserData } from "./redux/reducer";

function saveToLocalStorage(state) {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
}

function loadFromLocalStorage() {
  const serializedState = localStorage.getItem("state");
  if (serializedState === null) return undefined;
  return JSON.parse(serializedState);
}

const persistedState = loadFromLocalStorage();

const store = createStore(
  getCurrentUserData,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
