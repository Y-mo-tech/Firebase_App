import React, {useState} from 'react'
import { auth, createUserWithEmailAndPassword } from './firebase';
//import {auth} from './firebase'

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async (e) => {
        e.preventDefault();

        try{
            await createUserWithEmailAndPassword(auth, email, password)
            alert('Account created!')
        } catch(err){
            alert(err.message)
        }
    }

    return(
        <div>
        <h1>Signup Page</h1>
        <form onSubmit={handleSignup}>
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
        </div>
    )
}

export default Signup