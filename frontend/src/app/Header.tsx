import { styled } from '@mui/system';
import {Box, Typography, Button} from "@mui/material"


const HeaderStyled = styled(Box)({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    display : "flex",
    justifyContent : "space-between",
    width : "100%",
    padding : "20px",
   
    
   
  })
const Header : React.FC = ( ) => {




    return(
        <HeaderStyled>
        <Typography> Welcome Back Joe</Typography>

        <Button> Subscribe</Button>

        </HeaderStyled>

    )




}

export default Header