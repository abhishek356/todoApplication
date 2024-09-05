import { createStore,Store } from "redux";
import {ActionType} from './features/todoSlicer'
import rootReducer from "./reducer";
//import {todoAppState} from './utilites/initialData'
//import todoType from "./utilites/types";
import { fullTodo } from "./utilites/types";

let store:Store<
fullTodo,ActionType
> = createStore(rootReducer)

export default store;