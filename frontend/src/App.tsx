

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { styled } from '@mui/system';
import {Box} from "@mui/material"
import Login from './app/Login';
import DashBoard from './app/Dashboard';
import Register from './app/Register';
import HelpPage from './app/HelpPage';







const AppContainer = styled(Box)({
  
  display: 'flex',
  height: '100vh',
  width: '100%',
});

const App : React.FC =() => {
  const [user, setUser ] = useState<boolean>(false);

  return (
   

    


   // <Route path="/" element= { <Login />}  /> 
    <AppContainer>
      
      <Routes>
       
       <Route path="/" element={ <Login />} />
       <Route path= "/helpPage"  element={ <HelpPage />}/>
       {user &&  <Route path='/dashboard' element = { <DashBoard />} />}
      </Routes>
  
     
    
    
      </AppContainer>
    
    
  )
}

export default App
