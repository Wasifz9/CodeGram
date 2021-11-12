import './App.css';
import {
  Button,
  Box, 
  Typography
} from '@mui/material';
import apiClient from './api/apiClient';

function App() {

  const ac = new apiClient("none")

  function login(){
    ac.githubAuth().then((data) =>
      console.log(data)
    );
  }

  function getPR(){
    ac.getPR().then((data) =>
      console.log(data)
    );
  }

  function getRepo(){
    ac.getRepo().then((data) =>
      console.log(data)
    );
  }

  function logoff(){
    ac.logoff().then((data) =>
      console.log(data)
    );
  }
  function helloWorld(){
    ac.getHello().then((data) =>
      console.log(data)
    );
  }


  return (
    <div className="App">



      <Box 
        padding = {10}
      >
      <Typography variant="h3">
        End point testers!
      </Typography>
        <Button 
          variant="outlined"
          onClick={() => login()}>       
          Login with Github! 
        </Button> 
        <Button 
          variant="outlined"
          onClick={() => logoff()}>       
          Logoff!
        </Button>  
        <Button 
          variant="outlined"
          onClick={() => getPR()}>       
          Get PR!
        </Button>  
        <Button 
          variant="outlined"
          onClick={() => getRepo()}>       
          Get Repo!
        </Button>   
        <Button 
          variant="outlined"
          onClick={() => helloWorld()}>       
          Hello 
        </Button>  

        </Box>

      <Box>
      <Typography variant="h3">
        React-flow Test 
      </Typography> 

      

      </Box>
     
    </div>
  );
}

export default App;
