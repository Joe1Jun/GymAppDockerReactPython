import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WhatshotIcon from '@mui/icons-material/Whatshot';


export const cardItems = [

    {
     id : 1,   
     title : "Steps",
     classname  : "steps",
     icon : <DirectionsWalkIcon />,
     path : "/steps-data"
     
    },
    {
    id : 2,  
    title : "Water",
    classname  : "water",
     icon : <WaterDropIcon/>,
     path : "/water-data"
    
    },
    {
    id : 3,  
    title : "Calories",
    classname  : "calories",
    icon : <WhatshotIcon/>,
    path : "/calories-data"
    
    },
    {
       id : 4, 
       title : "HeartRate", 
       classname  : "heartRate",
       icon :  <FavoriteIcon />,
       path : "/"
    }
    
    
    
    
    
    
    ]