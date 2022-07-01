import React from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggletodo,deletetodo } from "../Redux/Todos/action";
export const Tododetails=()=>{
  const todoid=useParams();
  const dispatch=useDispatch();
  const todos=useSelector((state)=>state.todos.todos);
  console.log("detailschcking",todos,todoid);
  
   return(
    <div>
      {
        todos.map((todo)=>(
          <div key={todo.id}>
            {todo.id==todoid.id? <div><p>{todo.title}{"-->"}{todo.status?"completd":"Notcompleted"}</p>
            <button onClick={()=>dispatch(toggletodo(todo.id))}>Toggle</button>
            <button onClick={()=>dispatch(deletetodo(todo.id))}>Delete</button>
            </div> : <p>{}</p> }
          </div>
        ))

        // todos.map((todo)=>{
        //   console.log(todo.id==todoid.id,todo.id,todoid.id)
        // })
      }
    </div>
   )
  

    
}
 
