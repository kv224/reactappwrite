import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LogoutBtn } from './components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <LogoutBtn />,
        },
    ],
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
  </StrictMode>,
)
