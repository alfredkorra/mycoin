import './App.css';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import AppRoute from "./routes/route";


import Layout from "./Layout";

function App() {
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
