import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Product from './pages/Products/Product';
import Login from './pages/Login/Login';
import User from './pages/Users/User';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';
import AddProduct from './pages/Products/AddProduct';
import AddUser from './pages/Users/AddUser';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<Users />} />
          <Route path=":userId" element={<User />} />
          <Route path="addUser" element={<AddUser />} />
        </Route>
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":productId" element={<Product />} />
          <Route path="addProduct" element={<AddProduct />} />
        </Route>
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
