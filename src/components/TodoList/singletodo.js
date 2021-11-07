import React,{useState,useEffect} from "react";
import { ADD_Single_TODO, selectdata,Single } from "../../redux/appSlice";
import { useSelector,useDispatch } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import AddIcon from '@material-ui/icons/Add';
import cuid from "cuid";
import Singletodoitems from "../TodoItem/singletodoitems";
import { Button, Input } from "@material-ui/core";

let Singletodo = (props) => {
  let alldata = useSelector(selectdata);
  let singles = useSelector(Single);
  const [tasks, setTasks] = useState("");
  const [singletasks, setsingleTasks] = useState([]);
// console.log('singletask outside',singletasks)
// console.log('all data outside',alldata)
useEffect(()=>{
    console.log('singletask inside',singletasks)
      setsingleTasks(alldata)
  },[singletasks,alldata])
  
  // console.log('task console',tasks)
  // let singleto = useSelector(ADD_Single_TODO);
  let  dispatch = useDispatch()
  let singletodo = props.location.state;
  function handleFormSubmit(e) {
    e.preventDefault();
    
    e.target.userInput.value = "";
    // console.log(tasks);
  }
  if (!singletodo) {
    const id = props.match.params.id;
    singletodo = alldata.find((items) => items.id == id);
  }
  let single = ()=>{
    dispatch(ADD_Single_TODO({ task: tasks, id: props.match.params.id, newid:cuid() }))
    setTasks('')
  }
  // console.log("singletodo", props, "single items", singletodo);
  return <div>
    {/* {console.log("singletodo", singletodo)}  */}
  <form onSubmit={handleFormSubmit}>
  <Input name="userInput" value={tasks} onChange={e=> setTasks(e.target.value)} /> 
  <Button variant="contained" style={{padding:"1px", margin: "10px"}} color="primary"  size="small"  startIcon={<AddIcon />}  onClick={single}>Add single todo</Button>
  </form>
  
  {alldata.map((todo,i)=>{
    return(
    todo.id===props.match.params.id ?

    (

      <div> 
      {/* {todo.task}  */}
     <h3> Main task: {todo.task} </h3> 
      </div>
      
    ):('')
    
    )
  })}


  {/* <p>{singletodo.task}</p>   */}
  {/* <button>Edit</button>
  <button>delet</button> */}

  {singles.map((todo,i)=>{
    return(
    todo.id===props.match.params.id ?

    (

      <div key={i}> 
      {/* {todo.task}  */}
      <Singletodoitems  task={todo} key={todo.newid}/>
      </div>
      
    ):('')
    
    )
  })}
  {/* {alldata.map((todo,i)=>{
    return(
    todo.id===props.match.params.id ?

    (

      <div key={i}> {todo.task} </div>
      
    ):('')
    
    )
  })} */}

 
  {/* {singletodo.id === props.match.params.id ? singletodo.singletodo.map((todo) => {
    return (<div key={todo.newid}>
      {<Singletodoitems task={todo} key={todo.newid}/>} */}
      {/* {todo.task} */}
      {/* </div>) */}
  {/* // }) : null} */}

  {/* {console.log('single todo>>>>',singletodo)} */}
  {/* <TodoItem task={singletodo} key={singletodo.id}/> */}
  </div>;
};

export default Singletodo;
