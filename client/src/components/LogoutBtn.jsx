import axios from 'axios'
import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';

export default function LogoutBtn() {

    const {getLoggedIn} = useContext(AuthContext);
    
  async function logOut() {
    await axios.get("http://localhost:5000/auth/logout");
    await getLoggedIn();
    }
    return (
        <button onClick={logOut}>
            Logout
        </button>
    )
}
