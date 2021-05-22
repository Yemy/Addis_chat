import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import logo from './images/logo.jpg'
import addischat from './images/addischat.PNG'
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";


function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () =>{
        // sign in
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
                
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img className="login__logo1" src={logo} alt="logo"/>
                <br/><br/><br/><br/>
                <img src={addischat} alt="name"/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login
