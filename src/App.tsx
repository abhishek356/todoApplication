import './App.css'
import { AppBar,Box, Typography } from "@mui/material"
import MainContent from './components/MainContent'

function App() {

  return (
    <>
     <Box sx = {{
        width:'100%',
        height:'100vh',
         display:'flex',
         flexDirection:'column',
         justifyContent:'flex-start',
         alignItems:'center',
        // position:'relative',
        backgroundColor:'#ececec',
        flex:'1'
     }}>        
     
     <AppBar sx = {{
      width:'100%',
      margin:'0',
      padding:'0',
      boxShadow:'none'
     }}>
        <Typography variant='h1' sx={{ 
          backgroundColor:'#6643b5',
          textAlign:'center',
          fontSize:'3.1em',
          //borderColor:'114px solid black',,
          padding:'3px'
        }}>
          Todo app</Typography>
          
      </AppBar>
        <Box sx={{
          marginTop:'5%',
        //  backgroundColor:'red',
          //height:'vh'
        }}>
        <Typography variant='h2' sx={{
        textAlign:'center',
      //  backgroundColor:'yellow' ,
        fontSize:'2.5em',
        color:'#fd5959'
       
      }}>
        Todos
      </Typography>
        </Box>
      
      <MainContent/>

     </Box>
    </>
  )
}

export default App
