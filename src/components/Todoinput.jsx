import React from "react";
import {useDispatch} from "react-redux";
import {tododesc} from "../Redux/Todos/action"

export const TodoInput=()=>{
    const [inputvalue,setInputvalue]=React.useState(" ");
    const dispatch=useDispatch();
    const handleAdd=()=>{
        const payload={
            title:inputvalue,
            status:false
        };
        fetch(`http://localhost:8080/todos`,{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json)
        .then((res=>{
             dispatch(tododesc("id"));
        })).catch((err)=>console.log(err))
    }
    return(
        <div>
            <input type="text" placeholder="Add To do" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)} />
            <button onClick={handleAdd}>ADD TO DO</button>
        </div>
    )
}