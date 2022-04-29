import './App.css';
import Login from './Components/LoginPage/Form';
import { BrowserRouter as Router, Route,  } from "react-router-dom";

import Layout from "./Layout";

function App() {
    return (
        <div className='App'>
            <Layout>
                    <Router>
                        <Route path="/login" component={Login}/>

                    </Router>

            </Layout>
        </div>

    );
}

export default App;
