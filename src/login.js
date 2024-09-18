import React, {useState} from 'react'
import { auth, signInWithEmailAndPassword  } from './firebase';
//import {auth} from './firebase'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async(e) => {
        e.preventDefault();

        try{
            await signInWithEmailAndPassword(auth, email, password)
            alert('Logged In!')
        } catch(err){
            alert(err.message)
        }
    }

    return(
        <div>
        <h1>Login page</h1>
        <form onSubmit={handleLogin}>
            <input 
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Email"
            />
            <input
               type="password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               placeholder='Password'
            />
            <button type="submit">Login</button>
        </form>
        </div>
    )

}

export default Login;