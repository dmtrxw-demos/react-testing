import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./containers/Home";
import TodoList from "./containers/TodoList";

const App = () => {
  return (
    <>
      <h1>Todo App</h1>
      <ul>
        <li>
          <Link data-testid="link-to-home" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link data-testid="link-to-todos" to="/todos">
            Todos
          </Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todos" component={TodoList} />
      </Switch>
    </>
  );
};

export default App;
