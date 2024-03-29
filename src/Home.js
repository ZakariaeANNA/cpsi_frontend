import React , { useEffect } from "react";
import Infrastructure from './Components/IT infrastructure/Infrastructure';
import Header from './Components/Header/header';
import SideBar from './Components/SideBar/SideBar';
import Dashboard from "./Components/Dashboard/Dashboard"
import Statistics from './Components/Statistics/statistics';
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DetailsInfrastructure from "./Components/IT infrastructure/DetailsInfrastructure/DetailsInfrastructure";
import Overview from "./Components/Overview/overview";
import AllUsers from "./Components/Users/allUsers";
import Profile from "./Profile/profile";

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
            <div style={{ display : "table-cell" , verticalAlign : "top" , width : "100%" }}>
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
                
                <Route path={"/overview"}>
                    <Overview/>
                </Route>
                <Route path={"/allUsers"}>
                    <AllUsers/>
                </Route>
                <Route path={"/profile"}>
                    <Profile/>
                </Route>
                </Switch>
            </div>
        </div>
        </Router>    
    );
}

export default Home;
