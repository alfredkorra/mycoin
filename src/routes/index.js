import React from "react";
import {Redirect} from "react-router-dom";


///// Public Routes
import Login from '../Components/LoginPage/Login';
import Register from '../Components/RegisterPage/Register'
import ForgotPassword from '../Components/ResetPage/ForgotPassword'
import Contact from '../Components/ContactPage/Contact'

/////   Private Routes
import Markets from "../Pages/Markets";
import Profile from "../Pages/Profile"
import Home from "../Pages/Home";
import Wallet from "../Pages/Wallet";

const privateRoutes = [

    {path: '/home', component: Home, isAuthProtected: true},
    {path: '/wallet', component: Wallet, isAuthProtected: true},
    {path: '/markets', component: Markets, isAuthProtected: true},
    {path: '/profile', component: Profile, isAuthProtected: true},
    // this route should be at the end of all routes
    {path: '/', component: Home, isAuthProtected: true},
    {path: "/", exact: true, component: () => <Redirect to='/login'/>},
];


const publicRoutes = [
    {path: "/login", component: Login},
    {path: "/register", component: Register},
    {path: "/forgotPassword", component: ForgotPassword},
    {path: "/contact", component: Contact}
];


export {publicRoutes, privateRoutes};



