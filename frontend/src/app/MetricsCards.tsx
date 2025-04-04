import { Card , Box, CardContent,  Typography, CardActions , Button} from "@mui/material";
import React from "react";
import { styled } from '@mui/system';
import { cardItems } from "../utils/cardItems";



const CardsContainer = styled(Box)({
    
    padding: '10px',
    width : "80%",
    overflowY: 'auto',
    display : "flex",
    alignItems : "center",
    
    
    
  });

  const CardStyled = styled(Card)(({ className }) => ({
    borderRadius: "8px",
    ...(className === "steps" && { backgroundColor: "#1976d2", color: "#fff" }),
    ...(className === "water" && { backgroundColor: "#f50057", color: "#fff" }),
    ...(className === "calories" && { backgroundColor: "#4caf50", color: "#fff" }),
    ...(className === "heartRate" && { backgroundColor: "#4caf50", color: "#fff" })
  }));


const Cards : React.FC = () => {


return(
   <CardsContainer>
   {cardItems.map((item) => (
   <CardStyled className={item.classname} key= {item.id}  sx={{ maxWidth: "30%", marginRight : "20px"}}  >
    
   
   <CardContent>

   <Typography gutterBottom variant="h5" component="div">
       {item.title}
     </Typography>
       
     
   </CardContent>
   <CardActions>
     <Button size="small">Share</Button>
     <Button size="small">Learn More</Button>
   </CardActions>
 </CardStyled>


   ))}



   </CardsContainer> 



)



}



export default Cards;




