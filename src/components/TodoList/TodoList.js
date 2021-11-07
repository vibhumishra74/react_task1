import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { selectdata } from "../../redux/appSlice";
import { Link } from "react-router-dom";

const TodoList = () => {
  const totaltask = useSelector(selectdata);

  const taskItems = totaltask.map((task) => {
    // <Link
    //   key={task.id}
    //   to={{
    //     pathname: "/Singletodo/" + task.id,
    //     state: task,
    //   }}
    // ></Link>;
    return <TodoItem task={task} key={task.id} />;
  });

  return <div>{taskItems}</div>;
};

export default TodoList;
