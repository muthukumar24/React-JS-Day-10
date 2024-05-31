import React, { useEffect, useState } from 'react'; // Importing necessary React components
import { Alert, Button, Container, Grid, Paper, Snackbar, Typography } from '@mui/material'; // Importing Material-UI components
import axios from 'axios'; // Importing Axios for HTTP requests
import UserItem from './UserItem'; // Importing UserItem component
import UserForm from './UserForm'; // Importing UserForm component
import PersonAddIcon from '@mui/icons-material/PersonAdd'; // Importing PersonAddIcon from Material-UI icons 

function UserList() {
  // State variables
  const [users, setUsers] = useState([]); // State to store users
  const [editingUser, setEditingUser] = useState(null); // State to manage editing user
  const [snackbar, setSnackbar] = useState({ // State for snackbar
    open: false, // Snackbar open state
    message: '', // Snackbar message
    severity: 'success' // Severity of the snackbar (success, error, warning, info)
  });

  // Fetch users from API on component mount
  useEffect(()=>{
    fetchUser();
  },[]);

  // Function to fetch users from API
  const fetchUser = async () => {
    try{
      const response = await axios.get("https://nodejs-day-4.onrender.com/apiUser/users");
      setUsers(response.data); // Update users state with fetched data
    } catch(error){
      console.log("Error fetching Data:", error);
      showSnackbar('Error fetching users:', 'error'); // Show snackbar for error
    }
  };

  // Function to add user
  const addUser = async (user) =>{
    try{
        const response = await axios.post("https://nodejs-day-4.onrender.com/apiUser/users", user);
        setUsers([...users, response.data]); // Update users state with new user
        setEditingUser(null); // Reset editing user state
        showSnackbar('User Added Successfully', 'success'); // Show snackbar for success
    }
    catch(error){
      console.log('Error Adding User:', error);
      showSnackbar('Error AddingUser', 'error'); // Show snackbar for error
    }
  };

  // Function to update user
  const updateUser = async (user) =>{
    try{
      await axios.put(`https://nodejs-day-4.onrender.com/apiUser/users/${user._id}`, user);
      fetchUser();
      setEditingUser(null); // Reset editing user state
      showSnackbar('User Updated Successfully', 'success'); // Show snackbar for success
    }catch(error){
      console.log('Error Updating User:', error);
      showSnackbar('Error Updating User', 'error'); // Show snackbar for error
    }
  };

  // Function to delete user
  const deleteUser = async (id) => {
    try{
      await axios.delete(`https://nodejs-day-4.onrender.com/apiUser/users/${id}`);
      fetchUser();
      showSnackbar('User deleted successfully', 'success'); // Show snackbar for success
    }catch(error){
      console.log("Error deleting User:", error);
      showSnackbar('Error deleting user:', 'error'); // Show snackbar for error
    }
  };

  // Function to show snackbar
  const showSnackbar = (message, severity) =>{
    setSnackbar({open: true, message, severity});
  };

  // Function to handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbar({...snackbar, open: false});
  };

  return (
    <Container>
      <Paper elevation={3} style={{backgroundColor: 'lavender', padding: '20px', marginTop: '20px', marginBottom: '20px'}}>
        <Typography variant='h3' gutterBottom style={{textAlign: 'center'}}>User Management</Typography>
        <Grid container spacing={3}>
          {/* Mapping through users and rendering UserItem component for each user */}
          {users.map((user) => (
            <UserItem 
              key={user._id} 
              user={user} 
              onEdit={setEditingUser} 
              onDelete={deleteUser}/>
          ))}
        </Grid>
        <div style={{display:'flex', justifyContent:'center'}}>
          {/* Button to add new user */}
          <Button 
            variant='contained'
            startIcon={<PersonAddIcon/>}
            color='adduser' 
            style={{marginTop:'20px', color: 'white'}}
            onClick={()=> setEditingUser({})}>Add User</Button>
        </div>
        
        {/* Render UserForm component if editingUser is not null */}
        {editingUser && (
          <UserForm 
            user={editingUser}
            onSave={editingUser._id ? updateUser : addUser}
            onCancel={()=> setEditingUser(null)}>
          </UserForm>
        )}
      </Paper>
      {/* Snackbar component for showing messages */}
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity} 
          sx={{width:'100'}}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default UserList; // Exporting UserList component
