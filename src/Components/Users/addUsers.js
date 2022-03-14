import React from 'react'
import Dialog  from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function AddUser(){
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));
      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
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
    return (
        <>
            <div className="container" id="addUser">
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
                                <svg xmlns="http://www.w3.org/2000/svg" onclick="window.location.reload();" style={{boxShadow: "-4px -3px 85px 0px #00000049;"}} width="25" height="25" fill="currentColor" className="mr-3 bi bi-person-plus" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                                <h2>Ajouter un utilisateurs</h2>
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
            <footer className='footer-toolbar border-top flex justify-end items-center'>
                <button onClick={handleClickOpen} className="text-decoration-none text-center btn btn-primary action flex items-center" id="register">
                    <i className="far fa-save mr-3"></i> &nbsp;<span> Enregistré</span>
                </button>
            </footer>
    </>
    )
}
export default AddUser