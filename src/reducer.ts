import  {combineReducers} from 'redux';
import  reduxTodoReducer from './features/todoSlicer';
import  reduxFilterReducer from './features/filterSlicer'


let rootReducer  =  combineReducers({
todoData:reduxTodoReducer,
filters:reduxFilterReducer
})

export default  rootReducer;
