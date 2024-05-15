import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Layout from './layout/layout';
import Login from './pages/Login';



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
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
