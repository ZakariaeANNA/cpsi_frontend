import React from "react";


function AllUsers(){
    return(
        <>
            <div className="container" id="usersList">
                <div className='section-admin'>
                    <div className='outer-block my-16'>
                        <div className="outer-block-header">
                            <div className="outer-block-title flex items-center">
                                <svg onclick="window.location.reload();" xmlns="http://www.w3.org/2000/svg" className="mr-3 rounded-lg cursor-pointer bi bi-people" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                                </svg>
                                <h2>Liste des utilisateurs</h2>
                            </div>
                        </div>
                        <div className='outer-block-body'>
                            <div className="w-full flex justify-center items-center mb-3">
                                <form className="h-10 w-1/2 mr-2 flex justify-between" action="#result">
                                    <input className="w-full mr-0" name="search" type="text" placeholder="Commencez à taper pour rechercher des établissements ..." aria-label="Search" required/>
                                    <button className="w-1/12 btn btn-primary px-4" title="search" name="filter" type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </form>
                                <form className="h-10 w-1/2 flex justify-between" action="#result">
                                    <select className="w-full form-select mr-0" name="typeEtablissement">
                                        <option value="all" selected>Tous Établissements</option>
                                        <option value="lycee">
                                            lycee
                                        </option>
                                        <option value="colleges">
                                            Collèges
                                        </option>
                                        <option value="primaires">
                                            primaires
                                        </option>
                                        <option value="g-scolaire">
                                            g-scolaire
                                        </option>
                                        <option value="unite">
                                            unite
                                        </option>
                                    </select>
                                    <button className="w-1/12 btn btn-primary px-4" name="filter" title="filter" type="submit">
                                        <i className="fas fa-sliders-h"></i>
                                    </button>
                                </form>
                                <div className="btn btn-primary px-4 py-2 ml-1 items-center"><i className="fas fa-times"></i></div>
                            </div>
                            <div class="">
                                <table class="min-w-full text-center table mb-5" style={{fontSize: "12.5px"}}>
                                    <thead>
                                        <tr class="font-semibold text-gray-700">
                                            <th class="px-2">#</th>
                                            <th>Code GRESA</th>
                                            <th>Nom Directeur</th>
                                            <th>Numéro de téléphone	</th>
                                            <th>Nom Établissement</th>
                                            <th class="">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th> 1 </th>
                                            <th> $itemcodeGRESA </th>
                                            <td>
                                                <span class="flex items-center justify-center">
                                                    <span style={{color: "rgba(196, 13, 0, 0.44)"}}><i class="fas fa-user-circle mr-1"></i>
                                                    </span> 
                                                    <span>$itemname</span>
                                                </span>        
                                            </td>
                                            <td>
                                                <span class="table-label default">
                                                    <span>nulle</span>
                                                </span>
                                            </td>
                                            <td> $itemnameEtab</td>
                                            <td class="">
                                                <div class="flex items-center justify-center">
                                                    <div class="tooltip">
                                                        <a href="{{route('admin.users.index.user.history',$item->codeGRESA)}}" name="history" class="btn btn-main m-0 flex items-center">
                                                            <img src={'../svg/tracking.svg'} class="h-4 w-4" alt="<?= keywords ?>"/>
                                                        </a>
                                                        <span class="tooltiptext">Historique</span>
                                                    </div>
                                                    <div class="tooltip mx-1">
                                                        <a href="{{route('admin.users.index.user.edit',$item->codeGRESA)}}" name="edit" class="btn btn-main m-0 flex items-center">
                                                            <i class="fas fa-user-edit text-xs"></i>
                                                        </a>
                                                        <span class="tooltiptext" style={{fontSize: "12px", width: "40px", marginLeft: "-20px;"}}>Éditer</span>
                                                    </div>
                                                    <div class="tooltip">
                                                        <button onclick="toggleModalUserPassword()" data-code="{{$item->codeGRESA}}" data-old="{{$FunctionsController->decryptData($item->password)}}" name="password" class="toggleModalUserPasswordButton btn btn-main m-0 flex items-center" data-bs-toggle="modal" data-bs-target="#modalUserPassword">
                                                            <i class="fas fa-lock text-xs"></i>
                                                        </button>
                                                        <span class="tooltiptext" style={{fontSize: "12px", width: "90px", marginLeft: "-45px"}}>Mot de Passe</span>
                                                    </div>
                                                        <div class="tooltip mx-1">
                                                            <button onclick="toggleModalUserVue()"
                                                                data-name="{{ucwords($item->name)}}"
                                                                data-codegresa="{{$item->codeGRESA}}" 
                                                                data-typeetab="{{ucwords($item->typeEtab)}}"
                                                                data-nameetab="{{$item->nameEtab}}"
                                                                data-delegation="{{$item->delegation}}"
                                                                data-email="{{$item->email}}" 
                                                                data-phone="{{$item->phone}}" 
                                                                data-online="{{$item->online}}"
                                                                data-logout=""
                                                                data-signin=""
                                                                data-avg=""
                                                                name="Vue" class="modalUserVueButton btn btn-main m-0 flex items-center" data-bs-toggle="modal" data-bs-target="#modalUserVue"><i class="far fa-eye text-xs"></i>
                                                            </button>
                                                            <span class="tooltiptext" style={{fontSize: "12px", width: "40px", marginLeft: "-20px;"}}>Vue</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="modalUserVue">
                                        <div class="flex items-center justify-center min-height-200vh pt-4 px-4 pb-40 text-center sm:block sm:p-0">
                                            <div class="fixed inset-0 transition-opacity">
                                                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                                                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                                                        <div class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full" style={{marginTop: "0%"}} role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                                                            <div class="flex items-center justify-center w-full card-header py-3">
                                                                <div class="mr-6">
                                                                    <div id="profile"></div>
                                                                </div>
                                                                <div>
                                                                    <ul class="items-center">
                                                                        <li class="">
                                                                            <div class="font-bold text-xl" id="name"></div>
                                                                        </li>
                                                                        <li class="mt-1">
                                                                            <div class="text-sm font-semibold" id="email"></div>
                                                                        </li>
                                                                        <li class="flex items-center">
                                                                            <span id="online"></span><div class="text-sm font-semibold" id="phone"></div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <form action="" class="bg-white p-4">            
                                                                <div class="flex items-start justify-between w-full">
                                                                    <div class="w-1/2">
                                                                        <div class="card ">
                                                                            <div class="card-header py-3 px-4">
                                                                                <p class="flex items-center">
                                                                                    <img src={'../svg/school.svg'} alt="<?=keywords?>" class="h-6 w-6 mr-4"/> 
                                                                                    <span>Établissement scolaire Infos</span>
                                                                                </p>
                                                                            </div>
                                                                            <ul class="items-center card-body py-3 px-4">
                                                                                <li class="list-group-item flex justify-between items-center">
                                                                                    <div>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                                                                                            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                                                                                            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <div class="text-gray-500 font-semibold" id="codegresa"></div>
                                                                                </li>
                                                                                <li class="list-group-item flex justify-between items-center my-2">
                                                                                    <div>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
                                                                                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                                                                                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <div class="text-gray-500 font-semibold" id="typeetab"></div>
                                                                                </li>
                                                                                <li class="list-group-item flex justify-between items-center my-2">
                                                                                    <div>
                                                                                        <img src={'../svg/school-svgrepo-com.svg'} alt="<?=keywords?>" class="h-4 w-4"/>
                                                                                    </div>
                                                                                    <div class="text-gray-500 font-semibold" id="nameetab"></div>
                                                                                </li>
                                                                                <li class="list-group-item flex justify-between items-center">
                                                                                    <div>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                                                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                                                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <div class="text-gray-500 font-semibold" id="delegation"></div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="card my-4">
                                                                        <div class="card-header py-3 px-4">
                                                                            <p class="flex items-center">
                                                                                <i class="fas fa-user-tie mr-4 text-xl"></i> 
                                                                                <span>Profile Personnel Infos</span>
                                                                            </p>
                                                                        </div>
                                                                        <ul class="items-center card-body py-3 px-4">
                                                                            <li class="list-group-item flex justify-between items-center">
                                                                                <span>
                                                                                    <span class="text-xs text-gray-500 font-bold">DATE D'NAISSANCE</span>
                                                                                </span>
                                                                                <div class="text-gray-500 font-semibold" id="birthday"></div>
                                                                            </li>
                                                                            <li class="list-group-item flex justify-between items-center">
                                                                                <span>
                                                                                    <span class="text-xs text-gray-500 font-bold">GENDER</span>
                                                                                </span>
                                                                                <div class="text-gray-500 font-semibold" id="gender"></div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="ml-4 w-1/2">
                                                                    <div class="card">
                                                                        <div class="card-header py-3 px-4">
                                                                            <p class="flex items-center">
                                                                                <img src={'../svg/tracking.svg'} class="mr-3" alt="<?= keywords ?>"/> <span>Tracking directeur</span>
                                                                            </p>
                                                                        </div>
                                                                        <ul class="items-center card-body py-3 px-4">
                                                                            <li class="list-group-item">
                                                                                <span>
                                                                                    <span class="text-xs text-gray-500 font-bold">Dernière Signin :</span>
                                                                                </span>
                                                                                <div class="text-gray-500 font-semibold"><span id="signin"></span></div>
                                                                            </li>
                                                                            <li class="list-group-item my-4">
                                                                                <span>
                                                                                    <span class="text-xs text-gray-500 font-bold">Dernière Logout :</span>
                                                                                </span>
                                                                                <div class="text-gray-500 font-semibold"><span id="logout"></span></div>
                                                                            </li>
                                                                            <li class="list-group-item flex justify-between items-center">
                                                                                <span>
                                                                                    <span class="text-xs text-gray-500 font-bold">Moyenne Durée Visite :</span>
                                                                                </span>
                                                                                <div class="text-gray-500 font-semibold"><span id="avg"></span></div>
                                                                            </li>
                                                                        </ul>                    
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="text-right">
                                                                <button type="button" class="w-1/12 btn btn-outline-secondary py-2" onclick="toggleModalUserVue()">Annuler</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="modalUserPassword">
                                            <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                                <div class="fixed inset-0 transition-opacity">     
                                                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                                                        <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                                                            <div class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                                                                <div class="card-header p-3">
                                                                    <h3 class="font-semibold text-xl"><i class="fas fa-lock text-primary ml-1 mr-3"></i> Changer Mot de Passe</h3>
                                                                </div>
                                                                <form action="{{route('admin.users.index.updatePassword')}}" method="POST" class="p-4">
                                                                <div>
                                                                    <span id="code"></span>
                                                                </div>
                                                                <div class="mt-2 mb-3 inputContainer">
                                                                    <label><span class="text-sm text-gray-500 font-bold">Ancien mot de passe</span></label>
                                                                    <div class="flex items-center field">
                                                                        <input type="password" class="w-full p-2" maxlength="50" name="oldPassword" id="old" value="" required/>
                                                                        <i class="fas fa-eye"></i>
                                                                    </div>
                                                                </div>
                                                                <div class="mt-2 mb-3">
                                                                    <label><span class="text-sm text-gray-500 font-bold">Nouveau Mot de passe</span></label>
                                                                    <input type="password" class="w-full p-2" maxlength="50" name="newPassword" required/>
                                                                </div>
                                                                <div class="mt-2 mb-3">
                                                                    <label><span class="text-sm text-gray-500 font-bold">Confirmez Nouveau Mot de passe</span></label>
                                                                    <input type="password" class="w-full p-2" maxlength="50" name="confirmPassword" required/>
                                                                </div>
                                                                <div class="pt-4 text-right">
                                                                    <button type="button" class="btn btn-outline-secondary px-4 py-2" onclick="toggleModalUserPassword()">Cancel</button>
                                                                    <button type="submit" class="btn btn-primary px-4 py-2 ml-2">Changer Mot de Passe</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3> <img src={'../svg/void.svg'} className="mx-auto h-44 w-44 mt-5" alt=""/> </h3>
                                        <p className="text-center font-semibold text-gray-500 my-5 text-2xl">Rien n'a été trouvé</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className='footer-toolbar border-top flex justify-end items-center'>
                            <a className="text-decoration-none text-center btn btn-primary action flex items-center" 
                                href="{{route('admin.users.index.create')}}" style={{width: "210px", padding: "10px 14px"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-2 bi bi-plus-circle" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg> &nbsp;<span> Ajouter un Utilisateur</span>
                            </a>
                        </footer>
    </>
    )
}

export default AllUsers