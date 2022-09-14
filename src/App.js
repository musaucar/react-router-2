import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//page
import Home from './components/Home'
import Users from './components/Users'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/users" component={Users}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;