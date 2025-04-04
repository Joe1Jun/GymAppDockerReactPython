import { styled } from '@mui/system';
import {Box, Card} from "@mui/material"
import Header from './Header';
import Cards from './MetricsCards';


// Main Content Area
const MainContainer = styled(Box)({
  display: "flex", // Make it a flex container
  flexDirection : "column",
  padding: '10px',
  width : "80%",
  overflowY: 'auto',
  height : "100%",
  alignItems : "center",
  backgroundColor: '#f5f5f5',
});

const Main : React.FC = ( ) => {


    return(
    <MainContainer>
     
    <Header />
    <Cards />
    </MainContainer>

    )




}

export default Main