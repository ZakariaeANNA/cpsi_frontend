import React from 'react'



function AddUser(){
    return (
        <>
            <div class="container" id="addUser">
                <div class='section-admin'>
                    <div class='outer-block my-16'>
                        <div class="outer-block-header">
                            <div class="outer-block-title flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" onclick="window.location.reload();" style={{boxShadow: "-4px -3px 85px 0px #00000049;"}} width="25" height="25" fill="currentColor" class="mr-3 bi bi-person-plus" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                                <h2>Ajouter un utilisateurs</h2>
                            </div>
                        </div>
                        <div class='outer-block-body'>
                        <form id="formulaire" action="{{route('admin.users.index.register.user')}}" method="POST" enctype="multipart/form-data">
                            <div class="inner-block has-padding">
                                <div class="block-header">
                                    <div class="block-title">
                                        <h2 class="flex items-center">
                                            <div>Établissement Scolaire</div>
                                        </h2>
                                    </div>
                                </div>
                                <div class="block-content">
                                    <div class="is-grid">
                                        <div class="is-grid grid-5">
                                            <div class="form-group">
                                                <label for="nameEtab" class="form-label">Nom d'Établissement</label>
                                                <input id="nameEtab" maxlength="50" type="text" name="nameEtab" value="{{old('nameEtab')}}" required/>
                                            </div>
                                            <div class="form-group">
                                                <label for="codeGRESA" class="form-label">Code GRESA</label>
                                                <input id="codeGRESA" maxlength="30" type="text" name="codeGRESA" value="{{old('codeGRESA')}}" required/>
                                            </div>
                                            <div class="form-group">
                                                <label for="delegation" class="form-label">Délégation</label>
                                                <input id="delegation" maxlength="30" type="text" name="delegation" value="{{old('delegation')}}" required/>
                                            </div>
                                            <div class="form-group">
                                                <label for="typeEtab" class="form-label">Type Établissement</label>
                                                <select class="form-select" id="typeEtab" name="typeEtab">
                                                    <option value="1" selected>Lycée</option>
                                                    <option value="2">Collège</option>
                                                    <option value="3">École primaire</option>
                                                    <option value="4">Groupe Scolaire</option>
                                                    <option  value="4">Unité Scolaire</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="name" class="form-label">Nom de directeur</label>
                                                <input id="name" type="text" maxlength="30" value="{{old('name')}}" name="name"  required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inner-block has-padding mt-4">
                                <div class="block-header">
                                    <div class="block-title flex items-center justify-between w-full">
                                        <h2>Mot de Passe</h2>
                                    </div>
                                </div>
                                <div class="block-content">
                                    <div class="">
                                        <div class="w-full flex items-center">
                                            <div class="w-1/3">
                                                <label for="newPassword" class="form-label">Mot de Passe</label>
                                                <input id="newPassword" type="password" maxlength="50" name="newPassword" required/>
                                            </div>
                                            <div class="w-1/3 mx-4">
                                                <label for="confirmPassword" class="form-label">Confirmez Mot de Passe</label>
                                                <input id="confirmPassword" type="password" maxlength="50" name="confirmPassword" required/>
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <footer class='footer-toolbar border-top flex justify-end items-center'>
            <button type="submit" class="text-decoration-none text-center btn btn-primary action flex items-center" id="register">
            <i class="far fa-save mr-3"></i> &nbsp;<span> Enregistré</span>
            </button>
        </footer>
    </>
    )
}
export default AddUser