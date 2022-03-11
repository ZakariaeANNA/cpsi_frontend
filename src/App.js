import './App.css';
import Header from './Components/header/header';
import SideBar from './Components/SideBar/SideBar';
import Dashboard from "./Components/Dashboard/Dashboard"
import Statistics from './Components/statistics/statistics';

function App() {
  return (
    <div className="App">
       <SideBar />
      <Header/>
      <Dashboard />
      <Statistics />
    </div>
  );
}

export default App;
