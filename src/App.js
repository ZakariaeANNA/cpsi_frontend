import './App.css';
import Login from "./Components/Login/Login";
import Home from "./Home";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" >
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <NotificationContainer/>
      </div>
    </Router>
    
  );
}

export default App;
