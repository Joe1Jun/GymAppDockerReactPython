import { styled } from '@mui/system';
import { Box,  ListItemIcon, List } from '@mui/material';
import { ListButtonStyled } from '../components/ListButtonStyled';
import { sidebarItems } from '../utils/sideBarItems';







const SideBarContainer = styled(Box)({
 
    minHeight: '100vh',
    display : "flex",
    flexDirection : "column",
  
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