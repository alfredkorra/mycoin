import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import AppRoute from "./routes/route";


import Layout from "./Layout";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './animate.min.css'
import './App.css';
import api from "./api";
import {GET_CURRENT_USER} from "./redux/auth/actionTypes";

toast.configure();

function App() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    useEffect(() => {
        if (token && user == null) {
            api.get('/profile')
                .then((res)=>{
                    dispatch({type: GET_CURRENT_USER.concat("_SUCCESS"), payload: res});
                })
                .catch((err) => {
                    console.log('profile err', err);
                    dispatch({type: GET_CURRENT_USER.concat("_FAILURE"), payload: err});
                })
        }
    }, [])

    return (
        <div className='App'>
            <Layout>
                <Router>
                    <Switch>
                        {publicRoutes.map((route, idx) => (
                            <AppRoute
                                path={route.path}
                                component={route.component}
                                key={idx}
                                isAuthProtected={false}
                            />
                        ))}
                        {privateRoutes.map((route, idx) => (
                            <AppRoute
                                path={route.path}
                                component={route.component}
                                key={idx}
                                isAuthProtected={true}
                            />
                        ))}
                    </Switch>
                </Router>
            </Layout>
        </div>

    );
}

export default App;
