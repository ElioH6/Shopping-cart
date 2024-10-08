import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/home'
import App from './components/App/App'
import Cart from './components/Shopping cart/cart'
import NotFound from './components/404/errorPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'cart', element: <Cart /> },
      { path: '*', element: <NotFound /> },
    ]
  }
],
  { basename: '/Shopping-cart' }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
