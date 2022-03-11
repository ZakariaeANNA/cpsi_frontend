import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login/Login";
import Header from './header/header';
import SideBar from './Components/SideBar/SideBar';
import Dashboard from "./Components/Dashboard/Dashboard"

function App() {
  return (
    <div className="App">
       <SideBar />
      <Header/>
      <Dashboard />
    </div>
  );
}

export default App;
