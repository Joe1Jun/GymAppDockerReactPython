import { Card , Box, CardContent,  Typography, CardActions , Button} from "@mui/material";
import React from "react";
import { styled } from '@mui/system';
import { progressCardItems } from "../utils/progressCardsItems";


const CardsContainer = styled(Box)({
        
    padding: '10px',
    width : "80%",
    overflowY: 'auto',
    display : "flex",
    alignItems : "center",
    
    
    
  });

  const CardStyled = styled(Card)(({ className }) => ({
    boxShadow : "1,0 ,1,0",
    borderRadius: "8px",
    ...(className === "steps" && { backgroundColor: "#1976d2", color: "#fff" }),
    ...(className === "water" && { backgroundColor: "#f50057", color: "#fff" }),
    ...(className === "calories" && { backgroundColor: "#4caf50", color: "#fff" }),
    ...(className === "heartRate" && { backgroundColor: "#4caf50", color: "#fff" })
  }));


const ProgressCards : React.FC = () => {



return(

    <CardsContainer>
     {progressCardItems.map((item) => (
       <CardStyled className={item.classname} key= {item.id}  sx={{ width: "50%", marginRight : "20px", height : "200px"}}  >
        
       
       <CardContent>
    
       <Typography gutterBottom variant="h5" component="div">
           {item.title}
         </Typography>
           
         
       </CardContent>
    
     </CardStyled>
    
    
       ))}

    </CardsContainer>

    

)



}


export default ProgressCards