import React from "react";
import {Route, Redirect} from "react-router-dom";
import {getToken} from "../helpers";


const AppRoute = ({component: Component, layout: Layout, isAuthProtected, ...rest}) => {

    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthProtected && !getToken()) {
                    return (
                        <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
                    );
                }
                return (
                    <>
                        <Component {...props} />
                    </>
                );
            }}
        />
    )
};


export default AppRoute;

