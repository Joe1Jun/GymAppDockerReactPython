

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { styled } from '@mui/system';
import {Box} from "@mui/material"
import Login from './app/Login';
import DashBoard from './app/Dashboard';








const AppContainer = styled(Box)({
  
  display: 'flex',
  height: '100vh',
  width: '100%',
});

const App : React.FC =() => {
  const [user, setUser ] = useState<boolean>(false);

  return (
   

    


   
    <AppContainer>
      
      <Routes>
       <Route path="/" element= { <Login />}  /> 
       {user &&  <Route path='/dashboard' element = { <DashBoard />} />}
      </Routes>
  
     
    
    
      </AppContainer>
    
    
  )
}

export default App
