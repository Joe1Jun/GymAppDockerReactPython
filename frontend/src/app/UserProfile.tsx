import { styled } from '@mui/system';
import { Box } from '@mui/material';









const UserProfileContainer = styled(Box)({
 
    
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
       
        
      Hello
         

      </UserProfileContainer>

    )




}

export default UserProfileSidebar