import React from "react";
import {Redirect} from "react-router-dom";


///// Public Routes

import Login from '../Components/LoginPage/Form';

/////   Private Routes

import Home from '../pages/Home';


const privateRoutes = [

    {path: '/home', component: Home, isAuthProtected: true},

    // this route should be at the end of all routes

    {path: "/", exact: true, component: () => <Redirect to='/login'/>},
];


const publicRoutes = [
    {path: "/login", component: Login},
];


export {publicRoutes, privateRoutes};



