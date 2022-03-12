import { DataGrid } from '@mui/x-data-grid';
import React from "react";

const Table = () => {
    return(
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    );
}