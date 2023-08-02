import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()

import Main from './layouts/Main/Main'
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import Registration from './pages/Registration/Registration'
import Contact from './pages/Contact/Contact'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      
      
      {
        path: '/kategoria',
        element: <Category />,
        errorElement: <Error />,
      },
      {
        path: '/zgloszenie',
        element: <Registration />,
        errorElement: <Error />,
      },
      {
        path: '/kontakt',
        element: <Contact />,
        errorElement: <Error />,
      },
      
    ],
  },
])
function App() {
  return (
    <div className='App'>
      <AppContext.Provider value={{}}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
