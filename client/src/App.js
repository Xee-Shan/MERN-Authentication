import React from 'react'
import axios from "axios";
import {AuthContextProvider} from "./context/AuthContext";
import Router from "./Router";

axios.defaults.withCredentials = true;

export default function App() {

  return (
    <AuthContextProvider>
      <Router/>
    </AuthContextProvider>
  )
}
