import { Card , Box} from "@mui/material";
import React from "react";
import { styled } from '@mui/system';



const CardsContainer = styled(Box)({
    flex: 1,
    padding: '10px',
    width : "80%",
    overflowY: 'auto',
    height : "100%",
    backgroundColor: '#f5f5f5',
  });



const Cards : React.FC = () => {


return(
   <CardsContainer>

    


   </CardsContainer> 



)



}



export default Cards;




