import { userContext } from "react";
import UserContext from "./UserContext";

function UserDetails({userData}){
    const userContext = useContext(userContext);
    return(
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>

        </div>
    );
}

export default UserDetails;