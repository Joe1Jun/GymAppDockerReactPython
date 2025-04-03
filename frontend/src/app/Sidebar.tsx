import { styled } from '@mui/system';
import { Box, IconButton, Typography } from '@mui/material';

import TimerIcon from '@mui/icons-material/Timer';





const SideBarContainer = styled(Box)({
 
    minHeight: '100vh',
    color : "gray",
    position: 'fixed',
    top: 0,
    left: 0,
    width: "5%",
    backgroundColor: "whitesmoke",
    borderRight: `1px solid white`,
    padding: 10,
    overflowY: 'auto',
  
});

const Sidebar : React.FC = ( ) => {


    return(
      <SideBarContainer>
        <TimerIcon></TimerIcon>
        <IconButton></IconButton>

      </SideBarContainer>

    )




}

export default Sidebar