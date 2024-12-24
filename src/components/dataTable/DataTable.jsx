import React from 'react';
import './dataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { userColumns, userRows } from '../../datatablesource.js'
import { Link } from 'react-router-dom';


const DataTable = ({ title }) => {

    const actionColumn = {
        field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
            return (
                <div className='actionBtn'>
                    <Link to={title === 'Add New User' ? '/user/test' : '/product/test'} style={{ textDecoration: 'none' }}>
                        <div className='viewAction'>View</div>
                    </Link>
                    <div className='deleteAction'>Delete</div>
                </div>
            )
        }
    }

    const paginationModel = { page: 0, pageSize: 10 };

    return (
        <div className='dataTable'>

            <div className='dataTableTitle'>
                {title}
                <Link to={title === 'Add New User' ? '/user/new' : '/product/new'} className='new'>
                    Add New
                </Link>
            </div>
            <Paper className='paper' sx={{ height: 'calc(100vh - 88px)', width: '100%', boxShadow: "2px 4px 10px 1px #c9c9c9" }} >
                <DataGrid className='datagrid'
                    rows={userRows}
                    columns={userColumns.concat(actionColumn)}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[10, 20, 25]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </div >
    );
}

export default DataTable;
