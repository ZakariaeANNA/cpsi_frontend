import React from "react";
import './statistics.scss'


function Statistics(){
    return(
        <div className="container" id="statistiques">
            <div className='section-admin'>
                <div className="page-wrapper">
                    <div className="page-header w-full items-center my-8" id="statistiqueHeader">
                        <div className="flex justify-center items-center" style={{width: "30%"}}>
                            <form className="flex justify-between w-full" action="#result">
                                <input className="w-full mr-0" name="search" type="text" placeholder="Chercher des établissements Par CODE GRESA ..." aria-label="Search" value="<?php if(isset($_GET['search'])){ echo $_GET['search']; } ?>" required/>
                                <button className="btn btn-primary px-4" title="search" name="filter" type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                        <ul className="page-actions font-semibold">
                            <li>
                                <form className="" action="">
                                    <input type="hidden" name="type" value="all"/>
                                    <button className="btn btn-outline-primary py-2 px-4" title="" type="submit">Tous les Établissements</button>
                                </form>
                            </li>
                            <li>
                                <form className="" action="">
                                    <input type="hidden" name="type" value="lycee"/>
                                    <button className="btn btn-outline-primary py-2 px-4" title="" type="submit">Lyceés</button>
                                </form>
                            </li>
                            <li>
                                <form className="" action="">
                                    <input type="hidden" name="type" value="college"/>
                                    <button className="btn py-2 px-4" title="" type="submit">Collèges</button>
                                </form>
                            </li>
                            <li>
                                <form className="" action="">
                                    <input type="hidden" name="type" value="primaire"/>
                                    <button className="btn @php btn-outline-primary py-2 px-4" title="" type="submit">Écoles Primaires</button>
                                </form>
                            </li>
                            <li>
                                <form className="" action="">
                                    <input type="hidden" name="type" value="groupe-scolaire"/>
                                    <button className="btn btn-outline-primary py-2 px-4" title="" type="submit">Groupe Scolaire</button>
                                </form>
                            </li>
                            <li>
                                <form className="" action="">
                                    <input type="hidden" name="type" value="unite"/>
                                    <button className="btn btn-outline-primary py-2 px-4" title="" type="submit">Unité Scolaire</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                    <div className="page-body mb-8">
                        <div className="main-bar w-3/4">
                            <div className="is-grid" id="statistiqueChart">
                                <div className="min-w-full text-center">
                                    <div className="outer-block has-padding">
                                        <div className="outer-block-header">
                                            <div className="outer-block-title">
                                                <h2>Statistiques des équipements pour chaque département</h2>
                                            </div>
                                            <div className="outer-block-title">
                                                <ul className="font-semibold flex items-center justify-center tablist" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                                    <li className="mr-2" role="presentation">
                                                        <button className="btn btn-outline-primary py-2 px-4 active" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">Bar Chart</button>
                                                    </li>
                                                    <li className="mr-2" role="presentation">
                                                        <button className="btn btn-outline-primary py-2 px-4" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Line Chart</button>
                                                    </li>
                                                    <li role="presentation">
                                                        <button className="btn btn-outline-primary py-2 px-4" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Pie Chart</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="outer-block-body">
                                            <div id="myTabContent">
                                                <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                    <canvas id="lineChart"></canvas>
                                                </div>
                                                <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                                    <canvas id="barChart"></canvas>
                                                </div>
                                                <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                                                    <div className="flex justify-between items-center p-0">
                                                        <div className="w-1/2 mr-2">
                                                            <div className="card">
                                                                <h6 className="card-header p-3 font-size: 15px">
                                                                    <i className="fas fa-plug"></i> &nbsp; L'équipement d'informatique qui fonctionne
                                                                </h6>
                                                                <div className="card-body p-3 text-center">              
                                                                    <div className="single-chart">       
                                                                        <svg viewBox="0 0 36 36" className="circular-chart green">
                                                                            <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                                                            <path className="circle" stroke-dasharray="@php echo round($result,2) @endphp, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                                                            <text x="18" y="20.35" className="percentage">
                                                                                php echo round($result,2) . "%"; @endphp
                                                                            </text>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="flex justify-end h-10 mr-4">
                                                                    <h3 className="success-value font-bold text-lg">test value</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-1/2 ml-2">
                                                            <div className="card">
                                                                <h6 className="card-header p-3 font-size: 15px">
                                                                    <i className="fas fa-power-off"></i> &nbsp; Équipement d'informatique ne fonctionne pas
                                                                </h6>
                                                                <div className="card-body p-3 text-center">
                                                                    <div className="single-chart">
                                                                        <svg viewBox="0 0 36 36" className="circular-chart orange">
                                                                            <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                                                            <path className="circle" stroke-dasharray="@php echo round($result,2) @endphp, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                                                            <text x="18" y="20.35" className="percentage">
                                                                                @php echo round($result,2) . "%"; @endphp
                                                                            </text>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="flex justify-end h-10 mr-4">
                                                                    <h3 className="danger-value font-bold text-lg">Total :  </h3>
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
                        <div className="side-bar w-1/4">
                            <div className="outer-block has-padding">
                                <div className="outer-block-header">
                                    <div className="outer-block-title">
                                        <h2>Total</h2>
                                    </div>
                                </div>
                                <div className="outer-block-body">
                                    <div className="is-grid">
                                        <div className="stats-box">
                                            <h3 className="title">Total des Équipements</h3>
                                            <span className="value">
                                                288
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="stats-box w-1/2 text-center margin-right: 20px box-shadow: 5px 5px 5px #aaaaaa1e">
                                                <h3 className="title">Fonctionnel</h3>
                                                <span className="value">
                                                    423
                                                </span>
                                            </div>
                                            <div className="stats-box w-1/2 text-center box-shadow: -5px 5px 5px #aaaaaa1e">
                                                <h3 className="title">En Panne</h3>
                                                <span className="value">
                                                    355
                                                </span>
                                            </div>
                                        </div>
            
                                        <div className="flex items-center justify-between w-full">
                                            <div className="stats-box w-1/2 text-center margin-right: 20px; box-shadow: 5px -5px 5px #aaaaaa1e">
                                                <div className="tooltip mt-4">
                                                    <span className="value">
                                                        <span>
                                                            0.00%
                                                        </span>
                                                    </span>
                                                    <span className="tooltiptext">
                                                        0.00%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="stats-box w-1/2 box-shadow: -5px -5px 5px #aaaaaa1e">
                                                <div className="tooltip mt-4">
                                                    <span className="value">
                                                        <span>
                                                            0.00%
                                                        </span>
                                                    </span>
                                                    <span className="tooltiptext">
                                                        0.00%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="is-grid grid-5" id="statistiqueStatBox">
                        <div className="stats-box">
                            <p className="title">items</p>
                            <div className="flex items-center justify-between">
                                <span className="value">
                                </span>
                                <span className="percent">
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <span className="percent-value mx-1">
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-graph-down-arrow" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </span>
                            </div>      
                        </div>
                    </div> 
                </div>
                <div className="outer-block mt-8" id="statistiqueTable">
                    <h6 className="outer-block-header p-3">
                        <span className="outer-block-title font-semibold">
                            <i className="fas fa-laptop mr-3"></i> <span>La fonctionnalité des équipement d'information</span>
                        </span> 
                    </h6>
                    <div className="outer-block-body text-center">
                        <div className="">
                            <table className="min-w-full text-center p-2 font-size: 15px">
                                <thead>
                                <tr className="font-semibold text-gray-700">
                                    <th scope="col"><span>Type d'équipement d'informatique</span></th>
                                    <th scope="col"><span>Nombre Total</span></th>
                                    <th scope="col"><span>Nombre Total qui fonctionne</span></th>
                                    <th scope="col"><span>Le nombre Total ne fonctionne pas</span></th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-100">
                                        <td>test</td>
                                        <td className='font-semibold'>". </td>
                                        <td>0</td>
                                        <td className='font-semibold'>". $output ."</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td>test1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics