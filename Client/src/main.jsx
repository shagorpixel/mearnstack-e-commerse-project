import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './Pages/Shop/Shop.jsx'
import RootLayout from './Components/Layout/RootLayout.jsx'
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Orders from './Pages/Orders.jsx';
import Cart from './Pages/Cart.jsx';
import Profile from './Pages/Profile.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import SignIn from './Pages/SignIn.jsx'
import PlaceOrder from './Pages/PlaceOrder.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout />,
    children:[
     
      {
        path:'/',
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
        path:'/product/:productId',
        element:<SingleProduct />
      },
      {
        path:'/place-order',
        element:<PlaceOrder />
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
