import "./Dashboard.scss";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Computer } from "@mui/icons-material"; 
import { useHistory } from "react-router-dom";

const Dashboard = () => {
    const user = useSelector( (state) => state.userActions )
    const [ fetching , setFetching ] = useState(false);
    const history = useHistory();
    const handleContinue = () => {
        history.replace("/Details");
    }

    if(user.role === "USER")
        return (
            <div className="container">
                <section className="app-informatique-index">
                    <div className="w-full">
                        <div className="flex justify-between">
                        <h5 className="mb-2 font-bold">
                            <span>Établissement Scolaire</span>
                            <span className="text-primary"> dfff</span>
                        </h5>
                        </div>
                        <div className="flex justify-between">
                            <h6 className="hidden lg:block">
                                <span>Départements de Parc Informatique</span>
                                <span className="text-primary">
                                    (9)
                                </span>
                            </h6>
                        </div>
                        <div className="flex flex-row flex-wrap space-x-2">
                            <div className="my-6 flex">
                                <div className="wrapperGrid fit">
                                    <div className="card-shadow text-center">
                                    <div className="card-body p-3">
                                        <div className="flex justify-between items-center">
                                            <div className="departements-item-desc card-text w-3/4">dfdf</div>
                                            <div className="card-text w-1/4">
                                            <Computer className="h-8 w-8 mx-auto" alt="" />  
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer p-3 flex justify-between align-center">
                                        <div className="font-semibold text-primary">Total : 9
                                        </div>                  
                                        <div className="btn-continue font-semibold mr-2 transform hover:translate-x-1 transition duration-300">
                                        <div className="text-primary" onClick={handleContinue}>Continue <i className="fas fa-arrow-circle-right"></i></div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-6 flex">
                                <div className="wrapperGrid fit">
                                    <div className="card-shadow text-center">
                                    <div className="card-body p-3">
                                        <div className="flex justify-between items-center">
                                            <div className="departements-item-desc card-text w-3/4">dfdf</div>
                                            <div className="card-text w-1/4">
                                            <Computer className="h-8 w-8 mx-auto" alt="" />  
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer p-3 flex justify-between align-center">
                                        <div className="font-semibold text-primary">Total : 9
                                        </div>                  
                                        <div className="btn-continue font-semibold mr-2 transform hover:translate-x-1 transition duration-300">
                                        <a className="text-primary" href="{{ route('app.informatique.departement.show' , $item->id) }}">Continue <i className="fas fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );

    return (
        <div className="container" id="homeDashboard">
            {   fetching ? (
                <Box sx={{ display: 'flex' , position : "absolute" , top : "50%" , left : "50%" }}>
                 <CircularProgress />
                </Box>
            ):(
                <div>
                    <div className='section-admin'>
                        <h3 className="welcome-area text-2xl lg:text-3xl font-semibold text-center">
                            Bienvenue <span className="text-primary"> Admin </span>
                        </h3>
                        <div className="is-grid">
                            <div className='outer-block has-padding'>
                                <div className="outer-block-header"><div className="outer-block-title"><h2>Présentation Tableau de bord</h2></div></div>
                                <div className='outer-block-body'>
                                    <div className="is-grid grid-2">

                                        <div className="inner-block has-padding">
                                            <div className="block-header">
                                                <div className="block-title">
                                                    <h2><i className="fas fa-laptop"></i> Total Équipements Informatique</h2>
                                                </div>
                                            </div>
                                            <div className="block-content">
                                                <div className="dashboard-widgets">
                                                    <div className="dashboard-widget is-flex align-center justify-space-between">
                                                        <h5 className="title">Aujourd'hui</h5> <span className="value">
                                                        1
                                                        </span>
                                                    </div> 
                                                    <div className="dashboard-widget is-flex align-center justify-space-between">
                                                        <h5 className="title">Hier</h5> <span className="value">
                                                        2
                                                        </span>
                                                    </div> 
                                                    <div className="dashboard-widget is-flex align-center justify-space-between">
                                                        <h5 className="title">Cette semaine</h5> <span className="value">
                                                        4
                                                        </span>
                                                    </div> 
                                                    <div className="dashboard-widget is-flex align-center justify-space-between">
                                                        <h5 className="title">Ce mois</h5> <span className="value">
                                                        6
                                                        </span>
                                                    </div> 
                                                    <div className="dashboard-widget is-flex align-center justify-space-between">
                                                        <h5 className="title">Cette année</h5> <span className="value">
                                                        7
                                                        </span>
                                                    </div> 
                                                    <div className="dashboard-widget is-flex align-center justify-space-between">
                                                        <h5 className="title">Tout le temps</h5> <span className="value">
                                                        11
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="inner-block has-padding">
                                            <div className="block-header">
                                                <div className="block-title">
                                                    <h2><i className="fas fa-laptop-code"></i> Total des fonctionnalité</h2>
                                                </div>
                                            </div>
                                            <div className="block-content">
                                                <div className="dashboard-widgets">
                                                    <div className="dashboard-widget is-flex align-center justify-space-between">
                                                        <h5 className="title">Fonctionnel</h5> 
                                                        <span className="value">
                                                        <span>
                                                        45
                                                        </span>
                                                        <span>
                                                            545
                                                            <span className="success-value mx-1 text-sm">
                                                                (67,5%)
                                                            </span>
                                                        </span>
                                                        </span>
                                                    </div> 
                                                    <div className="dashboard-widget is-flex align-center justify-space-between">
                                                        <h5 className="title">En Panne</h5> 
                                                        <span className="value">
                                                            <div>
                                                                <span>
                                                                    45
                                                                </span>
                    
                                                                <span>
                                                                    454
                                                                    <span className="danger-value mx-1 text-sm">
                                                                    (37,5%)
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </span>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            )}
        </div>
    );
}

export default Dashboard;