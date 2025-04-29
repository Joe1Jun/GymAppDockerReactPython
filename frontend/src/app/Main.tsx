import { styled } from '@mui/system';
import {Box,} from "@mui/material"
import Header from './Header';
import Cards from './MetricsCards';
import ProgressCards from './ProgressCards';

// Main Content Area
const MainContainer = styled(Box)({

  display: "flex", // Make it a flex container
  flexDirection : "column",

  //flex: 1,

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
    <ProgressCards />
    </MainContainer>

    )




}

export default Main