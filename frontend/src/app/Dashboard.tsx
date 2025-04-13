import Main from "./Main"
import Sidebar from "./Sidebar"
import UserProfileSidebar from "./UserProfile"



const DashBoard : React.FC = ( ) => {


    return(
      
        <div>
        <Sidebar />
        <Main />
        <UserProfileSidebar />
        </div>
    )




}

export default DashBoard