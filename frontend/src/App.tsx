

import Sidebar from './app/Sidebar'
import { styled } from '@mui/system';
import {Box} from "@mui/material"
import Main from './app/Main';

import UserProfileSidebar from './app/UserProfile';

import './App.css'



const AppContainer = styled(Box)({
  
  display: 'flex',
  height: '100vh',
  width: '100%',
});

const App : React.FC =() => {
 

  return (
   


   
    <AppContainer>
      
      <Sidebar />
     <Main />
   
    <UserProfileSidebar />
    
    
    </AppContainer>
    
    
  )
}

export default App
