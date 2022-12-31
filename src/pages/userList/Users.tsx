import React, { useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userData,  userRows } from '../../data';
import './userList.css'
import { Dialog, Typography } from '@material-ui/core';
import { NewUser } from '../newUser/NewUser';
import { UserInterface } from "../../moduls/Types";




export default function Users() {


    const [data,setDate] = React.useState(userData);
    console.log('data1',data)

  const [newUser,setNemUser] = useState<UserInterface | any>(undefined);

  const onChangeFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setNemUser({
      ...newUser,
      Name : value,
    });
    console.log('value' , value)
  };

   const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setNemUser({
      ...newUser,
      UserName : value,
    });
    console.log('value' , value)
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setNemUser({
      ...newUser,
      email : value,
    });
    console.log('value' , value)
  };

  const onChangeGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setNemUser({
      ...newUser,
      group : value,
    });
    console.log('value' , value)
  };


  const onChangeProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setNemUser({
      ...newUser,
      status : value,
    });
    console.log('value' , value)
  };

  const onClickReset = ( ) => {
    setNemUser({
      ...newUser,
      NewUser:'',
      email:'',
      Name:'',
      status:'',
      group : '',
    });
    // setOpenDialog(true)
  };

  const [openDialog , setOpenDialog] = React.useState(false);

  const onClickAddNew =  ()=>{
    setOpenDialog(true)
  };

  const onClickCancel =  ()=>{
    setOpenDialog(false)
  };
  
  const onClickCreate = () =>{
    //  data.push(newUser);
    //  data : [newUser , ...data];
    // e.preventDefault()
    setNemUser({
      ...newUser,
      id : data.length +1,
    });
     setDate( [ ...data ,newUser] );
     console.log('data' , data);
    
  }
   
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Name',
      headerName: ' name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      editable: true,
      
    },
    {
      field: 'UserName',
      headerName: 'user name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      editable: true,
     
    },
    
    {
      field: 'email',
      headerName: 'email address',
      width: 150,
      editable: true,
    },
    {
      field: 'group',
      headerName: 'group',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'status',
      width: 150,
      editable: true,
    },
    {
      field: 'createdOn',
      headerName: 'createdOn',
      width: 150,
      editable: true,
    },

    
  
  ];


  

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Box className='headerBox'> 
 
      <Typography className='typographyText'>User Mangemet</Typography>
      <button className="userAddButton"  onClick={onClickAddNew}>  + Add New </button>
      </Box>
      
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
       <Dialog open={openDialog}>
          <NewUser 
          onClickCancel={onClickCancel} 
           onClickCreate={onClickCreate}
          onChangeFullName={onChangeFullName}
          onChangeUserName={onChangeUserName}
          onChangeEmail={onChangeEmail}
          onChangeGroup={onChangeGroup}
          onChangeProfile={onChangeProfile}
          onClickReset={onClickReset}
          />
      </Dialog>
    </Box>
  );
}
