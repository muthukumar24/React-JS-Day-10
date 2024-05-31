import React from 'react'; // Importing necessary React components
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'; // Importing Material-UI components
import EditNoteIcon from '@mui/icons-material/EditNote'; // Importing EditNoteIcon from Material-UI icons
import DeleteIcon from '@mui/icons-material/Delete'; // Importing DeleteIcon from Material-UI icons

function UserItem({user, onEdit, onDelete}) {
  return (
    <Grid item xs={12} sm={6} md={4}> {/* Grid item for responsive layout */}
      <Card style={{backgroundColor: 'white'}}> {/* Card component */}
        <CardContent> {/* Card content */}
          <Typography variant='h6' style={{color: 'black'}}> {/* User name */}
            {user.name}
          </Typography>
          <Typography color='textPrimary'>{user.email}</Typography> {/* User email */}
        </CardContent>
        <CardActions> {/* Card actions */}
          {/* Edit button */}
          <Button 
            variant="contained"
            startIcon={<EditNoteIcon/>}
            size='small' 
            color='edit' // Color variant for edit button
            style={{color: 'white'}} // Custom styling for edit button
            onClick={() => onEdit(user)}>Edit</Button>
          {/* Delete button */}
          <Button 
            variant="contained"
            startIcon={<DeleteIcon/>}
            size='small' 
            color='delete' // Color variant for delete button
            style={{color: 'white'}} // Custom styling for delete button
            onClick={() => onDelete(user._id)}>Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default UserItem; // Exporting UserItem component
