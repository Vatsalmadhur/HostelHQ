import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './Pages/Home';
import Login from './Pages/Login';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  }
])

function App() {
  return (
    <main>
      <RouterProvider 
        router={router}>
      </RouterProvider>
    </main>
  );
}

export default App;
