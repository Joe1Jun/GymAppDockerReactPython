import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';








const UserProfileContainer = styled(Box)({
 
    display : "flex",
    flexDirection : "column",
    width: '15%',
    height: '100%',
    backgroundColor: 'white',
 
    borderLeft: '1px solid #e0e0e0',
    padding: '20px',
    overflowY: 'auto',
  
});

const UserProfileSidebar : React.FC = ( ) => {


    return(
      <UserProfileContainer>
      <Box sx= {{display : "flex", justifyContent : "space-around"}}>
      <img src="/userplaceHolder.png" alt="user" style={{width : "50px" , height : "50px"}} />
      <Box sx={{display : "flex", flexDirection : "column"}}>
      <Typography>Joe Junker</Typography>
      <Box sx= {{display : "flex", justifyContent : "space-around"}}>
      <LocationOnIcon />
      <Typography>Location</Typography>
      </Box>
      

      </Box>
      
        </Box>  
       
    
         

      </UserProfileContainer>

    )




}

export default UserProfileSidebar