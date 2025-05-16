import React from 'react'; // Importing necessary React components
import { blue, green, purple, red } from '@mui/material/colors'; // Importing Material-UI color palette
import { ThemeProvider } from '@emotion/react'; // Importing ThemeProvider from Emotion
import { CssBaseline, createTheme , Container} from '@mui/material'; // Importing CssBaseline and createTheme from Material-UI
import UserList from './UserList'; // Importing UserList component
import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
// Creating custom theme using createTheme function
const theme = createTheme({
  palette:{
    primary:{
      main: purple[500], // Setting primary color to purple
    },
    secondary: {
      main: green[700] // Setting secondary color to green
    },
    edit: {
      main: blue[700] // Setting edit button color to blue
    },
    delete: {
      main: red[600] // Setting delete button color to red
    },
    adduser: {
      main: blue[800] // Setting add user button color to a darker shade of blue
    }
  },
});

function App() {
  return (
    <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Routes>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/users' element={<UserList />}></Route>
          <Route path='/' element={<Navigate to="/login"></Navigate>}></Route>
        </Routes>
      </Container>
    </ThemeProvider >
  </Router>
  );
}

export default App; // Exporting App component
