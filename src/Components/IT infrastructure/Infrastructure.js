import "./Infrastructure.scss";
import { DataGrid } from '@mui/x-data-grid';
import React,{ useState } from "react";
import ReadMore from "@mui/icons-material/ReadMore";
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";



const OriginalRows = [
    { id: 1, codeGRESA: 'Snow', nomEtablissement: 'Jon', age: 35 , typeEtablissement : "lycee"},
    { id: 2, codeGRESA: 'Lannister', nomEtablissement: 'Cersei', age: 42 , typeEtablissement : "lycee"},
    { id: 3, codeGRESA: 'Lannister', nomEtablissement: 'Jaime', age: 45 , typeEtablissement : "lycee"},
    { id: 4, codeGRESA: 'Stark', nomEtablissement: 'Arya', age: 16 , typeEtablissement : "primaires"},
    { id: 5, codeGRESA: 'Targaryen', nomEtablissement: 'Daenerys', age: null , typeEtablissement : "primaires"},
    { id: 7, codeGRESA: 'Clifford', nomEtablissement: 'Ferrara', age: 44 , typeEtablissement : "primaires"},
    { id: 8, codeGRESA: 'Frances', nomEtablissement: 'Rossini', age: 36 , typeEtablissement : "primaires"},
    { id: 9, codeGRESA: 'Roxie', nomEtablissement: 'Harvey', age: 65 , typeEtablissement : "lycee"},
];

const Infrastructure = () => {
    
    const history = useHistory();
    const [rows, setRows] = useState(OriginalRows);

    const requestSearch = (searchedVal) => {
        const filteredRows = OriginalRows.filter((row) => {
            return row.nomEtablissement.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };

    const typeEtatSearch = (searchedVal) => {
        if(!searchedVal.includes("all")){
            const filteredRows = OriginalRows.filter((row) => {
                return row.typeEtablissement.toLowerCase().includes(searchedVal.toLowerCase());
            });
            setRows(filteredRows);
        }else{
            setRows(OriginalRows)
        }
    };


    const columns = [
        { field: 'id', headerName: 'ID', flex : 1 , headerAlign : "center" },
        { field: 'codeGRESA', headerName: 'Code GRESA', flex : 2 , headerAlign : "center" },
        { field: 'nomEtablissement', headerName: 'Nom Etablissement', flex : 7 , headerAlign : "center" },
        {
            field : "Details",
            headerName : "Details",
            flex : 1,
            headerAlign : "center",
            renderCell : (params) => {
                return <ReadMore onClick={()=>history.replace("/Details")} />
            }
        }
    ];
    

    return (
        <div className="container" id="parcInformatique">
            <div className='section-admin'>
                <div className='outer-block my-16'>
                    <div className="outer-block-header">
                        <div className="outer-block-title"><h2>Parc Informatique des Établissements Scolaire</h2></div>
                    </div>
                    <div className='outer-block-body flex flex-wrap'>
                        <div className="w-full flex justify-center items-center mb-3 ">
                            <div className="h-10 w-1/2 mr-2 flex justify-between space-x-2" action="#result">
                                <TextField
                                    id="outlined-search"
                                    type="search"
                                    size="small"
                                    onChange={(e)=>requestSearch(e.target.value)}
                                    className="w-full"
                                    variant="outlined"
                                    placeholder="Commencez à taper pour rechercher des établissements ..."
                                />
                            </div>
                            <div className="h-10 w-1/2 flex justify-between" action="#result">
                                <select className="w-full form-select mr-0" name="typeEtablissement" onChange={e => typeEtatSearch(e.target.value) }>
                                    <option value="all" selected>Tous Établissements</option>
                                    <option value="lycee">
                                        Lyceés
                                    </option>
                                    <option value="colleges">
                                        Collèges
                                    </option>
                                    <option value="primaires">
                                        Écoles Primaires
                                    </option>
                                    <option value="g-scolaire">
                                        Groupe Scolaire
                                    </option>
                                    <option value="unite">
                                        Unité Scolaire
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='outer-block-body' style={{ height: 400, width: '100%' , textAlign: "center" }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={4}
                            rowsPerPageOptions={[4]}
                            checkboxSelection
                        />
                    </div>
                    <div className='outer-block-body'>
                        <div className=' border-top flex justify-end items-center'>
                            <button className="p-3 text-decoration-none text-center btn btn-primary action flex items-center justify-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cloud-upload mr-3" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                                <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                            </svg>
                            <span>Export</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Infrastructure;