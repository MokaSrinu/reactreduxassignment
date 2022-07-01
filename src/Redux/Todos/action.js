export const To_Do_Data_Loading="To_Do_Data_Loading";
export const To_Do_Data_Success="To_Do_Data_Success";
export const To_Do_Data_Failure="To_Do_Data_Failure";
export const Toggle_todo="Toggle_todo";
export const Delete_todo="Delete_todo";


export const tododataLoading=()=>({
  type:To_Do_Data_Loading
});
export const tododataSuccess=(payload)=>({
    type:To_Do_Data_Success,
    payload
  });
  export const tododataError=()=>({
    type:To_Do_Data_Failure
  });
  export const toggletodo=(payload)=>({
    type:Toggle_todo,
    payload
  })
  export const deletetodo=(payload)=>({
    type:Delete_todo,
    payload
  })
  

  export const tododesc=({id})=>
    async(dispatch)=>{
        try {
            dispatch(tododataLoading());
            let res=await fetch(`http://localhost:8080/todos`);
            let data=await res.json();
            dispatch(tododataSuccess(data));
        } catch (error) {
            dispatch(tododataError())
        }
    };
    
  
