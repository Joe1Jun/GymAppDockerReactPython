import { styled } from '@mui/system';
import { Box,  ListItemIcon, List } from '@mui/material';
import { ListButtonStyled } from '../components/ListButtonStyled';
import { sidebarItems } from '../utils/sideBarItems';







// Left Sidebar
const SideBarContainer = styled(Box)({
  width: '5%',
  height: '100%',
  backgroundColor: 'white',
  color: 'gray',
  padding: '20px',
  overflowY: 'auto',
});

const Sidebar : React.FC = ( ) => {


    return(
      <SideBarContainer>
       
        
        
        {sidebarItems.map((item, index) => (
         <List key={index}>   
         <ListButtonStyled>
            <ListItemIcon>
                {item.icon}
            </ListItemIcon>
          
         </ListButtonStyled>
         </List>
       ))}
         

      </SideBarContainer>

    )




}

export default Sidebar