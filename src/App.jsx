import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './Pages/Home';
import Login from './Pages/Login';
import { Box } from '@mui/system';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
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
