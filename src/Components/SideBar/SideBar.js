import './SideBar.scss';
import { Link , useHistory } from "react-router-dom";
import React , { useState , useEffect } from 'react';
import { Speed , Analytics , Equalizer , MoreHoriz, Restore , ViewStream ,AccountCircle, Group } from "@mui/icons-material";
import { useSelector } from "react-redux";
const SideBar = () => {

    const [ Display , setDisplay] = useState(true);
    const [ size , setSize ] = useState(25);
    const user = useSelector( (state) => state.userActions )
    const [ location , setLocation ] = useState();
    const UserSys = [ "/overview" , "/allUsers"];
    const history = useHistory();

    useEffect(() => {
        return history.listen((location) => { 
           setLocation(location.pathname);
           console.log(location.pathname);
        }) 
    },[history])

    const handleDisplay = () => {
        setDisplay(!Display);
        if(!Display) setSize(25);
        else setSize(40);
    }


   
    return (
            <div className="sidebar text-center ">
                <div className="top-menu">
                    <ul>
                        <li className="admin-front justify-between px-5">
                            <div className="administrateur flex items-center " style={( Display ? {display:"block"} :{display:"none"})} >
                                <span className=' font-bold text-xl'>Admin</span>
                            </div>
                            <MoreHoriz onClick={handleDisplay} sx={{ fontSize: 40 }}/>
                        </li>
                        { UserSys.includes(location) ? (
                            <div>
                                <li className="overview">
                                    <Link to="/overview">
                                        <div className="current-menu-item" >
                                            <div className="flex items-center px-5 space-x-4">
                                                <ViewStream sx={{ fontSize: size }}/>
                                                <div className="side-menu-name" style={( Display ? {display:"block"} :{display:"none"})} >Apercu Géneral</div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="allUsers">
                                    <Link to="/allUsers">
                                        <div className="current-menu-item" > 
                                            <div className="flex items-center px-5 space-x-4">
                                                        <Group sx={{ fontSize: size }}/>
                                                        <div className="side-menu-name" style={( Display ? {display:"block"} :{display:"none"})} >Gestion des utilisateurs</div>
                                                    </div>
                                            </div>
                                    </Link>
                                </li>
                            </div> 
                        ):(
                            <div>
                                {location!=='/profile' ?(
                                <div>
                                    <li className="dashboard">
                                        <Link to="/">
                                            <div className="current-menu-item" >
                                                <div className="flex items-center px-5 space-x-4">
                                                    <Speed sx={{ fontSize: size }}/>
                                                    <div className="side-menu-name" style={( Display ? {display:"block"} :{display:"none"})} >Tableau de bord</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="parc-informatique">
                                        <Link to="/infrastructure">
                                            <div className="current-menu-item" > 
                                                { user.role === "USER" ? (
                                                    <div className="flex items-center px-5 space-x-4">
                                                        <Restore sx={{ fontSize: size }}/>
                                                        <div className="side-menu-name" style={( Display ? {display:"block"} :{display:"none"})} >Pannes</div>
                                                    </div>
                                                ):(
                                                    <div className="flex items-center px-5 space-x-4">
                                                        <Analytics sx={{ fontSize: size }}/>
                                                        <div className="side-menu-name" style={( Display ? {display:"block"} :{display:"none"})} >Parc Informatique</div>
                                                    </div>
                                                )}
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="statistiques">
                                        <Link to="/statistics">
                                            <div className="current-menu-item">
                                                <div className="flex items-center px-5 space-x-4">
                                                    <Equalizer sx={{ fontSize: size }}/>
                                                    <p className="side-menu-name text" style={( Display ? {display:"block"} :{display:"none"})} >Statistiques</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </div>): 
                                (
                                    <div>
                                    <li className="dashboard">
                                        <Link to="/profile">
                                            <div className="current-menu-item" >
                                                <div className="flex items-center px-5 space-x-4">
                                                    <AccountCircle sx={{ fontSize: size }}/>
                                                    <div className="side-menu-name" style={( Display ? {display:"block"} :{display:"none"})} >Profile infos</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </div>
                                )}
                            </div>   
                        )}
                    </ul>
                </div>
            </div>
    );
}

export default SideBar;