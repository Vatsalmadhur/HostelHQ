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
		path: '/login',
		element: <Login />,
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
