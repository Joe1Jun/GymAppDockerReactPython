

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { styled } from '@mui/system';
import {Box} from "@mui/material"
import Login from './app/Login';
import DashBoard from './app/Dashboard';
import Register from './app/Register';







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
       <Route path="/register" element={ <Register />} />
       {user &&  <Route path='/dashboard' element = { <DashBoard />} />}
      </Routes>
  
     
    
    
      </AppContainer>
    
    
  )
}

export default App
