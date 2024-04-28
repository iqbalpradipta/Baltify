import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Layout from './layout/layout';

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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
