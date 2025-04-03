
import Header from './app/Header'
import Sidebar from './app/Sidebar'
import { styled } from '@mui/system';
import {Box} from "@mui/material"
import './App.css'



const AppContainer = styled(Box)({
  color: 'whitesmoke',
  backgroundColor: 'white',
  overflow : "hidden",
  display : "flex",
  margin : "0px"
  
});

const App : React.FC =() => {
 

  return (
    <AppContainer>
      <Sidebar />
       <Header />
       

    </AppContainer>
    
    
  )
}

export default App
