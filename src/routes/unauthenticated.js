import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../views/Login/Login';
import Signup from '../views/SignUp/Signup';



const Unauthenticated = () => {
        return(<>
        <Routes>
            <Route path="/" element={<Navigate to={"/login"}/>}/>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
        </>)
} 

export default Unauthenticated;