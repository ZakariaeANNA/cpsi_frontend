import React from 'react'


function Overview(){
    return(
            <div className="container" id="usersDashboard">
                <div>
                    <div className='section-admin'>
                        <div className="text-center my-6 flex items-center justify-center w-full">
                            <div className="w-1/2">
                                <h5 className="font-semibold text-2xl my-2">Informations personnelles et options pour les gérer.</h5>
                                <p className="text-gray-500">Vous pouvez rendre certaines de ces informations, comme quelque coordonnées, pour faciliter la communication avec les établissements</p>
                            </div>
                            <img src={'../svg/User Group_Monochromatic.svg'} className="h-32 w-32 mx-6" alt="@php echo keywords; @endphp"/>
                        </div>
                        <div className="is-grid">
                            <div className='outer-block has-padding'>
                                <div className='outer-block-body'>
                                    <div className="is-grid grid-2">
                                        <div className="inner-block has-padding">
                                            <div className="block-header">
                                                <div className="block-title">
                                                    <h2><img src={'../svg/school.svg'} alt="<?=keywords?>" className="h-6 w-6 mr-4"/> Total Établissements scolaire</h2>
                                                </div>
                                            </div>
                                            <div className="block-content">
                                                <div className="dashboard-widgets">
                                                    <div className="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 className="title">Tous Établissements</h5> <span className="value">
                                                    </span>
                                                </div>
                                                <div className="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 className="title">Lyceés</h5> 
                                                    <span className="value">
                                                        11
                                                    </span>
                                                </div>
                                                <div className="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 className="title">Collèges</h5> 
                                                    <span className="value">
                                                        26
                                                    </span>
                                                </div>
                                                <div className="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 className="title">Écoles Primaires</h5> <span className="value">
                                                        12
                                                    </span>
                                                </div>
                                                <div className="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 className="title">Groupe Scolaire</h5> <span className="value">
                                                        11
                                                    </span>
                                                </div>
                                                <div className="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 className="title">Unité Scolaire</h5> <span className="value">
                                                        23
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inner-block has-padding">
                                        <div className="block-header">
                                            <div className="block-title">
                                                <h2><i className="fas fa-user-tie"></i> Total des utilisateurs</h2>
                                            </div>
                                        </div>
                                        <div className="block-content">
                                            <div className="dashboard-widgets">
                                                <div className="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 className="title">Utilisateurs en ligne</h5> 
                                                    <span className="value">
                                                        34
                                                    </span>
                                                </div>
                                                <div className="dashboard-widget is-flex align-center justify-space-between">
                                                    <h5 className="title">Moyenne Durée Visite</h5> 
                                                    <span className="value">
                                                        12,23
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dashboard-widgets mt-6">
                                                <div className="block-header">
                                                    <div className="block-title">
                                                        <h2>Trafic</h2>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="dashboard-widget flex items-center justify-between">
                                                        <div className="text-center">
                                                            <h5 className="title">Aujourd'hui</h5>
                                                            <span className="value">
                                                                12
                                                            </span>
                                                        </div>
                                                        <div className="text-center">
                                                            <h5 className="title">Hier</h5>
                                                            <span className="value">
                                                                7
                                                            </span>
                                                        </div>
                                                        <div className="text-center">
                                                            <h5 className="title">Dernier 7 jours</h5>
                                                            <span className="value">
                                                                5
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
            </div>
        </div>

//@include('app.layouts.footer')
    )
}
export default Overview