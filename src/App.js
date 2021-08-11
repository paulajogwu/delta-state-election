import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
     
      
      </Switch>
    </Router>
   
  );
}

export default App;
