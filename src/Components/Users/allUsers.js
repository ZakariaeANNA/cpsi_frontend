import React,{useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import {Visibility , Edit , History ,Lock} from "@mui/icons-material";
import { Button, DialogContent, IconButton } from "@mui/material";
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
}));
const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
};
BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};
function EditModal({params}){
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <div>
            <IconButton  aria-label="delete" size="large" onClick={handleClickOpen}>
                <Edit color="red"/>
            </IconButton>
            <BootstrapDialog
                onClose={handleClose}
                open={open}
                fullWidth
                maxWidth="md"
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <div class="outer-block-header">
                        <div class="outer-block-title flex items-center justify-between w-full">
                            <div class="flex items-center">
                                <i class="fas fa-user-edit text-lg mr-3"></i>
                                <h2>Modifier un utilisateurs</h2>
                            </div>
                        </div>
                    </div>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <div class="container" id="addUser">
                        <div class='section-admin'>
                            <div class='outer-block my-16'>
                                <div class='outer-block-body'>
                                    <form id="formulaire" action="{{route('admin.users.index.user.update',$user->codeGRESA)}}" method="POST" enctype="multipart/form-data">
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
                                                    <div class="flex flex-col justify-between">
                                                        <div class="form-group">
                                                            <label for="nameEtab" class="form-label">Nom d'Établissement</label>
                                                            <input id="nameEtab" maxlength="50" type="text" name="nameEtab" 
                                                            value="{{$user->nameEtab}}" required/>
                                                        </div>
                                                        <div class="form-group mt-2">
                                                            <label for="codeGRESA" class="form-label">Code GRESA</label>
                                                            <input id="codeGRESA" maxlength="30" type="text" name="codeGRESA" value="{{$user->codeGRESA}}" required/>
                                                        </div>
                                                        <div class="form-group mt-2">
                                                            <label for="delegation" class="form-label">Délégation</label>
                                                            <input id="delegation" maxlength="30" type="text" name="delegation" value="{{$user->delegation}}" required/>
                                                        </div>
                                                        <div class="form-group mt-2">
                                                            <label for="typeEtab" class="form-label">Type Établissement</label>
                                                            <select class="form-select" id="typeEtab" name="typeEtab">
                                                                <option value="1" selected>Lycée</option>
                                                                <option value="2">Collège</option>
                                                                <option value="3">École primaire</option>
                                                                <option value="4">Groupe Scolaire</option>
                                                                <option value="5">Unité Scolaire</option>
                                                            </select>
                                                        </div>
                                                        <div className="mt-2">
                                                        <label for="name" class="form-label">Nom de directeur</label>
                                                            <input id="name" type="text" maxlength="30" value="{{$user->name}}" name="name"  required/>
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
                </DialogContent>
            </BootstrapDialog>
        </div>
    )
}
function HistoryModal({params}){
    const columns = [
        {field: "id",headerName: "ID",headerAlign : 'center'},
        {field: "Date",headerName: "Date", flex: 1 ,headerAlign : 'center'},
        {field: "ip",headerName: "IP", flex: 1 ,headerAlign : 'center'},
        {field: "localisation",headerName: "Localisation", flex: 1 ,headerAlign : 'center'},
        {field: "navigateur",headerName: "Navigateur", flex: 1 ,headerAlign : 'center'},

    ]
    const rows = [
        {id: 1, date: '29-12-2022',ip: '192.168.2.1', localisation: 'Tétouan', navigateur: 'Chrome'},
        {id: 2, date: '29-12-2022',ip: '192.168.2.1', localisation: 'Tétouan', navigateur: 'Chrome'},
        {id: 3, date: '29-12-2022',ip: '192.168.2.1', localisation: 'Tétouan', navigateur: 'Chrome'},
        {id: 4, date: '29-12-2022',ip: '192.168.2.1', localisation: 'Tétouan', navigateur: 'Chrome'},
        {id: 5, date: '29-12-2022',ip: '192.168.2.1', localisation: 'Tétouan', navigateur: 'Chrome'},
    ]
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <div>
            <IconButton  aria-label="delete" size="large" onClick={handleClickOpen}>
                <History color="red"/>
            </IconButton>
            <BootstrapDialog
                onClose={handleClose}
                open={open}
                fullWidth
                maxWidth="md"
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <div class="outer-block-header">
                        <div class="outer-block-title justify-between w-full">
                            <div class="flex items-start w-full justify-between ">
                                <h5 class="font-semibold text-xl inline p-0 m-0">Historique de connexion récent 
                                    <p class='mb-2 text-gray-500 font-semibold text-sm'><i class='fas fa-key mr-2'></i>$codeGRESA</p>
                                </h5>
                           </div>
                       </div>
                  </div>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                <div class="container" id="addUser">
                    <div class='section-admin'>
                        <div class='outer-block-body'  style={{ height: 400, width: '100%' , textAlign: "center" }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                            />
                        </div>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
            <Button onclick={handleClose}>
                <div class="text-right">
                    <button type="submit" class="btn btn-primary px-4 py-2">
                        Close
                    </button>
                </div>
            </Button>
            <Button onclick={handleClose}>
                <div class="text-right">
                    <form action="{{ route('devices.q8jkCr2U3tt3nx8R6b4122ffis8MEyMVwV3Xc',$user->id) }}" method="GET">
                        <button type="submit" class="btn btn-primary px-4 py-2">
                            <i class="fas fa-trash-alt"></i> &nbsp; Clear History
                       </button>
                    </form>
                </div>
            </Button>
        </DialogActions>
    </BootstrapDialog>

        </div>
    )
}
function PasswordModal({params}){
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <div>
            <IconButton  aria-label="delete" size="large" onClick={handleClickOpen}>
                <Lock color="red"/>
            </IconButton>
            <BootstrapDialog
                onClose={handleClose}
                open={open}
                fullWidth
                maxWidth="md"
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <div class="card-header p-3">
                        <h3 class="font-semibold text-xl"><i class="fas fa-lock text-primary ml-1 mr-3"></i> Changer Mot de Passe</h3>
                    </div>
                </BootstrapDialogTitle>
                <DialogContent dividers>       
                    <div class="">
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
                        </form>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleClose}>
                        save
                    </Button>
                </DialogActions>
            </BootstrapDialog>

</div>
    )
}

function ViewModal({params}){
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <div>
            <IconButton  aria-label="delete" size="large" onClick={handleClickOpen}>
                <Visibility color="red"/>
            </IconButton>
            <BootstrapDialog
                onClose={handleClose}
                open={open}
                fullWidth
                maxWidth="md"
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <div class="card-header p-3">
                        <h3 class="font-semibold text-xl"><i class="fas fa-user text-primary ml-1 mr-3"></i> Informations d'utilisateur</h3>
                    </div>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                        <div class="">
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
                                                            <div class="text-gray-500 font-semibold" id="codegresa">{params.codeGRESA}</div>
                                                        </li>
                                                        <li class="list-group-item flex justify-between items-center my-2">
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
                                                                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                                                                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                                                                </svg>
                                                            </div>
                                                            <div class="text-gray-500 font-semibold" id="typeetab">Group scolaire</div>
                                                        </li>
                                                        <li class="list-group-item flex justify-between items-center my-2">
                                                            <div>
                                                                <img src={'../svg/school-svgrepo-com.svg'} alt="<?=keywords?>" class="h-4 w-4"/>
                                                            </div>
                                                            <div class="text-gray-500 font-semibold" id="nameetab">{params.nomEtablissement}</div>
                                                        </li>
                                                        <li class="list-group-item flex justify-between items-center">
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                                </svg>
                                                            </div>
                                                            <div class="text-gray-500 font-semibold" id="delegation">Tétouan</div>
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
                                        
                                    </form>
                                </div>
                  
                </DialogContent>
                <DialogActions>
                    <Button onclick={handleClose}>
                        <div class="btn btn-secondary p-2">Close</div>
                    </Button>
                </DialogActions>
            </BootstrapDialog>

        </div>
    )
}
function AddUser(){
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <div className="container flex justify-end" id="addUser">
            <Button onClick={handleClickOpen} className="h-3 flex flex-end">
                <div className="text-decoration-none text-center btn btn-primary action flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" className="mr-2 bi bi-plus-circle w-full" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg> &nbsp;<span className="text-xs"> Ajouter un Utilisateur</span>
                </div>
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth
                maxWidth={'md'}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <div className="outer-block-header">
                        <div className="outer-block-title flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{boxShadow: "-4px -3px 85px 0px #00000049;"}} width="25" height="25" fill="currentColor" className="mr-3 bi bi-person-plus" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                            <h2>Ajouter un utilisateur</h2>
                    </div>
                    </div>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <div className='section-admin shadow-2xl'>
                        <div className='outer-block my-16'>
                            <div className='outer-block-body'>
                                <form id="formulaire" action="{{route('admin.users.index.register.user')}}" method="POST" enctype="multipart/form-data">
                                    <div className="inner-block has-padding">
                                        <div className="block-header">
                                            <div className="block-title">
                                                <h2 className="flex items-center">
                                                    <div>Établissement Scolaire</div>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="block-content">
                                            <div className="is-grid">
                                                <div className="flex flex-col justify-between">
                                                    <div className="form-group mt-4">
                                                        <label for="nameEtab" className="form-label my-2">Nom d'Établissement</label>
                                                        <input id="nameEtab" maxlength="50" className='mt-2' type="text" name="nameEtab" value="" required/>
                                                    </div>
                                                    <div className="form-group mt-4">
                                                        <label for="codeGRESA" className="form-label my-2">Code GRESA</label>
                                                        <input id="codeGRESA" maxlength="30" className='mt-2' type="text" name="codeGRESA" value="" required/>
                                                    </div>
                                                    <div className="form-group mt-4">
                                                        <label for="delegation" className="form-label my-2">Délégation</label>
                                                        <input id="delegation" maxlength="30" className='mt-2' type="text" name="delegation" value="" required/>
                                                    </div>
                                                    <div className="form-group mt-4">
                                                        <label for="typeEtab" className="form-label">Type Établissement</label>
                                                        <select className="form-select mt-2" id="typeEtab" name="typeEtab">
                                                            <option value="1" selected>Lycée</option>
                                                            <option value="2">Collège</option>
                                                            <option value="3">École primaire</option>
                                                            <option value="5">Groupe Scolaire</option>
                                                            <option  value="4">Unité Scolaire</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group mt-4">
                                                        <label for="name" className="form-label my-2">Nom de directeur</label>
                                                        <input id="name" type="text" className='mt-2' maxlength="30" value="" name="name"  required/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inner-block has-padding mt-4">
                                        <div className="block-header">
                                            <div className="block-title flex items-center justify-between w-full">
                                                <h2>Mot de Passe</h2>
                                            </div>
                                        </div>
                                        <div className="block-content">
                                            <div className="">
                                                <div className="w-full flex flex-col">
                                                    <div className="form-group mt-4">
                                                        <label for="newPassword" className="form-label my-2">Mot de Passe</label>
                                                        <input id="newPassword" type="password" className='mt-2' maxlength="50" name="newPassword" required/>
                                                    </div>
                                                    <div className="form-group mt-4">
                                                        <label for="confirmPassword" className="form-label">Confirmez Mot de Passe</label>
                                                        <input id="confirmPassword" type="password" className='mt-2' maxlength="50" name="confirmPassword" required/>
                                                    </div>   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>  
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button autoFocus onClick={handleClose}>
                        Save
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    )
}

function AllUsers(){
    const columns = [

        {field: "id",headerName: "ID",headerAlign : 'center'},
        {field: "codeGRESA",headerName: "Code GRESA", flex: 1 ,headerAlign : 'center'},
        {field: "nomDirecteur",headerName: "Nom Directeur", flex: 1 ,headerAlign : 'center'},
        {field: "numeroTelephone",headerName: "Numero Telephone", flex: 1 ,headerAlign : 'center'},
        {field: "nomEtablissement",headerName: "Nom Établissement", flex: 1 ,headerAlign : 'center'},
        {field: "Actions",headerName: "Actions", flex: 1 ,headerAlign : 'center',renderCell:(params)=>(
                <div className="flex flex-row items-center">
                    <HistoryModal params={params.row}/>
                    <EditModal params={params.row}/>
                    <PasswordModal params={params.row}/>
                    <ViewModal params={params.row}/>
                </div>
            )
        },
    ]
    const rows = [
        {id: 1, codeGRESA: '05380X',nomDirecteur: 'ecole THAMI EL OUAZZANI', numeroTelephone: 'null', nomEtablissement: 'ecole THAMI EL OUAZZANI'},
        {id: 2, codeGRESA: '05380X',nomDirecteur: 'ecole THAMI EL OUAZZANI', numeroTelephone: 'null', nomEtablissement: 'ecole THAMI EL OUAZZANI'},
        {id: 3, codeGRESA: '05380X',nomDirecteur: 'ecole THAMI EL OUAZZANI', numeroTelephone: 'null', nomEtablissement: 'ecole THAMI EL OUAZZANI'},
        {id: 4, codeGRESA: '05380X',nomDirecteur: 'ecole THAMI EL OUAZZANI', numeroTelephone: 'null', nomEtablissement: 'ecole THAMI EL OUAZZANI'},
        {id: 5, codeGRESA: '05380X',nomDirecteur: 'ecole THAMI EL OUAZZANI', numeroTelephone: 'null', nomEtablissement: 'ecole THAMI EL OUAZZANI'},
        {id: 6, codeGRESA: '05380X',nomDirecteur: 'ecole THAMI EL OUAZZANI', numeroTelephone: 'null', nomEtablissement: 'ecole THAMI EL OUAZZANI'},
        {id: 7, codeGRESA: '05380X',nomDirecteur: 'ecole THAMI EL OUAZZANI', numeroTelephone: 'null', nomEtablissement: 'ecole THAMI EL OUAZZANI'},
        {id: 8, codeGRESA: '05380X',nomDirecteur: 'ecole THAMI EL OUAZZANI', numeroTelephone: 'null', nomEtablissement: 'ecole THAMI EL OUAZZANI'},
        {id: 9, codeGRESA: '05380X',nomDirecteur: 'ecole THAMI EL OUAZZANI', numeroTelephone: 'null', nomEtablissement: 'ecole THAMI EL OUAZZANI'},
     
    ]
  
    return(
        <>
            <div className="container" id="usersList">
                <div className='section-admin'>
                    <div className='outer-block my-14'>
                        <div className="outer-block-header">
                            <div className="outer-block-title flex items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 rounded-lg cursor-pointer bi bi-people" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
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
                            {rows.length!==0 && 
                            <div style={{ height: 400, width: '100%' , textAlign: "center" }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                    checkboxSelection
                                />
                            </div>     
                            }
                            { rows.length===0 &&    
                                <div>
                                    <h3> <img src={'../svg/void.svg'} className="mx-auto h-44 w-44 mt-5" alt=""/> </h3>
                                    <p className="text-center font-semibold text-gray-500 my-5 text-2xl">Rien n'a été trouvé</p>
                                </div>
                            }       
                        </div>
                    </div>
                </div>
            </div>
            <footer className='footer-toolbar border-top flex justify-end'>
                <AddUser className="text-decoration-none text-center btn btn-primary action flex items-center" style={{ padding: "10px 14px"}}/>
            </footer>
    </>
    )
}

export default AllUsers