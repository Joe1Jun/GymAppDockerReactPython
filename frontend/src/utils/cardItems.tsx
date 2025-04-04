import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WhatshotIcon from '@mui/icons-material/Whatshot';


export const cardItems = [

    {
     id : 1,   
     title : "Steps",
     color  : "green",
     icon : <DirectionsWalkIcon />,
     path : "/steps-data"
     
    },
    {
    id : 2,  
    title : "Water",
    color  : "blue",
     icon : <WaterDropIcon/>,
     path : "/water-data"
    
    },
    {
    id : 3,  
    title : "Calories",
    color  : "teal",
    icon : <WhatshotIcon/>,
    path : "/calories-data"
    
    },
    {
       id : 4, 
       title : "HeartRate", 
       color  : "yellow",
       icon :  <FavoriteIcon />,
       path : "/"
    }
    
    
    
    
    
    
    ]