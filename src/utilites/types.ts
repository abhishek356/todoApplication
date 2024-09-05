interface todoType{

    id:number,
    text:string,
    completed:boolean,
    color:string

}

export interface filterData{
    status:string,
    color:string[]
}

export interface fullTodo {
    todoData:todoType[],
    filters:filterData

}

export default  todoType