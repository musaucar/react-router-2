import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

//page
import Home from './components/Home'
import Users from './components/Users'
import About from './components/About'
import Error404 from './components/Error404.js'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink activeStyle={{backgroundColor:"yellow"}} exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeStyle={{backgroundColor:"yellow"}} exact to="/about">About</NavLink>
              </li>
              <li>
                <NavLink activeStyle={{backgroundColor:"yellow"}} exact to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/users" component={Users}/>
            <Route path="*" component={Error404}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
