import React, { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {tododesc} from "../Redux/Todos/action"

export const TodoList=()=>{
    const {todos,isLoading,isError}=useSelector((state)=>state.todos);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(tododesc("id"));
    },[dispatch]);

    
    dispatch(tododesc);
     console.log("check",todos);
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>Some Thing  Went Wrong...</h1>
    }
    if(todos.length!==0){
        return(
            <div>
                {todos.map((todo)=>(
                  <div key={todo.id} style={{display:"flex",margin:"10px"}}>
                    <p>
                        {todo.title}{"-->"}{todo.status ? "Completed":"NotCompleted"}
                    </p>
                    <button><Link to={`/Todo/${todo.id}`}>More...</Link></button>
                  </div>
                ))}
            </div>
        )
    }
    
}