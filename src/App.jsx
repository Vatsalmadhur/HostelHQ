import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import {Box} from '@mui/material';
import Warden from './Pages/Warden';
import AddBuilding from './Pages/AddBuilding';
import Student from './Pages/Student';
import Staff from './Pages/StaffDetail';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path:'/signup',
    element: <SignUp />,
  },
  {
    path: '/warden',
    element: <Warden />,
  },
  {
    path: '/addbuilding',
    element: <AddBuilding />,
  },
  {
    path: '/student',
    element: <Student />,
  },
  {
    path: '/staff',
    element: <Staff />,

  }
])

function App() {
  return (
    <Box overflow="hidden" >
      <RouterProvider 
        router={router}>
      </RouterProvider>
    </Box>
  );
}

export default App;
