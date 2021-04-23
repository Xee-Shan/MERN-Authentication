import React,{useContext, useState} from 'react'
import axios from "axios";
import AuthContext from '../context/AuthContext';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {getLoggedIn} = useContext(AuthContext);

    async function register(e) {
        e.preventDefault();
        try{
            const loginData = {
                email, 
                password
                };

            await axios.post("http://localhost:5000/auth/login", loginData);
            await getLoggedIn();
        }catch(err){
            console.error(err);
        }
    }

    return (
        <div className="container">
            <form>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    onChange={(e) => setEmail(e.target.value)}
    value={email}
    />
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" placeholder="Password"
    onChange={(e) => setPassword(e.target.value)}
    value={password}
    />
  </div>
  <button type="submit" className="btn btn-primary" onClick={register}>Login</button>
</form>
        </div>
    )
}
