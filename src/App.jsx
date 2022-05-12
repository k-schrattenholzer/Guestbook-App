import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';
import Login from './views/Auth/Login.jsx';
import Home from './views/Home/Home'
import Layout from './views/Layout/Layout'


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Layout> 
    </Router>
    
  );
}

export default App;
