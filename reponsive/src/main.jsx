import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserForm from './components/UserForm.jsx'
import Userpage from './pages/Userpage.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import store from './redux/store.js'
import { Provider } from 'react-redux'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/edit/:id" element={<UserForm />} />
      <Route path="/users" element={<Userpage />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
