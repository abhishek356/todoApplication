import { Grid,Typography,Button,Checkbox,Box } from "@mui/material"
import {useSelector,useDispatch} from 'react-redux'
//import todoType from "../utilites/types";
import { fullTodo } from "../utilites/types";
import '../App.css'


let FilterComponent = () =>{

    let dispatch  = useDispatch();
   
    let remainingTodos:number  = useSelector<fullTodo,number>(state=>{
        
        console.log(`the  value of state is`,state);
         let val =  state.todoData.reduce((acc,todo)=>{

                if(todo.completed != true)
                {
                  return  ++acc;
                }

                return acc;

            },0)

           

            console.log(`the count of un completed todos is`,val)
        return val;
        })

        // let colorState:string[] = useSelector<fullTodo,string[]>(state=>[...state.filters.color])

        let markAllCompleted = ()=>{
            dispatch({type:'todos/allCompleted'})
        }

        let clearCompleted = ()=>{

            dispatch({type:'todos/completedCleared'})
        }

        let handleCompleted =()=>
            {
                    dispatch({type:'filters/statusFilterChanged', payload:'allCompleted'})
            }

        let handleActive = ()=>{
            dispatch({type:'filters/statusFilterChanged',payload:'Active'})
        }  
        
        let handleAll = ()=>{
            dispatch({type:'filters/statusFilterChanged',payload:'All'})
        }
        let handleColorSelect = (color:string)=>{
          
           dispatch({type:'filters/colorFilterChanged',payload:color})
            
        }

    return (<>


<Grid container direction='row' spacing={2} alignItems="stretch" >
                    <Grid item xs={3} sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        gap:'-0.5em'
                        //justifyContent:'flex-start'
                    }}>

                            <Typography variant = 'h6' sx={{
                                fontSize:'1em',
                                marginBottom:'0.7em',
                                textAlign:'center',
                            }}>
                                    Actions
                            </Typography>
                          <Button  variant='contained' size='small'
                          sx={{
                            marginBottom:'0px'
                          }}
                          onClick = {markAllCompleted}
                          >Mark All completed</Button>

                          <Button  variant='contained' size='small' sx={{
                            marginTop:'1.1em',
                            padding:'0.4em',
                            width:'13.2em'
                          }}
                          onClick = {clearCompleted}
                          >Clear Completed</Button>

                    </Grid>
                    <Grid item xs={3} 
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center'
                    }}>
                        <Typography variant={'h6'} sx={{

                                fontSize:'1em',
                                marginBottom:'0.7em',
                                    textAlign:'center'


                        }}>Remaining Todos</Typography>
                        <Typography variant={'h6'} sx={{

                            fontSize:'1em',
                            marginBottom:'0.7em',
                            textAlign:'center'


                            }}> {remainingTodos} item left</Typography>

                    </Grid>
                    <Grid item xs={3} sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'flex-start'
                    }}>
                        <Box sx={{
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'flex-start'
                        }}>
                        <Typography variant='h6'
                            sx={{
                                    fontSize:'1em',
                                    marginBottom:'0.7em',
                                    textAlign:'center'
                                }} >Filter by status</Typography>
                                <Button variant = 'text'
                                size='small'
                                sx={{
                                    fontSize:'1em',
                                   marginBottom:'0.5em',
                                   marginLeft:'-9px',
                                   paddingLeft:'0',
                                   textDecoration:'none',
                                   color:'black'
                                   // textAlign:'left',
                                   // marginBottom:'-12px'
                                }}
                                onClick = {handleAll}
                                >All</Button>

                                <Button variant = 'text'
                                size='small'
                                sx={{
                                    fontSize:'1em',
                                    marginBottom:'0.5em',
                                    textAlign:'center',
                                    color:'black'
                                }}
                                onClick={handleActive}>Active</Button>

                                <Button variant = 'text'
                                size='small'
                                sx={{
                                    fontSize:'1em',
                                    marginBottom:'0.5em',
                                    textAlign:'center',
                                    color:'black'
                                }} 
                                onClick={handleCompleted}
                                >Completed</Button>


                        </Box>
                            
                    </Grid>

                    <Grid item xs={3} sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'flex-start',
                        //gap:'-1'
                        margin:'0'
                    }}>

                            <Typography variant = 'h6'
                                sx={{
                                    fontSize:'1em',
                                    marginBottom:'0.7em',
                                    textAlign:'center'
                                }}>Filter by Color</Typography>
                                                <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5em',
                        marginBottom:'-12px'
                    }}>

                        
                        <Checkbox id='green' onChange={(e)=>{
                            console.log(`The value of green is`,e.currentTarget.value);
                        
                            handleColorSelect('green')}}/>
                        <Box sx={{
                            width: '1.3em',
                            height: '1em',
                            backgroundColor: 'green',
                          //  border:'1px solid green',
                          borderRadius:'0.3em'
                        }}/>
                        
                            <Typography variant = 'h6' sx={{
                                fontSize:'1em' 
                            }}>Green</Typography>   
                        </Box>

                        <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5em',
                        marginBottom:'-12px'

                    }}>

                        
                        <Checkbox id='blue' onChange={()=>{
                            let func  = handleColorSelect;
                            func('blue')}}/>
                        <Box sx={{
                            width: '1.3em',
                            height: '1em',
                            backgroundColor: 'blue',
                          //  border:'1px solid green',
                          borderRadius:'0.3em',
                        //  marginBottom:'-12px'

                        }}/>
                        
                            <Typography variant = 'h6' sx={{
                                fontSize:'1em' 
                            }}>Blue</Typography>   
                        </Box>

                        <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5em',
                        marginBottom:'-12px'

                    }}>

                        
                        <Checkbox id='orange' 
                        onChange={(e)=>{
                            console.log(e.target)
                         handleColorSelect('orange');
                             }}/>
                        <Box sx={{
                            width: '1.3em',
                            height: '1em',
                            backgroundColor: 'orange',
                          //  border:'1px solid orange',
                          borderRadius:'0.3em'
                        }}/>
                        
                            <Typography variant = 'h6' sx={{
                                fontSize:'1em' 
                            }}>orange</Typography>   
                        </Box>

                        <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5em',
                        marginBottom:'-12px'

                    }}>

                        
                        <Checkbox id='purple' onChange={()=>handleColorSelect('purple')}/>
                        <Box sx={{
                            width: '1.3em',
                            height: '1em',
                            backgroundColor: 'purple',
                          //  border:'1px solid purple',
                          borderRadius:'0.3em'
                        }}/>
                        
                            <Typography variant = 'h6' sx={{
                                fontSize:'1em' 
                            }}>Purple</Typography>   
                        </Box>

                        <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5em',
                        marginBottom:'-12px'

                    }}>

                        
                        <Checkbox id='red' onChange={()=>handleColorSelect('red')}/>
                        <Box sx={{
                            width: '1.3em',
                            height: '1em',
                            backgroundColor: 'red',
                          //  border:'1px solid red',
                          borderRadius:'0.3em',
                         // marginBottom:'-12px'

                        }}/>
                        
                            <Typography variant = 'h6' sx={{
                                fontSize:'1em' 
                            }}>red</Typography>   
                        </Box>
                       
                    </Grid>


                 </Grid>
        
        
        </>)
}

export default FilterComponent