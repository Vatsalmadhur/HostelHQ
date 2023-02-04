import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Warden from './Pages/Warden';

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
  }
])

function App() {
  return (
    <main>
      <RouterProvider 
        router={router}>
	  hello
      </RouterProvider>
    </main>
  );
}

export default App;
