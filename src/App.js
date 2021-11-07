import React from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import Singletodo from "./components/TodoList/singletodo";
import { Route, Switch,Link } from "react-router-dom";

import "./App.css";
import { selectdata } from "./redux/appSlice";

function App() {
  const totaltask = useSelector(selectdata);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos List
      </Typography>
      <h1>
        <Link to={'/'}>
         Total tasks remained:
        </Link>
        <span style={{ color: "red" }}> {totaltask.length} </span>{" "}
      </h1>
      {/* <AddTodo /> */}
      {/* <TodoList /> */}

    
         
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route
            exact
            path="/Singletodo/:id"
            render={(props) => {
              return <Singletodo {...props} />;
            }}
          />
        </Switch>
        <Route exact path="/" component={AddTodo} />
    </div>
  );
}

export default App;
