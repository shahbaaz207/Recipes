import React, { useState } from 'react'
import { Link ,useHistory} from 'react-router-dom'
import { auth } from '../firebase'


const SignUp = (props) => {
    const history=useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [err, setErr] = useState("");

    
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((u)=>{
        console.log('successfully')
        history.push('/login')
    })
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
        
      })
      .catch((err) => setErr(err.message));
  };

    return (
        <div className="login">
        <form className="login__form" onSubmit={signUp}>
            <h2 className="login__header">SignUp Here!!</h2>
            <p className='auth__error'>{err}</p>
            <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <button type="submit" >SignUp</button>
            <p className="signUp_login">You  have an Account?
                <Link to='/login'>Login</Link>
            </p>
        </form>
    </div>
    )
}

export default SignUp
