import "./Dashboard.scss";

const Dashboard = () => {
    return (
        <div className="container" id="homeDashboard">
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
        </div>

    );
}

export default Dashboard;