import React,{useContext} from 'react'
import Navbar from "./components/Navbar";
import {Switch, Route} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Customer from "./components/customers/Customers";
import AuthContext from './context/AuthContext';

export default function Router() {

    const {loggedIn} = useContext(AuthContext);

    return (
        <div>
            <Navbar/>
      <Switch>
        {
          loggedIn === false && <>
         <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/> 
          </>
        }
        { loggedIn === true &&
        <Route path="/customer" component={Customer}/>
        }
      </Switch>
        </div>
    )
}
