import { Typography,Box, Checkbox,Select,Button,MenuItem, SelectChangeEvent } from "@mui/material"

import { useSelector } from "react-redux";
import { filterData, fullTodo} from  '../utilites/types'
import todoType from "../utilites/types";
import { shallowEqual } from "react-redux";
import React, { useEffect, useState } from "react";
//import CustomizedCheckbox from "./customCheckbox";
import { useDispatch } from "react-redux";


// let selectTodoIds = ((state:fullTodo)=>{

//     console.log('Inside the selectTodoIds',state)
//   return  state.todos.map(todo=>todo.id)


// })

let TodoList  = ()=>{

    // let todoIds:number[] = useSelector<fullTodo,number[]>(selectTodoIds,shallowEqual)
    // console.log(`The  lis of  todos  is`,todoIds)

    let filterValue:filterData = useSelector<fullTodo,filterData>(state => {
       // console.log(`the value present in filter store is ${JSON.stringify(state)}`)
     //  console.log('rendered again')
        return{ ...state.filters}},shallowEqual);
        let todoArray:todoType[];
        let todoItems:todoType[]
   // console.log(`the filterValue is`,filterValue)

     todoItems = useSelector<fullTodo,todoType[]>((state=>{
       // console.log(`checking`,state)
        return [...state.todoData.map(todo=>todo)]
    }))

   

     if(filterValue.status === 'All')
    {

        if(filterValue.color.length>0)
            {
                todoArray = todoItems.filter(todo=>filterValue.color.includes(todo.color))
            }
        
            else{
                todoArray = todoItems

            } 
            

    }

   else if(filterValue.status === 'allCompleted')
    {
      //  console.log(`Inside the filter value checking for complete`,filterValue)
        todoArray = todoItems.filter(todo=>todo.completed===true)
    }
    else{
        todoArray = todoItems.filter(todo=>todo.completed === false)
    }
    //console.log(`the list of todos picked from the store are`,todoArray)
   
    return(<>
    {/* <ul className  = "todoItems">{renderedListItem}</ul> */}
    {todoArray.map((todo:todoType)=>{

     //   console.log(`Inside the todolist component, sending data for todoitem`,todo)
        return (<>
        <div key={todo.text}>
        <TodoItem todo={todo}/>

        </div>
        </>)
    })}
    </>)
}


interface  todoItemProps{
    todo:todoType
}

// export  let  TodoItem:React.FC<TODOID> = ({id}:TODOID)=>{
//     let dispatch = useDispatch();
//     let todo = useSelector<fullTodo,todoType|undefined>(state=>{
//             console.log(`Inside the TodoItem selector`,state)
//            return state.todos.find(todo => todo.id==id?todo:'no matching todo  id found');
//     })

//     let alltodos:todoType[] = useSelector<fullTodo,todoType[]>(((state:fullTodo)=>{
//         return state.todos.map(todo=>todo)
//     }))

//     if(todo)
//     dispatch({type:'todo/todoToggled',payload:todo.id})
//     return (

//         <>
//        {alltodos.map(todo=>{
//         return (<><Typography> {todo.text}
//                 </Typography></>)
//        }
            
//        )}
//         </>
//     )

//}

// let TodoItem = ()=>{

//     let alltodos:todoType[]|undefined = useSelector<fullTodo,todoType[]|undefined>(((state:fullTodo)=>{

//         console.log('the value of state inside TodoItem is',state)
//         if(state)
//         {
//             return state.todos.map(todo=>{return todo})

//         }return
//              }))
//     return (<>
    
//     {alltodos? alltodos.map(todo=>{
//         return (<><Typography> {todo.text}
//                  </Typography></>)
//         }
//     ):(<h6>loading...</h6>)}
//     </>)
// }

let TodoItem:React.FC<todoItemProps> = ({todo}:todoItemProps)=>{

  //  console.log(`Values passed to the TodoItem component`,todo)
    
   // let todoId:todoType[] = useSelector<fullTodo,todoType>(state=>state.todoData.filter(val=>val==todo.id))

  //  let todoIds = todoArray.filter(todoid=>todoid.id == todo.id)
    let [check,setChecked] = useState(todo.completed);
    //let Todo = useSelector<fullTodo,todoType[]>(state=>state.todoData)
    useEffect(()=>{
       // setToDo(todo)
        setChecked(todo.completed)
      return(()=>{return})
    },[todo.completed])
    let dispatch = useDispatch();
    const[color,setColor] = useState(todo.color?todo.color:'color')

let checkTodo= (event:React.ChangeEvent<HTMLInputElement>)=>{
    //console.log(`Inside the checkTodo`,todo.completed)
  //  console.log(`the value of checkevent is`, event.target.value);
    setChecked(!check)
dispatch({type:'todos/todoToggled',payload:todo.id})
}

let handleChange  =  (event:SelectChangeEvent)=>
{
      //  console.log(`the event picked is ${event.target.value}`)
        setColor(event.target.value);
        
        dispatch({type:'todos/colorSelected', payload:{id:todo.id,color:event.target.value}})
}

//console.log(`inside the todoitem component`,todo)
    return(<>
    <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        borderTop:'1px solid  grey',
        marginTop:'5px'
        
    }}>
        <Box sx={{
            display:'flex',
            alignItems:'center'
        }}>
        <Checkbox size='small' sx={{
        borderRadius:'50%',
        color:'green',
       // backgroundColor:'green'
       '&.Mui-checked':{
        color:'green',
        border:'50%'
       }
    }}
    checked={check}
    onChange={checkTodo}
/>
    <Typography >{todo.text}</Typography> 
        </Box>
        <Box sx={{
            display:'flex',
            alignItems:'center',
            gap:'5px'
        }}>
        <Select value={color} id='color-select' sx={{
   // marginLeft:'400px', 
    width:'100px',
    height:'20px',
    color:`${color}`,
    fontWeight:'bold'
    
}} onChange={handleChange}>
        {/* <MenuItem sx={{opacity:'0'}}>None</MenuItem> */}
        <MenuItem value = {'green'}sx={{color:'green'}}>Green</MenuItem>
        <MenuItem value = {'blue'}sx={{color:'blue'}}>Blue</MenuItem>
        <MenuItem value = {'orange'}sx={{color:'orange'}}>Orange</MenuItem>
        <MenuItem value = {'purple'}sx={{color:'purple'}}>Purple</MenuItem>
        <MenuItem value = {'red'}sx={{color:'red'}}>Red</MenuItem>

</Select>
<Button size='small'variant="contained" sx={{
    backgroundColor:'#fd5959',
    fontSize:'10px',
    padding:'1px',
    margin:'0',
    width:'0.6em',
    
    '&:hover':{
        backgroundColor:'#be3144'
    }
    
}} onClick={()=>dispatch({type: 'todos/todoDeleted', payload: todo.id}
)}>X</Button>
        </Box>

</Box>
    
    </>)
}

export default TodoList;