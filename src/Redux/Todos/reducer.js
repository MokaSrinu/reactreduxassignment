import {To_Do_Data_Failure,To_Do_Data_Loading,To_Do_Data_Success,Toggle_todo,Delete_todo} from "./action";

export const TodoReducer=(store={todos:[],isLoading:false,isError:false},{type,payload})=>{
    switch(type){
        case To_Do_Data_Loading:
            return{
                ...store,
                isLoading:true,
                isError:false,
                todos:[]
            };
        case  To_Do_Data_Success:
            return{
                ...store,
                isLoading:false,
                isError:false,
                todos:[...payload]
            };
        case  To_Do_Data_Failure:
            return{
                ...store,
                isLoading:false,
                isError:true,
                todos:[]
            }; 
        case   Toggle_todo:
            return{
                ...store,todos:store.todos.map((todo)=>
                 todo.id===payload ? {...todo,status:!todo.status}:todo
                )
            };  
        case   Delete_todo:
            return {
                ...store,
                todos:store.todos.filter((todo)=>
                 todo.id!==payload
                )
            }; 
        default:
            return store;         
    }
}