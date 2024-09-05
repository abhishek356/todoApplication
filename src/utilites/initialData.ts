//import todoType from "./types";

import { fullTodo } from "./types";

export let todoAppState:fullTodo = {
    todoData :[
        {
            id:1,
            text:'Buy milk from market',
            completed:false,
            color:'red'
        },
        {
            id:2,
            text:'Learn react',
            completed:true,
            color:''
        },
        {
            id:3,
            text:'Learn Redux',
            completed:false,
            color:'purple'
        }
    ],
    filters:{
        status:'All',
        color:[]
    }
}