import { styled } from '@mui/system';
import {Box, Typography} from "@mui/material"


const HeaderStyled = styled(Box)({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    display : "flex",
   
    width : "100%",
    padding : "20px",
    borderRadius: 4,
    marginLeft : "80px"
  })
const Header : React.FC = ( ) => {




    return(
        <HeaderStyled>
        <Typography> Welcome Back Joe</Typography>

        </HeaderStyled>

    )




}

export default Header