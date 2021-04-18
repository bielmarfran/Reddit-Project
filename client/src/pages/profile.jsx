import React from "react";
import {withRouter} from 'react-router-dom';


function Profile( { authorized }){
   //if(!authorized){
   // return <Redirect to="./login" />
   //}
    return(
        <div>
            Profile
        </div>
    );
}

export default withRouter(Profile);