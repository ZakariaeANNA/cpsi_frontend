import React from "react";
import { Link } from "react-router-dom";
import './header.scss'



function Header(){
    function changeStat() {
        document.querySelector('#applications-block-content').classList.toggle('active');
        document.querySelector('#user-block-content').classList.remove('active')
    
        var img = document.getElementById('apps').src;
          if (img === '../svg/apps-svgrepo-com.svg') {
            document.getElementById('apps').src = "../svg/apps-sharp-svgrepo-com.svg";
          } else if (img === '../svg/apps-sharp-svgrepo-com.svg') {
            document.getElementById('apps').src = '../svg/apps-svgrepo-com.svg';
          }
    }
    function changeUserStat(){
        document.querySelector('#user-block-content').classList.toggle('active')
        document.querySelector('#applications-block-content').classList.remove('active')
        document.getElementById('apps').src = "../svg/apps-svgrepo-com.svg";
    }
    function hideToggles(){
        document.querySelector('#user-block-content').classList.remove('active')
        document.querySelector('#applications-block-content').classList.remove('active')
    }
    document.body.addEventListener('click',hideToggles,true)
    return(
        <header className="app-header">
            <div className="left-side">
                <div className="header-element">
                <div className="app-block">
                    <a href="@yield('application-link')">
                    <span className="app">
                        <span className="logo">
                        <span className="app-logo hidden lg:block"><i className="fas fa-laptop-code"></i>Gestion de Parc Informatique</span>
                        </span>
                    </span>
                    </a>
                </div>
                </div>
            </div>
            <div className="right-side full-width">
                <div className="header-element">
                    <div className="applications-block dropdown">
                        <span className="applications">
                            <span id="applications-block-toggle" className="icon applications-content" onClick={()=>changeStat()}>
                                <img id="apps" src={'../svg/apps-svgrepo-com.svg'} alt='apps'/>
                            </span>
                            <div id="applications-block-content" className="dropdown-content right: 10px; width:250px;">
                            <div className="dropdown-header">
                                <ul className="dropdown-list">
                                <li className="with-icon">
                                    <Link to={"/"}>
                                        <a className="transform hover:translate-x-1 transition duration-300" target="_blank" href="{{ route('home.index') }}">
                                            <div className="flex justify-start items-center">
                                            <div><img src={'../svg/laptop-svgrepo-com.svg'} className="h-4 mr-4" alt=""/></div>
                                            <span className="text-sm">Gestion Parc Informatique</span>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            <div className="dropdown-header">
                                <ul className="dropdown-list">
                                <li className="with-icon">
                                    <Link to={"/allUsers"}>
                                        <a className="transform hover:translate-x-1 transition duration-300" target="_blank" 
                                        href="{{ route('admin.formations.index') }}">
                                            <div className="flex justify-start items-center">
                                            <div><img src={'../svg/notebook-svgrepo-com.svg'} className="h-4 mr-4" alt=""/></div>
                                            <span className="text-sm">Gestion des Formations</span>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            <div className="dropdown-body">
                                <ul className="dropdown-list">
                                <li className="with-icon">
                                    <Link to={"/overview"}>
                                        <a className="transform hover:translate-x-1 transition duration-300" target="_blank" href="{{route('admin.users.index.overview')}}">
                                        <div className="flex justify-start items-center">
                                            <div><img src={'../svg/account-svgrepo-com.svg'} className="h-4 mr-4" alt=""/></div>
                                            <span className="text-sm">Gestion Utilisateurs</span>
                                        </div>
                                        </a>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="header-element">
                <div className="user-block dropdown">
                    <div id="user-block-toggle" className="dropdown-toggle" onClick={()=>changeUserStat()}>
                    <img src={"../BXqufpGLvxfvtH3k/1644501375.svg"} className="rounded-full border-2 border-gray-100" alt=""/>
                    </div>

                    <div id="user-block-content" className="dropdown-content">
                    <div className="dropdown-header">
                        <span className="directeur-name">
                        <span>hello2</span>
                        </span>
                        <h6 className="code-gresa">Code GRESA: <a href="{{route('app.profile.index.home')}}" target="_blank">5343L</a></h6>
                    </div>
                    <div className="dropdown-body">
                        <ul className="dropdown-list">
                        <li className="with-icon">
                            <a className="transform hover:translate-x-1 transition duration-300" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                            <div className="flex justify-start items-center">
                                <div><img src={'../svg/logout-svgrepo-com.svg'} className="h-4 mr-2" alt=""/></div>
                                <span>Se Déconnecter</span>
                            </div>
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" className="d-none">
                            </form>
                        </li>
                        </ul>
                    </div>
                    </div>

                </div>
                </div>
            </div>
        </header>
    )
}

export default Header