import './index.css'
import { rootRoute } from './pages/root'
import { topRoute } from './pages/top'
import { RouterProvider, Router } from '@tanstack/router'
import React from 'react'
import ReactDOM from 'react-dom/client'

const routeTree = rootRoute.addChildren([topRoute])

const router = new Router({ routeTree })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
