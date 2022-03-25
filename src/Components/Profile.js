import React from "react";
import authService from "./Auth";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        authService.loginTest()
        //    axios
        //     .get("http://localhost:5005/api/auth/loggedIn")
            .then((results) => {
                console.log(results.data);
            })
            .catch((err) => {
                console.error(err.message);
      });
    });

    return (
        <div>
            {<h3>{user.username}'s profile page</h3>}
        </div>
    )
}
export default Profile;