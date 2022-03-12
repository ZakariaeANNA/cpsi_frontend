import "../Infrastructure.scss";
import { School , Visibility , Edit , Delete , PowerSettingsNew , ChangeCircle } from "@mui/icons-material";
import { DataGrid } from '@mui/x-data-grid';
import React,{ useState } from "react";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
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

const DetailsModal = ({params}) => {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <IconButton aria-label="delete" size="large" onClick={handleClickOpen}> 
            <Visibility color="red" />
        </IconButton>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Modal title
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        key={params.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {params.departement}
                        </TableCell>
                        <TableCell align="right">{params.nInventaire}</TableCell>
                        <TableCell align="right">{params.typeParc}</TableCell>
                        <TableCell align="right">{params.marque}</TableCell>
                        <TableCell align="right">{params.salle}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    );
}

const EditModal = ({params}) => {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <IconButton aria-label="delete" size="large" onClick={handleClickOpen}> 
            <Edit color="red" />
        </IconButton>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Modal title
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    );
}
  
const DeleteModal = ({params}) => {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <IconButton aria-label="delete" size="large" onClick={handleClickOpen}> 
            <Delete color="red" />
        </IconButton>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Modal title
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    );
}

const PanneModal = ({params}) => {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <IconButton aria-label="delete" size="large" onClick={handleClickOpen}> 
            <PowerSettingsNew color="red" />
        </IconButton>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Modal title
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    );
}

const ChangerModal = ({params}) => {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <IconButton aria-label="delete" size="large" onClick={handleClickOpen}> 
            <ChangeCircle color="red" />
        </IconButton>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Modal title
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    );
}




const DetailsInfrastructure = () => {

    const columns = [
        { field: 'departement', headerName: 'Departement', flex : 1 },
        { field: 'nInventaire', headerName: 'N Inventaire', flex : 1 },
        { field: 'typeParc', headerName: 'Type Parc', flex : 1 },
        { field: 'salle', headerName: 'Salle', flex : 1 },
        { field: 'marque', headerName: 'Marque',sortable: false, flex : 1 },
        { field: 'ram', headerName: 'RAM',sortable: false, flex : 1 },
        { field: 'cpu', headerName: 'CPU',sortable: false, flex : 1 },
        { field: 'dateDereception', headerName: 'Date de réception',sortable: false, flex : 1 },
        { field: 'source', headerName: 'Source',sortable: false, flex : 1 },
        {
            field : "Details" , headerName : "Details" , flex : 1 ,
            renderCell : (params) => ( <DetailsModal params={params.row} />)
        },
        {
            field : "Actions" , headerName : "Actions" , flex : 1 ,
            renderCell : (params) => (
                <div className="flex flex-row items-center align-middle">
                    <DeleteModal params={params.row} />
                    <EditModal params={params.row} />
                </div>)
        },
        {
            field : "En Panne" , headerName : "En Panne" , flex : 1 ,
            renderCell : (params) => ( <PanneModal params={params.row} /> )
        },
        {
            field : "Changer" , headerName : "Changer" , flex : 1 ,
            renderCell : (params) => ( <ChangerModal params={params.row} /> )
        }
    ];
    

    const rows = [
        { id: 1, departement: 'Administrative', typeParc: "Scanner", salle: "Bureau Directeur" , marque : "Samsung" , source : "DP-Tétouan" },
        { id: 2, departement: 'Administrative', typeParc: "Photocopieuse", salle: "Bureau Directeur" , marque : "Bizhub Konica Minolta" , source : "AAER" },
        { id: 3, departement: 'Administrative', typeParc: "PC fixe", salle: "Bureau Directeur" , marque : "HP Compaq" , stockage : "300GO" , ram : "3GO" , cpu : "Pentium R Dual Core" , source : "AAER" },
    ];

    return(
        <div class="container" id="school">
            <div class='section-admin'>
                <div class='outer-block mt-16 mb-14'>
                    <div class="outer-block-header">
                        <div class="outer-block-title flex items-center justify-between w-full">
                            <div class="flex items-center">
                                <School className="h-8 w-8 mr-4" />
                                <h2>Ecole LM</h2>
                            </div>
                            <div class="flex items-center">
                                <span class="school-menu school-menu-dropdown">
                                    <span id="school-menu-block-toggle" class="icon school-menu-content" onclick="schoolMenu()">
                                        <i class="fas fa-ellipsis-h text-xl cursor-pointer"></i>
                                    </span>
                                    <div id="schoolMenuBlockContent" class="school-menu-dropdown-content">
                                        <div class="dropdown-body">
                                            <div class="flex items-center justify-between py-1">
                                                <h5 class="text-sm font-semibold">Total des équipements</h5>
                                                <h5 class="text-xs">
                                                    <span class="font-bold text-primary">49</span>
                                                </h5>
                                            </div>
                                            <div class="flex items-center justify-between py-1">
                                                <h5 class="text-xs"><i class="far fa-user-circle"></i></h5>
                                                <h5 class="text-xs">Ecole LM</h5>
                                            </div>
                                            <div class="flex items-center justify-between py-1">
                                                <h5 class="text-xs">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                                                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                                                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </h5>
                                                <h5 class="text-xs"> 666 </h5>
                                            </div>
                                            <div class="flex items-center justify-between py-1">
                                                <h5 class="text-xs"><img src="{{asset('/img/svg/school.svg')}}" alt="<?=keywords?>" class="h-5 w-5 mr-4" /></h5>
                                                <h5 class="text-xs">Ecole LM </h5>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class='outer-block-body' id="school-body">
                        <div class="w-full flex justify-center items-center mb-3">
                            <div class="h-10 w-full flex justify-between" action="#result">
                                <input class="w-full mr-0" name="search" type="text" placeholder="Recherche Par N˚ d'inventaire ou Marque" aria-label="Search" required/>
                                <button class="btn btn-primary px-4" title="search" type="submit">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                            <button class="btn btn-primary px-4 ml-1 h-10"  ><i class="fas fa-times"></i></button>
                        </div>
                        <h3> <img src="{{asset('/img/svg/void.svg')}}" class="mx-auto h-44 w-44 mt-5" alt="" /> </h3>
                        <p class="text-center font-semibold text-gray-500 my-5 text-2xl">Rien n'a été trouvé</p>
                        <div style={{ height: 400, width: '100%' }}>
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
            </div>
        </div>
    );
}

export default DetailsInfrastructure;