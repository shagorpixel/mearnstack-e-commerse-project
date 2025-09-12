import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import RootLayout from './Components/Layout/RootLayout.jsx'
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Orders from './Pages/Orders.jsx';
import Cart from './Pages/Cart.jsx';
import Profile from './Pages/Profile.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import SignIn from './Pages/SignIn.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout />,
    children:[
      {
        path:'/',
        element:<App />
      },
      {
        path:'/shop',
        element:<Shop />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/orders',
        element:<Orders />
      },
      {
        path:'/cart',
        element:<Cart />
      },
      {
        path:'/profile',
        element:<Profile />
      },
      {
        path:'/signin',
        element:<SignIn />
      },
      {
        path:'/product/:id',
        element:<SingleProduct />
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
