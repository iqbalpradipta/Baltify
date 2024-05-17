import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Layout from './layout/layout';
import Login from './pages/Login';
import Register from './pages/Register';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
