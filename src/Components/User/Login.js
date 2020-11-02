import React from 'react';
import {Button} from "@material-ui/core";
import './Login.css';
import { auth, provider } from '../../database_context/firebase';


function Login() {
    const signIn = () => {
        //Login with Google
        auth.signInWithPopup(provider)
            .catch((error) => {
                alert(error.message);
            })
    }
        return (
            <div className="login">
                <div className="login-logo">
                    <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-u2013-swiss-geeks-23.png" />
                </div>
                <Button onClick={signIn}>Sign In</Button>
            </div>
        );
}

export default Login;