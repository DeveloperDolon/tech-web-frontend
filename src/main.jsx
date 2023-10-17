import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ContextApi from './All-Jsx/Context-Api/Data-Context.jsx'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './All-Jsx/Router/MainRoute.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <RouterProvider router={MainRoute}></RouterProvider>
    </ContextApi>
  </React.StrictMode>,
)
