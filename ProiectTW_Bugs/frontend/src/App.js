import "./App.css";
import "./style/style.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";

import RegisterPage from "./comp/RegisterPage";
import AddUser from "./comp/AddUser";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/"exact strict  component={RegisterPage} />
        <Route exact path="/AddUser" exact strict component={AddUser} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
