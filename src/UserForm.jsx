import React, { useEffect, useState } from 'react'; // Importing necessary React components
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'; // Importing Material-UI components
import CancelIcon from '@mui/icons-material/Cancel'; // Importing CancelIcon from Material-UI icons
import SaveIcon from '@mui/icons-material/Save'; // Importing SaveIcon from Material-UI icons

function UserForm({user, onSave, onCancel}) {
  
  // State to manage form data
  const [formData, setFormData] = useState({name:'', email:''});

  // useEffect to update form data when 'user' prop changes
  useEffect(()=>{
    if(user){
      setFormData(user);
    }
  }, [user]);

  // Function to handle input changes
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  };

  // Function to handle form submission
  const handleSubmit = (e) =>{
    e.preventDefault();
    onSave(formData); // Calling 'onSave' function passed as prop with form data
  };

  return (
    <Dialog open onClose={onCancel}> {/* Dialog component */}
      <DialogTitle>{user._id ? 'Edit User':'Add User'}</DialogTitle> {/* Dialog title */}
      <DialogContent>
        {/* Text field for name input */}
        <TextField 
          autoFocus 
          margin='dense' 
          name='name' 
          label='Name' 
          type='text' 
          fullWidth 
          value={formData.name} 
          onChange={handleChange}></TextField>
        {/* Text field for email input */}
        <TextField 
          autoFocus 
          margin='dense' 
          name='email' 
          label='Email' 
          type='email' 
          fullWidth 
          value={formData.email} 
          onChange={handleChange}></TextField>
      </DialogContent>
      <DialogActions>
        {/* Cancel button */}
        <Button variant="outlined" startIcon={<CancelIcon/>} onClick={onCancel} color='delete'>Cancel</Button>
        {/* Save button */}
        <Button variant="outlined" startIcon={<SaveIcon/>} onClick={handleSubmit} color='secondary'>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default UserForm; // Exporting UserForm component
