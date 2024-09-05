import {Card, CardContent, Box, Typography} from '@mui/material'
import FilterComponent from './FilterComponent'
import TodoList from './TodoList'
import '../index.css'
import {  useState } from 'react'
import { useDispatch } from 'react-redux'

let MainContent =  ()=>{

    let dispatch = useDispatch()
    let [text,setText] = useState<string>(' ')
 //   let inputval = useRef('fd');

let handleInput = (e)=>{

    console.log(`Input elemet todo value`,e.target.value.toString())
    setText(e.target.value);


}

let handleEnter =(e) =>{

    let trimmedText:string = e.target.value;

    if(e.key==='Enter' && trimmedText)
    {
        console.log(`the value of trimmed is`,trimmedText)
        dispatch({type:'todos/todoAdded', payload:trimmedText.trim()});
        setText('');

    }

}

    return (
        <>
        <Card sx = {{
            minWidth:'55%',
            height:'80%',
            backgroundColor:'white'
        }}>
            <CardContent>
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                 //   backgroundColor:"green",
                    height:'76vh'
                }}>
                <Typography variant = 'h6' sx={{
                    color:'#c4c1e0',
                    marginLeft:'2.5em'
                }}>
                    What needs to be done?
                </Typography>
               <input type = 'text'  
               // ref = {inputval} 
                value = {text}
               placeholder='Enter todo and hit enter !' style = {{
                width:'30%',
                marginLeft:'3.6em',
                marginBottom:'1.3em 0'
               }}
               onChange = {handleInput}
               onKeyDown={handleEnter}

               />

                <Box sx = {{
                   // backgroundColor:'yellow',
                    height:'50vh'
                }}>
                    {/* <Typography variant='h6'>MainContent</Typography> */}
                    <TodoList/>
                </Box>
                <Box sx = {{
                   // backgroundColor:'red',
                   flex:'1',
                 
                }}>
                  

                 
                    <FilterComponent/>

                   
                </Box>
                </Box>
                
            </CardContent>
        </Card>
        </>
    )
}

export default MainContent