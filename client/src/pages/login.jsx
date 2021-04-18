import React from "react";
import {useHistory} from 'react-router-dom';


function Login(){
    let history = useHistory();
   
    return(
        /*
        <div>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <button onClick={() => {
                 history.push('.profile')
            }}>Login</button>
        </div>
            */
           <div>
                Login
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <button onClick={() => {
                 history.push('./profile')
            }}>Login</button>
           </div>
           
    );
}

export default Login;