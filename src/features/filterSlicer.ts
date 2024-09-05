import { todoAppState } from "../utilites/initialData";
import { filterData } from "../utilites/types";

let initialData :filterData= todoAppState.filters;

// type actionType = {
//     type:string,
//     payload?:string|number|undefined
// }

export type ActionType = { type: string; payload: any };


let selectedColor = (state:filterData,Color:string)=>{
 
    let colorSelected = state.color.includes(Color)?state.color.filter(color=>Color!=color):[Color,...state.color]
console.log(`color selected  is`,colorSelected)
return colorSelected
}

export default function reduxFilterReducer(state = initialData,action:ActionType)
{

    console.log(`the filter reducer got triggered`,state)
    switch(action.type)
    {
        case 'filters/statusFilterChanged':
            {
                return {
                    ...state,
                    status:action.payload
                }
            }

          case 'filters/colorFilterChanged':
            {
                return  {
                    ...state,
                    color:[...selectedColor(state,action.payload)]
                }
            }
            
           default:return(state) 
    }

}