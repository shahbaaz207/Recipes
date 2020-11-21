import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import { useState } from 'react';
import { auth } from '../firebase';

const Login = () => {
    const history=useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        auth
          .signInWithEmailAndPassword(email, password)
          .then((u)=>{
            console.log('successfully')
            history.push('/')
        })
          .catch((err) => setErr(err.message));
      };
    return (
       
        <div className="login">
            <form className="login__form" onSubmit={signIn}>
                <h2 className="login__header">Login Here!!</h2>
                <p className="auth__error">{err}</p>
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                 <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>   
                <button type="submit">Login</button>
                <p className="signUp_login">You don't have an Account?
                    <Link to='/signup'> SingUp</Link>
                </p>
            </form>
        </div>
    )
}

export default Login
