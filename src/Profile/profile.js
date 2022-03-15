import React,{useState} from "react";
import { Edit } from "@mui/icons-material";
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

function EditInformation(){
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
                maxWidth="sm"
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <div class="card-header p-3">
                        <h3 class="font-semibold text-xl">Informations de Directeur</h3>
                    </div>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <div class="declarationModal inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                        <form id="infoForm" action="" method="POST" class="p-4">
                            <div class="mt-2 mb-3">
                                <label><span class="text-sm text-gray-500 font-bold">Nom</span></label>
                                <div class="flex items-center field">
                                    <input type="text" class="w-full p-2" maxlength="50" name="name" value="" required/>
                                </div>
                            </div>
                            <div class="mt-2 mb-3">
                                <label><span class="text-sm text-gray-500 font-bold">Email</span></label>
                                <input type="email" class="w-full p-2" maxlength="50" name="email" value="" required/>
                            </div>
                            <div class="mt-2 mb-3">
                                <label><span class="text-sm text-gray-500 font-bold">Phone</span></label>
                                <input type="tel" class="w-full p-2" maxlength="10" name="phone" value="" required/>
                            </div>
                        </form>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        <button class="btn btn-primary px-4 py-2 ml-2">Modifier</button>
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    )
}
function ChangePassword(){
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
                maxWidth="sm"
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <div class="card-header p-3">
                        <h3 class="font-semibold text-xl"><i class="fas fa-lock text-primary ml-1 mr-3"></i> Changer Mot de Passe</h3>
                    </div>
                </BootstrapDialogTitle>
                <DialogContent dividers>       
                    <div class="declarationModal inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
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
                        <button type="button" class="btn btn-outline-secondary px-4 py-2">Cancel</button>
                    </Button>
                    <Button onClick={handleClose}>
                        <button class="btn btn-primary px-4 py-2 ml-2">Changer Mot de Passe</button>
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    )
}

const Profile = ()=>{
    return(
        <div className="container">
            <section className="section-profile">
                <div className="card-profile w-full mt-16">
                    <div className="card-header p-4 flex items-center justify-start w-full">
                        <div className="hidden lg:block">
                            <img src={'../BXqufpGLvxfvtH3k/profile-picture.svg'} className="border-4 border-gray-100 ml-2 mr-6 h-20 w-20 rounded-full" alt=""/>
                        </div>
                        <div className="flex flex-col">
                            <h5 className="font-bold text-xl inline p-0 m-0">Votre Profile Personnel</h5>
                            <p>Gérez vos informations, votre confidentialité et votre sécurité pour faciliter la communication avec vous et l'assistance</p>
                        </div>
                    </div> 
                    <div className="p-4 flex flex-wrap justify-between">
                        <div className="">
                            <div className="card mt-3">
                                <div className="h-14 card-header p-4">
                                    <span className="">
                                        <span className="font-semibold flex justify-start text-sm">Établissement Scolaire</span>
                                    </span>
                                </div>
                                <div className=" card-body p-3 pt-4">
                                    <ul className="">
                                        <li className="list-group-item flex justify-between items-center">
                                            <div><i className="fas fa-key"></i>&emsp; <span className="text-xs text-gray-500 font-bold">CODE GRESA</span></div>
                                            <div className="text-gray-500 font-bold ml-12">05380X</div>
                                        </li>
                                        <li className="list-group-item flex justify-between items-center my-2">
                                            <div><i className="fas fa-school"></i>&emsp;<span className="text-xs text-gray-500 font-bold">ÉTABLISSEMENT</span></div>
                                            <div className="ml-12">ecole THAMI EL OUAZZANI</div>
                                        </li>
                                        <li className="list-group-item flex justify-between items-center">
                                            <div><i className="fas fa-map-marker-alt"></i> &emsp; <span className="text-xs text-gray-500 font-bold">DÉLÉGATION</span></div>
                                            <div className="ml-12">Tétouan</div>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card mt-3">
                            <div className="h-14 card-header p-3 flex items-center justify-start">
                                <button
                                data-infoform="{{ route('app.profile.index.change-info', Auth::user()->token) }}"
                                onclick="toggleInfoModal()"
                                className="infoFormBtn">
                                    <EditInformation />
                                </button>
                                <p className="font-semibold text-sm ml-2">Informations de Directeur</p>
                            </div>
                            <div className=" card-body p-3 flex flex-col flex-between">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item flex items-center my-2">
                                        <div className="w-1/3 lg:w-1/12"><span className="text-xs text-gray-500 font-bold ">NOM</span></div>
                                        <div>
                                            <span className='text-gray-600 font-semibold ml-12'>ucwords(Auth::user()name)</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item flex items-center justify-between">
                                        <div className="flex items-center w-full">
                                        <div className="w-1/3 lg:w-1/12"><span className="text-xs text-gray-500 font-bold">EMAIL</span></div>
                                        <div className="font-semibold text-gray-600">
                                            <span className="ml-12">Auth::user()email</span>
                                        </div>
                                        </div>
                                        <div>        
                                            <button type="button" onclick="toggleDeleteEmailModal()" title="Supprimer" className="deleteEmailButton ml-4"><i className="far fa-trash-alt p-2 rounded-full hover:bg-gray-100"></i></button>
                                        </div>
                                    </li>
                                    <li className="list-group-item flex items-center justify-between">
                                        <div className="flex items-center w-full">
                                        <div className="w-1/3 lg:w-1/12"><span className="text-xs text-gray-500 font-bold">Phone</span></div>
                                        <div className="font-semibold text-gray-600">
                                            <span className="ml-12">"phone ."</span>
                                        </div>
                                        </div>
                                        <div>        
                                            <button type="button" onclick="toggleDeletePhoneModal()" title="Supprimer" className="deletePhoneButton ml-4"><i className="far fa-trash-alt p-2 rounded-full hover:bg-gray-100"></i></button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card mt-3">
                            <div className="h-14 card-header p-3 flex items-center justify-start">
                                <button
                                    data-passwordform=""
                                    onclick="togglePasswordModal()"
                                    className="passwordFormBtn">
                                        <ChangePassword />
                                </button>
                                <p className="font-semibold text-sm ml-2">Changer le mot de Passe</p>
                            </div>
                            <div className=" card-body p-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item flex justify-between items-center">
                                        <div><span className="text-xs text-gray-500 font-bold"><i className="fas fa-lock"> </i> &nbsp;MOT DE PASSE</span></div>
                                        <div className="font-semibold text-gray-600">
                                            <span className="ml-12">Aucun modification</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    </div>
    )
}
export default Profile