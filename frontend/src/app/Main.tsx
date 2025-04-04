import { styled } from '@mui/system';
import {Box} from "@mui/material"
import Header from './Header';

// Main Content Area
const MainContainer = styled(Box)({
  flex: 1,
  padding: '10px',
  width : "80%",
  overflowY: 'auto',
  height : "100%",
  backgroundColor: '#f5f5f5',
});

const Main : React.FC = ( ) => {


    return(
    <MainContainer>

    <Header />
    </MainContainer>

    )




}

export default Main