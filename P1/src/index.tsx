import React from 'react'
import {createRoot} from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import { Home } from './modules/pages'
import { AboutMe } from './modules/pages'
import { Pets } from  './modules/pages'
//import { Layout } from './Layout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/aboutMe',
        element: <AboutMe />
    },
    {
        path: '/pets',
        element: <Pets />
    }
])

// interface GreetingProps {
//     name: string,
//     title: string
// }



const App = () => {
    return (
        <>
          <RouterProvider router={router} />                  
        </>
        
    )
}



createRoot(document.getElementById('root') as Element).render(<App />)