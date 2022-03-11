import "./Dashboard.scss";

const Dashboard = () => {
    return (
        <div class="container" id="homeDashboard">
            <div>
                <div class='section-admin'>
                    <h3 class="welcome-area text-2xl lg:text-3xl font-semibold text-center">
                        Bienvenue <span class="text-primary"> Admin </span>
                    </h3>
                    <div class="is-grid">
                        <div class='outer-block has-padding'>
                            <div class="outer-block-header"><div class="outer-block-title"><h2>Présentation Tableau de bord</h2></div></div>
                            <div class='outer-block-body'>
                                <div class="is-grid grid-2">

                                    <div class="inner-block has-padding">
                                        <div class="block-header">
                                            <div class="block-title">
                                                <h2><i class="fas fa-laptop"></i> Total Équipements Informatique</h2>
                                            </div>
                                        </div>
                                        <div class="block-content">
                                            <div class="dashboard-widgets">
                                                <div class="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 class="title">Aujourd'hui</h5> <span class="value">
                                                     1
                                                    </span>
                                                </div> 
                                                <div class="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 class="title">Hier</h5> <span class="value">
                                                     2
                                                    </span>
                                                </div> 
                                                <div class="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 class="title">Cette semaine</h5> <span class="value">
                                                     4
                                                    </span>
                                                </div> 
                                                <div class="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 class="title">Ce mois</h5> <span class="value">
                                                     6
                                                    </span>
                                                </div> 
                                                <div class="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 class="title">Cette année</h5> <span class="value">
                                                     7
                                                    </span>
                                                </div> 
                                                <div class="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 class="title">Tout le temps</h5> <span class="value">
                                                    11
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="inner-block has-padding">
                                        <div class="block-header">
                                            <div class="block-title">
                                                <h2><i class="fas fa-laptop-code"></i> Total des fonctionnalité</h2>
                                            </div>
                                        </div>
                                        <div class="block-content">
                                            <div class="dashboard-widgets">
                                                <div class="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 class="title">Fonctionnel</h5> 
                                                    <span class="value">
                                                    <span>
                                                     45
                                                    </span>
                                                    <span>
                                                        545
                                                        <span class="success-value mx-1 text-sm">
                                                            @php echo '('.round($result,2) . "%)"; @endphp
                                                        </span>
                                                    </span>
                                                    </span>
                                                </div> 
                                                <div class="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 class="title">En Panne</h5> 
                                                    <span class="value">
                                                        <div>
                                                            <span>
                                                                45
                                                            </span>
                
                                                            <span>
                                                                454
                                                                <span class="danger-value mx-1 text-sm">
                                                                    @php echo '('.round($result,2) . "%)"; @endphp
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