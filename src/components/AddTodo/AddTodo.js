import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AddIcon from '@material-ui/icons/Add';
import cuid from "cuid";
import { ADD_TODO } from "../../redux/appSlice";
import { Button, Input } from "@material-ui/core";

const AddTodo = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();
  function handleInputChange(e) {
    setTasks(e.target.value);
    // console.log(tasks);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(ADD_TODO({ task: tasks, id: cuid(),singletodo:[] }));
    e.target.userInput.value = "";
    console.log(tasks);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        type="text"
        name="userInput"
        onChange={(e) => handleInputChange(e)}
      />
      <Button variant="contained" style={{padding:"1px", margin: "10px"}} color="primary"  size="small"  style={{backgroundColor:'green'}} type="submit">Save</Button>
    </form>
  );
};

export default AddTodo;
