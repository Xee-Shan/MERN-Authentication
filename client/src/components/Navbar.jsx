import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';
import LogoutBtn from './LogoutBtn';

export default function Navbar() {

  const {loggedIn} = useContext(AuthContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      { loggedIn === false && <>
        <li className="nav-item">
        <a className="nav-link" href="/register">Register</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>  
        </>
      }
      { loggedIn === true &&
      <>
       <li className="nav-item">
        <a className="nav-link" href="/customer">Customers</a>
      </li>
      <li className="nav-item">
        <LogoutBtn/>
      </li>
      </>
      }
    </ul>
  </div>
</nav>
        </div>
    )
}
