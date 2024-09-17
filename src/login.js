import React, {useState} from 'react'
import {auth} from './firebase'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async(e) => {
        e.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(email, password)
            alert('Logged In!')
        } catch(err){
            alert(err.message)
        }
    }

    return(
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
            <button type="submit">Sign Up</button>
        </form>
    )

}

export default Login;