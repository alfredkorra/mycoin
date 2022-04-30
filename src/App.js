import Login from "./Components/LoginPage/Form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Form  from "./Components/LoginPage/Form";
import Layout from "./Layout";
import Footer from "./Layout/Footer/Footer";
import './bootstrap.min.css';
import './animate.min.css';
import "./App.css";

function App() {
  return (
    <div className="app">
{ <Layout>
        <Router>
          <Route path="/login" component={Login} />
          <Route path="/form" component={Form} />
          <Form></Form>
        </Router>
      </Layout> }
      <Footer />
    </div>
  );
}

export default App;
