import { todoAppState } from "../utilites/initialData";
import todoType from "../utilites/types";

//let initialState = todoAppState.todos;
let initialState = todoAppState.todoData;


export type ActionType = { type: string; payload?: any };


// interface actionType {
//     type:string,
//     payload:string|number|undefined
// }

function nextId(state:todoType[])
{
    let maxId:number = state.reduce((acc,val)=>Math.max(acc,val.id),-1)
    return  maxId+1;
}


export default function reduxTodoReducer(state:todoType[] = initialState, action:ActionType)
{

 //   console.log(`inside the reducer`,state,`and`,action)

    switch(action.type)
    {
        case 'todos/todoAdded':{

            return (
              [...state,
                
                    {
                        id:nextId(state),
                        text:action.payload,
                        completed:false,
                        color:''
                    }
                
            ]
            )
        }

        case 'todos/todoToggled':
            {
                return   state.map(val=>{
                if(action.payload != val.id)
                {
                    return  val;
                }
                else{
                    val.completed = !val.completed
                    return val
                }
         })}

         case 'todos/allCompleted':
            {
                return ( state.map(todo=>{ todo.completed = true
                   return todo  })
                )
            }

          case 'todos/completedCleared':{

            return (
                state.filter(todo=> todo.completed==false)
            )
          }  

          case 'todos/colorSelected':{
            return  (state.map(todo=>{

                if(todo.id == action.payload.id)
                {
                    todo.color=action.payload.color;
                }
                return todo;

            }))
          }

          case 'todos/todoDeleted':{
            return (
                state.filter(todo=>todo.id!=action.payload)
            )
          }
        default: return(state)
    }
    
}