import React , { useEffect } from "react";
import Infrastructure from './Components/IT infrastructure/Infrastructure';
import Header from './Components/header/header';
import SideBar from './Components/SideBar/SideBar';
import Dashboard from "./Components/Dashboard/Dashboard"
import Statistics from './Components/statistics/statistics';
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DetailsInfrastructure from "./Components/IT infrastructure/DetailsInfrastructure/DetailsInfrastructure";

function Home() {

    const user = useSelector( (state) => state.userActions )
    const history = useHistory();

    useEffect( ()=>{ 
        if(user.loggedIn === false || user.loggedIn === undefined)
            history.replace("/login");
    })

    return (
        <Router>
        <div className="Home">
            <SideBar />
            <Header />
            <Switch>
                <Route exact path="/" >
                    <Dashboard />
                </Route>
                <Route path="/infrastructure">
                    <Infrastructure />
                </Route>
                <Route path="/statistics">
                    <Statistics />
                </Route>
                <Route path="/Details">
                    <DetailsInfrastructure />
                </Route>
            </Switch>
        </div>
        </Router>    
    );
}

export default Home;
